import CounterDisplay from './CounterDisplay';
import React from "react";

export default class Counter extends React.Component{
    state = {
        counter: this.props.default
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    counter: state.counter + this.props.increment
                }
            })
        }, this.props.interval)
    }

    render() {
        return (
            <CounterDisplay counter={this.state.counter} />
        )
    }

}




