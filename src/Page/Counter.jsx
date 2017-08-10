import React from 'react'
import { connect } from 'nuclear-js-react-addons'
import { inc, dec } from '../util'

export const Increment = 'Increment'
export const Decrement = 'Decrement'

export const actions = {
  increment (reactor) { reactor.dispatch(Increment) },
  decrement (reactor) { reactor.dispatch(Decrement) },
}

export const initialState = {
  count: 0,
}

export const reducers = [
  [Increment, (state) => { return state.update('count', inc) }],
  [Decrement, (state) => { return state.update('count', dec) }],
]

export const getters = {
  count: ['CounterStore', 'count'],
}

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
