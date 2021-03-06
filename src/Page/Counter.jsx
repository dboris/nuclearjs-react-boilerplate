import React from 'react'
import { connect } from 'nuclear-js-react-addons'

import { dispatch, dispatchPayload, inc, dec } from '../util'
import { Counter as CounterModel } from '../Data/Counter'

// Action types

export const Increment = 'Counter_Increment'
export const Decrement = 'Counter_Decrement'
export const Times = 'Counter_Times'

// Action creators

export const actions = {
  increment: dispatch(Increment),
  decrement: dispatch(Decrement),
  times: dispatchPayload(Times),
}

// Model

export const initialState = {
  counter: new CounterModel(),
}

// Update

export const reducers = [
  [Increment, (state) => {
    return state.update('counter', (counter) => {
      return counter.update('count', inc).update('updated', inc)
    })
  }],
  [Decrement, (state) => {
    return state.update('counter', (counter) => {
      return counter.update('count', dec).update('updated', inc)
    })
  }],
  [Times, (state, factor) => {
    return state.update('counter', (counter) => {
      return counter
        .update('count', (count) => { return count * factor })
        .update('updated', inc)
    })
  }],
]

// Getters

const count = ['CounterStore', 'counter', 'count']
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
        <button onClick={actions.times.bind(null, reactor, 2)}>x2</button>
        <button onClick={() => { reactor.dispatch(Times, 3) }}>x3</button>
      </p>)
  }
}

export const Counter = connect(gettersToProps)(CounterPage)
