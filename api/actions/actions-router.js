const express = require('express')
const {
    actionIdValidation,
    actionBodyValidation
} = require('./actions-middleware')
const actModel = require('./actions-model')

const actionsRouter = express.Router()

actionsRouter.get('/api/actions', (req, res, next) => {
    actModel.get()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(next)
})

actionsRouter.get('/api/actions/:id', actionIdValidation, (req, res) => {
    res.status(200).json(req.act)
})

actionsRouter.post('/api/actions', actionBodyValidation, (req, res, next) => {
    actModel.insert(req.newAct)
        .then(act => {
            res.status(201).json(act)
        })
        .catch(next)
})

actionsRouter.put('/api/actions/:id', actionIdValidation, actionBodyValidation, (req, res, next) => {
    const { id } = req.params
    actModel.update(id, req.body)
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch(next)
})

actionsRouter.delete('/api/actions/:id', actionIdValidation, (req, res, next) => {
    actModel.remove(req.params.id)
        .then(() => {
            res.status(204).json({ message: "successfully deleted" })
        })
        .catch(next)
})

actionsRouter.use((err, rec, res, next) => {//eslint-disable-line
    console.log("ACTIONS ERR HANDLER")
    res.status(err.status || 500).json({
        message: "OOPS! looks like something broke in the actions",
        error: err.message,
        stack: err.stack
    })
})

module.exports = actionsRouter