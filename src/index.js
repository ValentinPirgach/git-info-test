import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import Routes from 'routes'
import 'styles/global-styles'
import 'antd/dist/antd.css';
import registerServiceWorker from 'utils/registerServiceWorker'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com'

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
