const mongoose = require('mongoose')
const activitySchema = new mongoose.Schema(
  {
    activities: {
      type: [Object], 
      required: true
    },
    tide: {
      type: String,
      required: true
    }
  }
)

module.exports = mongoose.model('Activity', activitySchema)