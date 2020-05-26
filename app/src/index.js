import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import AppContainer from './addTaskContainer'
import rootReducer from '../src/reducer/index'

const store = createStore(rootReducer)
console.log("its loading");
render(
    
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)