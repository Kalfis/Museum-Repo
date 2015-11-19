let mongoose = require('mongoose')
let artistSchema = new mongoose.Schema ({
  name: string,
  img_url: string,
  nationality: string,
  birthYear: number,
  description: string
})

var artist= mongoose.model('Artist', artistSchema)

module.exports = artist
