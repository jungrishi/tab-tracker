// defines all the endpoinnts
/* eslint-disable */

const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try{
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err){
        res.status(400).send({
          error: 'this is used.'
    // email already exist

        })
    }
  }
}
