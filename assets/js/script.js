todos = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];

function appendTodo(todo) {
  $('ul').append(`<li>${todo}</li>`);
  $('li')
    .last()
    .on('click', function(e) {
      $(this).toggleClass('done');
    });
}

// Append the todos to the list
todos.forEach(x => appendTodo(x));

// Add a new task
$('input').on('keypress', function(e) {
  var code = e.keyCode || e.which;
  if (code === 13) {
    const todo = $('input').val();
    todos.push(todo);
    appendTodo(todo);
    $('input').val('');
  }
});
