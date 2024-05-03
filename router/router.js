const express = require('express');
const controller = require('../controller/controller');
const router = express.Router()

    

router.get('/get-tasks', controller.getTasks);
router.get('/get-task/:id', controller.getTaskById);
router.post('/add-task', controller.addTask);
router.post('/update-task', controller.updateTask);
router.post('/delete-task', controller.deleteTask);


module.exports = router;