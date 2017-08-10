import { Provider } from 'nuclear-js-react-addons'
import React from 'react'

import { Page } from '../Views/Page'
import { Counter } from './Counter'

export class App extends React.Component {
  render () {
    const {reactor} = this.props
    return (
      <Provider reactor={reactor}>
        <Page>
          <Counter />
        </Page>
      </Provider>)
  }
}
