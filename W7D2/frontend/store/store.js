import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch, otherMiddleWare));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

function addLoggingToDispatch(store) {
  // let StDis = store.dispatch;
  return (next) => {
    return (action) => {
      console.log(store.getState());
      console.log(action);
      next(action);
      console.log(store.getState());
    }
  }
}

function otherMiddleWare (store) {
  return (next) => {
    return (action) => {
      console.log(next(action));
    }
  }
}

export default configureStore;