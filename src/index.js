import express from 'express'

let app = express()

app.get('/', (req, res) => {
  res.send('How you doin?')
})

app.listen(3000, () => {
  console.log('Testing app...')
})
