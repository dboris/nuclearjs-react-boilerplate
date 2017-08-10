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

export const getters = {
  count: ['CounterStore', 'count'],
}

// View

class CounterPage extends React.Component {
  render () {
    const {count, reactor} = this.props
    return (
      <p>
        <button onClick={actions.decrement.bind(null, reactor)}>-</button>
        {count}
        <button onClick={actions.increment.bind(null, reactor)}>+</button>
      </p>)
  }
}

const gettersToProps = () => {
  const {count} = getters
  return {count}
}

export const Counter = connect(gettersToProps)(CounterPage)
