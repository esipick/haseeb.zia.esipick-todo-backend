const service = require('../service/service');
const response = require('../shared/genericResponse');
require('dotenv').config();
    async function getTasks(req, res, next) {
        
        const data = await service.getTasks(req, res);
        if (data) {
            res.status(200).json({ success: true, data: data });
        } else {
            res.status(401).json({ success: false, message: 'Error Occurred' });
        }
        
    }
    async function getTaskById(req, res, next) {
        
        const data = await service.getTaskById(req, res);
        if (data) {
            res.status(200).json({ success: true, data: data[0]});
        } else {
            res.status(401).json({ success: false, message: 'Error Occurred' });
        }
        
    }
    async function addTask(req, res, next) {
        
        const data = await service.addTask(req, res);
         if (data) {
            res.status(200).json({ success: true, message:'Task Added Successfully'});
        } else {
            res.status(401).json({ success: false, message: 'Error Occurred' });
        }
        
    }
    async function updateTask(req, res, next){
        
        const data = await service.updateTask(req, res);
         if (data) {
            res.status(200).json({ success: true, message:'Task Updated successfully'});
        } else {
            res.status(401).json({ success: false, message: 'Error Occurred' });
        }
        
    }
    async function deleteTask(req, res, next){
        
        const data = await service.deleteTask(req, res);
         if (data) {
            res.status(200).json({ success: true, message:'Successfully'});
        } else {
            res.status(401).json({ success: false, message: 'Error Occurred' });
        }
        
    }
module.exports = {
    getTasks,
    getTaskById,
    addTask,    
    updateTask,
    deleteTask
};