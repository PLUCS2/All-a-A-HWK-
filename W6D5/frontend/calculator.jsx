import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '', 
            result: 0 
        }

        this.setNumOne = this.setNumOne.bind(this);
        this.setNumTwo = this.setNumTwo.bind(this);
        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
        this.multiply = this.multiply.bind(this)
        this.divide = this.divide.bind(this)
        this.clear = this.clear.bind(this)
    }

    setNumOne(e) {
        this.setState({num1: parseInt(e.target.value)})
    }

    setNumTwo(e) {
        this.setState({ num2: parseInt(e.target.value) })
    }
   
    add() {
        this.setState({result: (this.state.num1 + this.state.num2)})
    }

    multiply() {
        this.setState({ result: (this.state.num1 * this.state.num2) })
    }

    divide() {
        this.setState({ result: (this.state.num1 / this.state.num2) })
    }

    subtract() {
        this.setState({ result: (this.state.num1 - this.state.num2) })
    }

    clear() {
        this.setState({ result: 0, num1: '', num2: '' })
    }


    render() {
        return (
            <div>
                <h1>{this.state.result}</h1>
                <input type="text" value={this.state.num1} onChange={this.setNumOne}/>
                <input type="text" value={this.state.num2} onChange={this.setNumTwo} />
                <button type="submit" onClick={this.add}>+</button>
                <button type="submit" onClick={this.subtract}>-</button>
                <button type="submit" onClick={this.divide}>/</button>
                <button type="submit" onClick={this.multiply}>x</button>
                <button type="submit" onClick={this.clear}>clear</button>
            </div>
        );
    }
}

export default Calculator;
