import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mySchema = new Schema({ x: String })
const X = mongoose.model('mycollection', mySchema)

function getX(req, res) {
  X.findOne({}, 'x', (err, thing) => {
    console.log(thing)
    res.send(thing)
  })
}

function deleteDb() {

}

export default { getX, deleteDb }
