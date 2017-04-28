import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mySchema = new Schema({ x: String })
const X = mongoose.model('mycollection', mySchema)

const newSchema = new Schema({ y: String })
const Y = mongoose.model('mynewthing', newSchema)

function getX(req, res) {
  X.findOne({}, 'x', (err, thing) => {
    console.log(err)
    console.log(thing)
    res.send(thing)
  })
}

function makeY(req, res) {
  Y.findOne({}, 'y', (err) => {
    console.log(err)
    const y = new Y({ y: 'something dark side' })
    y.save((e) => {
      console.log(e)
      res.send('created successfully')
    })
  })
}

function deleteDb(req, res) {
  mongoose.connection.db.dropDatabase((err, result) => {
    console.log(err)
    console.log(res)
    res.send(result)
  })
}

export default { getX, makeY, deleteDb }
