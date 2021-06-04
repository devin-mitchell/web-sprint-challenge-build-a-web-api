const express = require('express')
const {
    actionIdValidation,
    actionBodyValidation
} = require('./actions-middleware')

const actionsRouter = express.Router()

actionsRouter.get('/api/actions', (rec, res) => {
    //gets actions
})

actionsRouter.get('/api/acitons/:id', actionIdValidation, (req, res) => {
    //gets action by id
})

actionsRouter.post('/api/actions', actionBodyValidation, (rec, res) => {
    //create new action
})

actionsRouter.put('/api/actions/:id', actionIdValidation, actionBodyValidation, (rec, res) => {
    //edit existing action by ID
})

actionsRouter.delete('/api/actions/:id', actionIdValidation, (rec, res) => {
    //deletes existing action by ID
})

module.exports = actionsRouter