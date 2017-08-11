import { Reactor } from 'nuclear-js'
import React from 'react'
import ReactDOM from 'react-dom'

import { stores } from './stores'
import { App, actions } from './Page/App'

const reactor = new Reactor({debug: DEBUG})
reactor.registerStores(stores)

if (module.hot) {
  // Enable webpack hot module replacement for stores
  module.hot.accept('./stores', () => {
    reactor.replaceStores(require('./stores'))
  })
}

window.App = {reactor}

// Listen for back button, forward button, etc
window.onpopstate = () => {
  actions.updateRoute(reactor, window.location)
}

// Set initial route
actions.updateRoute(reactor, window.location)

const app = React.createElement(App, {reactor}, null)
ReactDOM.render(app, document.getElementById('root'))
