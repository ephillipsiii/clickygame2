import React, { Component } from 'react';
import './NavText.css';

class NavText extends Component {
    state = {
        text: '',
        animate: false
    };
    componentWillReceiveProps({ score, highScore }) {
        const newState = { animate: true };
        if (score === 0 && highScore === 0) {
            newState.text = 'incorrect';
        }
        else {
            newState.text = 'correct';
        }
        this.setState(newState, () => 
            setTimeout(() => 
                this.setState({animate: false }), 500)
        );
    }
    renderText = () => {
        switch (this.state.text) {
            case 'correct':
                return "You have chosen correctly!";
            case 'incorrect':
                return "You have chosen wrong!";
            default:
                return "Click on an image to begin";
        }
    };

    render() {
        return (
            <li className={this.state.animate ? this.state.text : ""}>
                {this.renderText()}
            </li>
        );
    }
}

export default NavText;