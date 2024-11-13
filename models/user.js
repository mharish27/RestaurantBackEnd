const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true
    },
    last_name: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    email_id: {
        type: String,
        required: true
    },
    phone_number: {
      type: Number,
      required: true
    },
    creation_date: {
      type: Date,
      required: true,
      default: Date.now
    }
  })
  
  module.exports = mongoose.model('user', userSchema)