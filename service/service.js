var todos = require('../shared/todos');
require('dotenv').config();
const service = {

  getTasks: (req, res) => {
      var todoList = todos.filter((x)=> x.isDeleted != 1)
   return todoList;
},

getTaskById: (req, res) => {
      var todoDetail = todos.filter((x)=> x.id == req.params.id)
   return todoDetail;
},

addTask: (req, res) => {
    var id = todos.length + 1;
    if (req.body) {
      req.body.id = id;
      req.body.isDeleted = 0;
    }
    todos.push(req.body)
    return true;
},

updateTask:(req, res) => {
    var updateTask = req.body;
    todos = todos.map((x) => {
    if (x.id === updateTask.id) {
      return updateTask;
    } else {
      return x;
    }
});
    return true;
},

deleteTask: (req, res) => {
  var id = req.body;
  todos.forEach((element) => {
    if (id.includes(element.id)) {
      element.isDeleted = 1;
  }
  });
  return true
}

}



module.exports = service;