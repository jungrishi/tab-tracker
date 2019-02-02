/*eslint-disable*/
const Joi= require('joi')

module.exports = {
    // register method
    register (req, res, next){
      const schema = {
          // structure
          email: Joi.string().email(),
          password: Joi.string().regex(
              new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
      }  

const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch(error.details[0].context.key) {
        case 'email' :
            res.status(400).send({
                error: 'no valid email'
            })
            break     
        case 'password' :
            res.status(400).send({
                error: `password not set prpo
                    <br>
                    1. 8-32
                    2. a-z A-Z 0-9
                    </br>`                    
            })
            break
        default: 
            res.status(400).send({
                error: 'invalid'
            })
            
        } 
      }
      else {
        next()
      }
  }
}
