import { Reactor } from 'nuclear-js'
import { Provider, connect, nuclearMixin } from 'nuclear-js-react-addons'
import React from 'react'
import ReactDOM from 'react-dom'

import * as stores from './stores'
import { Counter } from './Page/Counter'

export const reactor = new Reactor({debug: true})
reactor.registerStores(stores)

if (module.hot) {
  // Enable webpack hot module replacement for stores
  module.hot.accept('./stores', () => {
    reactor.replaceStores(require('./stores'))
  })
}

window.App = {
  reactor,
  Counter,
}

class App extends React.Component {
  render () {
    return (
      <Provider reactor={reactor}>
        <Counter />
      </Provider>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
