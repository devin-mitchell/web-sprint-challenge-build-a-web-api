const express = require('express');
const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router')
const server = express();

server.use(express.json())
server.use(projectsRouter)
server.use(actionsRouter)
// server.use(actionRouter)
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
