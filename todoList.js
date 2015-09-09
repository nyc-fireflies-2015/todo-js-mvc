var TodoList = function(tasks) {
  this.tasks = tasks || [];
};

TodoList.prototype.addTask = function(task) {
  this.tasks.push(task);
};


