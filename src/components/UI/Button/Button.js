import React, { Component } from 'react';
import classes from './Button.module.css';

class button extends Component {
    state = {
        mode: ''
    }
    render() {
        return (
            <div className={classes.button}>
                < button
                    {...this.props.name === 'dark' ? { className: classes.dark } : { className: classes.light }}
                    onClick={this.props.clicked}
                    disabled={this.props.disabled} > {this.props.name}</button >

            </div>)
    }
}

export default button;