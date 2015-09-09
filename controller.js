var Controller = function(todoList, view) {
  this.todoList = todoList;
  this.view = view;
  view.ctrl = this;
};

Controller.prototype.addTask = function(taskName, doneness) {
  var params = {
    name: taskName,
    done: !!doneness 
  };
  this.todoList.addTask(params);
  this.view.displayList(this.todoList.tasks);
};



