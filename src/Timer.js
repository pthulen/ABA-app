import React, { Component } from 'react';


class Timer extends Component {
    render() {
        return (
            <div>
                <div>{this.props.currentTime}</div>
                
            </div>
        );
    }
}

export default Timer;