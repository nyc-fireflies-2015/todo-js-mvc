document.addEventListener('DOMContentLoaded', function(){
  var model = new TodoList();
  var view = new View(document.getElementById('task_list'));
  var ctrl = new Controller(model, view);
});
