import Express from 'express'

const app = new Express()
const router = Express.Router()

router.get('/', (req, res) => {
  res.send('Yo')
})

app.use('/', router)

export default app
