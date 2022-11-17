const { v4: uuidv4 } = require('uuid');


let todos = [{
  id: uuidv4(),
  userId: 1, // tester user 1
  description: "Demo todo item",
  dueDate: "2021-12-24",
  statue: "open"
}];

module.exports = {
  insertTodo: (description, dueDate,  userId) => {
    todos.push({
      id: uuidv4(),
      userId,
      description,
      dueDate,
      status: "open"
    });
  },
  getAllTodos: () => todos,
  getAllUserTodos: (userId) => todos.filter(t => t.userId == userId),
  getTodo: (todoId) => todos.find(t => t.id == todoId)
}