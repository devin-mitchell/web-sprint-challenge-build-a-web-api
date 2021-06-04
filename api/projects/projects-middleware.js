const projModel = require('./projects-model')

const projIdValidation = (req, res, next) => {
    console.log('PROJ_ID_VALIDATION')
    next()
}

const projBodyValidation = (req, res, next) => {
    console.log('PROJ_BODY_VALIDATION')
    next()
}
module.exports = {
    projIdValidation,
    projBodyValidation
}