todos = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

/**
 *  Add click listener on ul using event delegation
 *  --> I.e. that adds the listener to existing as well
 *  as not yet created li's
 * */
$('ul').on('click', 'li div.todo', function(e) {
  $(this).toggleClass('done');
});

$('ul').on('click', 'li div.trash-icon', function(e) {
  e.stopPropagation(); // so event is not propagated up the chain
  $(this)
    .parent()
    .fadeOut(400, function() {
      $(this).remove();
    });

  setTimeout(function() {
    $('ul li').css('background', '#eeeeee'); /* grey lighten-3 */
  }, 410);

  setTimeout(function() {
    $('ul li:nth-child(odd)').css('background', 'white');
  }, 420);
});

// append a todo to the ul
function appendTodo(todo) {
  $('ul').append(
    `<li><div class="trash-icon"><i class="far fa-trash-alt"></i></div><div class="todo">${todo}</div></li>`
  );
}

// Append the existing todos to the list
todos.forEach(x => appendTodo(x));

// Add a new task
$('input[type="text"]').on('keypress', function(e) {
  if (e.which === 13 && $(this).val().length > 0) {
    const todo = $(this).val();
    todos.push(todo);
    appendTodo(todo);
    $(this).val('');
  }
});

// Toggle Input field
$('.input-toggle').on('click', function(e) {
  $('input').fadeToggle(700);
  $('.input-container').slideToggle(800);
  $('.input-toggle i').toggleClass('fa-minus');
  $('.input-toggle i').toggleClass('fa-plus');
});
