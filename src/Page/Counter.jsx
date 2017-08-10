import React from 'react'
import { connect } from 'nuclear-js-react-addons'

export const Increment = 'Increment'
export const Decrement = 'Decrement'

export const actions = {
  increment (reactor) { reactor.dispatch(Increment) },
  decrement (reactor) { reactor.dispatch(Decrement) },
}

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

function gettersToProps () {
  return {
    count: getters.count,
  }
}

export const Counter = connect(gettersToProps)(CounterPage)
