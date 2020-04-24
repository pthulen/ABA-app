import React, { Component } from 'react';
import Timer from './Timer';

class TimerControls extends Component {
constructor(props) {
    super(props);
    
    this.state = {
        ms: 0,
        s: 0,
        m: 0,
        timer: undefined,
        currentTime: '00:00:00'
    };
    this.start = this.start.bind(this);
    this.run = this.run.bind(this);
    this.getTimer = this.getTimer.bind(this);
}

start() {
    if(!this.state.timer) {
    this.state.timer = setInterval(this.run, 10);
    }
}
getTimer(){
    this.setState({currentTime: ((this.state.m < 10 ? "0" + this.state.m : this.state.m) + ":" + (this.state.s < 10 ? "0" + this.state.s : this.state.s) + ":" + (this.state.ms < 10 ? "0" + this.state.ms : this.state.ms)) })

}

// this.setState({currentTime: ((this.state.m < 10 ? "0" + this.state.m : this.state.m) + ":" + (this.state.s < 10 ? "0" + this.state.s : this.state.s) + ":" + (this.state.ms < 10 ? "0" + this.state.ms : this.state.ms)) })

run() {
    this.getTimer()
    this.state.ms++;
    if(this.state.ms == 100) {
        this.state.ms = 0
        this.state.s++;
    }
    if(this.state.s == 60) {
        this.state.s=0;
        this.state.m++
    }
}


    render() {
        
        return (
            <div>
                <Timer currentTime={this.state.currentTime} />
                <div className="controls">
                    <button onClick={this.start}>Start</button>
                    <button>Stop</button>
                    <button>Reset</button>
                </div>
            </div>
        );
    }
}

export default TimerControls;