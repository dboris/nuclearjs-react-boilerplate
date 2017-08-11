import { Provider, connect } from 'nuclear-js-react-addons'
import React from 'react'

import { Route } from '../Data/Route'
import { Page } from '../Views/Page'
import { Counter } from './Counter'
import { Home } from './Home'

// Action types

export const UpdateRoute = 'App_UpdateRoute'

// Action creators

export const actions = {
  updateRoute: (reactor, route) => {
    reactor.dispatch(UpdateRoute, route)
  },
}

// Model

export const initialState = {
  route: null,
}

// Update

export const reducers = [
  [UpdateRoute, (state, {pathname, search=''}) => {
    return state.set('route', new Route({pathname, search}))
  }],
]

// Getters

const route = ['AppStore', 'route']

const gettersToProps = () => {
  return {route}
}

// View

class AppComponent extends React.Component {
  render () {
    const {reactor, route} = this.props
    const pathname = route.get('pathname')
    const search = route.get('search')
    updateLocationAndTitle(pathname + search, 'TODO')
    return (
      <Provider reactor={reactor}>
        <Page>
          {
            pathname === '/counter' ? <Counter /> : <Home />
          }
        </Page>
      </Provider>)
  }
}

export const App = connect(gettersToProps)(AppComponent)

// Helpers

function updateLocationAndTitle (url, title) {
  const {pathname, search} = window.location
  if (url !== pathname + search) {
    window.history.pushState(null, title, url)
  }
  document.title = title
}
