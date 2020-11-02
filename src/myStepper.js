import React, {Component} from "react";
import Button from 'react-bootstrap/Button';

class MyStepper extends Component{

    constructor(){
        super();
        this.state = {
            number: 0
        };
    };

    handleChange = (event) => {
        event.preventDefault();
        let currentNumber = this.state.number;
        this.setState({number: event.target.name === "subtract" ? currentNumber - 1 : currentNumber + 1})
    }

    handleNewInput = (event) => {
        
    }


    render(){
        return(
            <form>
                <Button variant="success" size="sm" name='subtract' onClick={this.handleChange}>
                    -
                </Button>
                <input type='number' value={this.state.number} onChange={this.handleNewInput}/>
                <Button variant="success" size="sm" name='add' onClick={this.handleChange}>
                    +
                </Button>
            </form>
        )
    }
}

export default MyStepper;