import React, { Component } from 'react';
import Button from '../Button/Button';

class ChangeMode extends Component {

    state = {
        changed: this.props.mode
    }

    changeModeHandler = () => {
        this.props.clicked()
        { this.state.changed === 'dark' ? this.setState({ changed: 'light' }) : this.setState({ changed: 'dark' }) }
    }

    render() {
        return (<Button name={this.state.changed} clicked={this.changeModeHandler} />)
    }
}

export default ChangeMode;