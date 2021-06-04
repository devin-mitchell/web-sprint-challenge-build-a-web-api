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
    next()
}
module.exports = {
    actionIdValidation,
    actionBodyValidation
}