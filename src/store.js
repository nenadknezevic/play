import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mySchema = new Schema({ x: String })
const X = mongoose.model('mything', mySchema)

function getX(req, res) {
  X.findOne({}, 'x', (err, thing) => {
    console.log(err)
    console.log(thing)
    res.send(thing)
  })
}

function makeX(req, res) {
  const x = new X({ x: 'something dark side' })
  x.save((e) => {
    console.log(e)
    res.send('created successfully')
  })
}

function deleteDb(req, res) {
  mongoose.connection.db.dropDatabase((err, result) => {
    console.log(err)
    console.log(res)
    res.send(result)
  })
}

export default { getX, makeX, deleteDb }
