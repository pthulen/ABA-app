import React, { Component } from 'react';

class BehaviorCount extends Component {
    render() {
        return (
            <div className="behaviors-count">
                <p>Bx 1: {this.props.resOne}</p>
                <p>Bx 2: {this.props.resTwo}</p>
                <p>Bx 3: {this.props.resThree}</p>
            </div>
        );
    }
}

export default BehaviorCount;