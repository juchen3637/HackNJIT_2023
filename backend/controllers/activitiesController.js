const Activity = require('../models/Activity')

const getActivities = async (req, res) => {
  const {tide} = req.params
  let lowActivities = null
  let highActivities = null
  if (tide.trim().toLowerCase() !== 'high' && tide.trim().toLowerCase() !== 'low') return res.status(400).json({error: 'Tide can only be high or low.'})
  if (tide.trim().toLowerCase() === 'low') {
    lowActivities = await Activity.find({tide: tide})
    return res.status(200).json({lowActivities: lowActivities[0]});
  } else if (tide.trim().toLowerCase() === 'high') {
    highActivities = await Activity.find({tide: tide})
    return res.status(200).json({highActivities: highActivities[0]});
  }
}

module.exports = {getActivities}