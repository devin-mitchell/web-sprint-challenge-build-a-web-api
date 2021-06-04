const express = require('express')
const projModel = require('./projects-model')
const {
    projIdValidation,
    projBodyValidation
} = require('./projects-middleware')

const router = express.Router()

router.get('/api/projects', async (req, res, next) => {
    try {
        const projects = await projModel.get()
        res.status(200).json(projects)
    } catch (err) {
        next(err)
    }
})

router.get('/api/projects/:id', projIdValidation,  (req, res) => {
    res.status(200).json(req.proj)
})

router.post('/api/projects/', projBodyValidation, async (req, res, next) => {
    //add new project to DB and responds with new proj
    try {
        const newProj = await projModel.insert(req.updated)
        res.status(201).json(newProj)
    } catch (err) {
        next(err)
    }

})

router.put('/api/projects/:id', projIdValidation, projBodyValidation, async (req, res, next) => {
    //updates existing proj and returns updated object
    const { id } = req.params
    try {
        const editedProj = await projModel.update(id, req.updated)
        res.status(200).json(editedProj)
    } catch (err) {
        next(err)
    }
})

router.delete('/api/projects/:id', projIdValidation,  (req, res, next) => {
    projModel.remove(req.params.id)
        .then(() => {
            res.status(204).json({message: 'successfully deleted'})
        })
        .catch(next)
})

router.get('/api/projects/:id/actions', projIdValidation, (req, res, next) => {
    projModel.getProjectActions(req.params.id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    console.log('ERROR HANDLING KICKED IN')
    res.status(err.status || 500).json({
        message: 'hmmmst something bad happend in of Projects',
        error: err.message,
        stack: err.stack
    })
})

module.exports = router;