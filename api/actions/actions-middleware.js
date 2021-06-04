const actModel = require('./actions-model')

const actionIdValidation = (req, res, next) => {
    console.log("ACTION ID VALIDATION")
    const { id } = req.params
    actModel.get(id)
        .then(action => {
            if (!action) {
                res.status(404).json({
                    message: `Sorry!  No actions with id ${id} seem to exist`
                })
            } else {
                req.act = action
                next()
            }
        })
        .catch(next)
}
const actionBodyValidation = (req, res, next) => {
    console.log("ACTION BODY VALIDATION")
    const { description, notes, project_id } = req.body
    if (!description || !notes || !project_id) {
        res.status(400).json({
            message: 'all fields are required'
        })
    } else {
        console.log("SUCCESS IN THE MIDDLEWARE")
        req.newAct = {
            description: description.trim(),
            notes: notes.trim(),
            project_id: project_id
        }
        next()
    }
}
module.exports = {
    actionIdValidation,
    actionBodyValidation
}