import React from 'react';

import GiphysIndex from './giphys_index';
import GiphysIndexItem from './giphys_index_item';


class GiphySearch extends React.Component {
    constructor () {
        super(); 
        this.state = {
            search: 'cats',
        }

        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.giphys = []; 
    }

    componentDidMount() {
        this.props.fetchSearchGiphys('cats')
    }

    handleChange(e) {
        this.setState({search: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault(); 
        let term = this.state.search.split('').join('+'); 
        this.props.fetchSearchGiphys(term); 
        // this.setState({search: ''})
    }

    render() {
        let { giphys } = this.props; 

        return (
            <div>
                <form>
                    <label> Input
                        <input type="text" value={this.state.search} onChange={this.handleChange}/>
                    </label>

                    <input type="submit" onClick={this.handleSubmit}/>
                </form>
                <GiphysIndex giphys={giphys} />
            </div>
        )
    }

}

export default GiphySearch; 