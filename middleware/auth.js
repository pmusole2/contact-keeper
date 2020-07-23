const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    // Get Token from header
    const token = req.header('x-auth-token')

    // Check if Not token
    if(!token){
        return res.status(401).json({msg:'No token, authorization denied'})
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        req.user = decoded.user
        next()
    } catch (error) {
        req.status(401).json({msg: 'Token is not valid'})
    }
}