// Write your "projects" router here!
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

router.get('/api/projects/:id', projIdValidation, async (req, res, next) => {
    //gets project by id
})

router.post('/api/projects/', projBodyValidation, async (req, res) => {
    //add new project to DB and responds with new proj
})

router.put('/api/projects/:id', projIdValidation, projBodyValidation, async (req, res) => {
    //updates existing proj and returns updated object
})

router.delete('/api/projects/:id', projIdValidation, async (req, res) => {
    //deletes project by ID
})

router.get('/api/projects/:id/actions', projIdValidation, async (req, res) => {
    //gets all actions in specified project using its ID
})
module.exports = router;