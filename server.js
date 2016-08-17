import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()
const port = process.env.PORT || 5000

app.use('/public', express.static('public'))

import Component from './src/server/app.jsx'
const App = renderToString(<Component />)

app.get('/', (req, res) => {
  res.send(App)
})

app.listen(port, () => {
  console.log(`[APP] Listening on port => ${port}`)
})
