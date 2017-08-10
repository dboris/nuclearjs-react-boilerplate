import { Store, toImmutable, Immutable } from 'nuclear-js'
import * as Counter from './Page/Counter'
import { inc, dec } from './util'

export const CounterStore = Store({
  getInitialState () {
    return Immutable.Map({
      count: 0,
    })
  },

  initialize () {
    this.on(Counter.Increment, (state) => { return state.update('count', inc) })
    this.on(Counter.Decrement, (state) => { return state.update('count', dec) })
  }
})
