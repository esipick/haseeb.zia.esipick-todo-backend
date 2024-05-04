var todos = require('../shared/todos');
require('dotenv').config();
const service = {

  getTasks: (req, res) => {

    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const sortDirection = req.query.sortDirection;
    const sortBy = req.query.sortBy;
    
    let sortedTodos = [];
    sortedTodos = todos.slice().sort((a, b) => {
      if (sortDirection === 'asc') {
          return a[sortBy] - b[sortBy];
      } else {
          return b[sortBy] - a[sortBy];
      }
  });

    let pagination = sortedTodos.slice(startIndex,endIndex);
    
    var todoList = pagination.filter((x)=> x.isDeleted != 1)
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