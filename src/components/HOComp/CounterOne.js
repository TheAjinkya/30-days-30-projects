import React, { Component } from 'react'
import WithCounter from './WithCounter';

export class CounterOne extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>CounterOne: {this.props.count} <br />
            <button className='bg-green-400 text-white p-2 m-2' onClick={() => this.props.increment()}>increment</button>
        </div>)
    }
}

export default WithCounter(CounterOne)