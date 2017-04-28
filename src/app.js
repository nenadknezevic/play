import Express from 'express'
import store from './store'

const app = new Express()
const router = Express.Router()

router.get('/', (req, res) => {
  res.send('It\'s alive!')
})
router.get('/x', store.getX)
router.get('/make', store.makeX)
router.get('/delete', store.deleteDb)

app.use('/', router)

export default app
