import { Store, toImmutable } from 'nuclear-js'

import * as App from './Page/App'
import * as Counter from './Page/Counter'

function createStore (page) {
  return Store({
    getInitialState () {
      return toImmutable(page.initialState)
    },

    initialize () {
      page.reducers.forEach(([action, reducer]) => { this.on(action, reducer) })
    }
  })
}

export const stores = {
  AppStore: createStore(App),
  CounterStore: createStore(Counter),
}
