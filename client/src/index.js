import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import client from './services/apollo/index'
import { ApolloProvider } from '@apollo/client'

import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
