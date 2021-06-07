const express = require('express');
const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router')

const server = express();

server.use(express.json())
server.use(projectsRouter)
server.use(actionsRouter)

module.exports = server;
