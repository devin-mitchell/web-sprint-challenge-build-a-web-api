const projModel = require('./projects-model')

const projIdValidation = (req, res, next) => {
    console.log('PROJ_ID_VALIDATION')
    const { id } = req.params
    projModel.get(id)
        .then(proj => {
            if (!proj) {
                console.log("OOPS")
                res.status(404).json({
                    message: `OOPS!  doesn't look like a project with id (${id}) exists`
                })
            } else {
                req.proj = proj
                next()
            }
        })
        .catch(next) 
}

const projBodyValidation = (req, res, next) => {
    console.log('PROJ_BODY_VALIDATION')
}


module.exports = {
    projIdValidation,
    projBodyValidation
}