import React from 'react'
import { connect } from 'nuclear-js-react-addons'

import { reactor } from '../main'

export const Increment = 'Increment'
export const Decrement = 'Decrement'

export const actions = {
  increment () { reactor.dispatch(Increment) },
  decrement () { reactor.dispatch(Decrement) },
}

export const getters = {
  count: ['CounterStore', 'count'],
}

class CounterPage extends React.Component {
  render () {
    const {count} = this.props
    return (
      <p>
        <button onClick={actions.decrement}>-</button>
        {count}
        <button onClick={actions.increment}>+</button>
      </p>)
  }
}

function gettersToProps () {
  return {
    count: getters.count,
  }
}

export const Counter = connect(gettersToProps)(CounterPage)
