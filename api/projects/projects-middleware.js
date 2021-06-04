const projModel = require('./projects-model')

const projIdValidation = (req, res, next) => {
    console.log('PROJ_ID_VALIDATION')
    const { id } = req.params
    projModel.get(id)
        .then(proj => {
            if (!proj) {
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
    const { name, description, completed } = req.body 
    if (!name || !description || !completed) {
        res.status(400).json({
            message: 'name, description, and completed status are all required'
        })
    } else {
        req.updated = {
            name: name.trim(),
            description: description.trim(),
            completed: completed
        }
        next()
    }
}

module.exports = {
    projIdValidation,
    projBodyValidation
}