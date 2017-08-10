import React from 'react'
import { connect } from 'nuclear-js-react-addons'
import { inc, dec } from '../util'

// Action types

export const Increment = 'Counter_Increment'
export const Decrement = 'Counter_Decrement'

// Action creators

export const actions = {
  increment (reactor) { reactor.dispatch(Increment) },
  decrement (reactor) { reactor.dispatch(Decrement) },
}

// Model

export const initialState = {
  count: 0,
}

// Update

export const reducers = [
  [Increment, (state) => { return state.update('count', inc) }],
  [Decrement, (state) => { return state.update('count', dec) }],
]

// Store queries

const count = ['CounterStore', 'count']
const countIsNegative = [count, (n) => { return n < 0 }]

const gettersToProps = () => {
  return {count, countIsNegative}
}

// View

class CounterPage extends React.Component {
  render () {
    const {reactor, count, countIsNegative} = this.props
    return (
      <p>
        <button onClick={actions.decrement.bind(null, reactor)}>-</button>
        <span style={{color: countIsNegative ? 'red' : 'green'}}>{count}</span>
        <button onClick={actions.increment.bind(null, reactor)}>+</button>
      </p>)
  }
}

export const Counter = connect(gettersToProps)(CounterPage)
