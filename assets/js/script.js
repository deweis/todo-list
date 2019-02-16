todos = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];

function appendTodo(todo) {
  $('ul').append(
    `<li><div class="trash-icon"><i class="far fa-trash-alt"></i></div><div class="todo">${todo}</div></li>`
  );

  $('li div.todo')
    .last()
    .on('click', function(e) {
      $(this).toggleClass('done');
    });

  $('li').on('mouseenter', function() {
    $(this)
      .children(':first')
      .css('width', '30px')
      .find('i')
      .css('opacity', '1');
  });

  $('li').on('mouseleave', function() {
    $(this)
      .children(':first')
      .css('width', '0')
      .find('i')
      .css('opacity', '0');
  });

  $('li div.trash-icon')
    .last()
    .on('click', function(e) {
      $(this)
        .parent()
        .remove();
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
