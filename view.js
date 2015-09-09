var View = function(element) {
  this.element = element;

  document.addEventListener('submit', function(event) {
    event.preventDefault();
    this.handleSubmit();
  }.bind(this));

};

View.prototype.displayList = function(tasks) {
  console.log(tasks);
  //debugger
  var html = '';
  for(var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    console.log('task', task);
    html += '<li>';
    html += task.name + ' ';
    html += task.done? 'Yes' : 'No';
    html += '<input type="checkbox"> mark done';
    html += '</li>';
  }
  console.log('list from view', html);
  this.element.innerHTML = html;
};

View.prototype.handleSubmit = function() {
  var taskName = document.getElementById('task_name').value;
  this.ctrl.addTask(taskName);
};
