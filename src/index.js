import mongoose from 'mongoose'

import config from './config'
import app from './app'

mongoose.connect(config.mongoUrl)
mongoose.connection.on('error', () => {
  console.log('cannot connect!')
})
mongoose.connection.on('open', () => {
  console.log('db connection is open')
})

app.listen(3000, () => {
  console.log('Testing app...')
})
