todos = ['task 1', 'task 2', 'task 3', 'task 4'];

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
    .fadeOut(400, () => $(this).remove());
});

// Add mouse listener on ul using event delegation
$('ul').on('mouseenter', 'li', function() {
  $(this)
    .children(':first')
    .css('width', '30px')
    .find('i')
    .css('opacity', '1');
});

$('ul').on('mouseleave', 'li', function() {
  $(this)
    .children(':first')
    .css('width', '0')
    .find('i')
    .css('opacity', '0');
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
$('input').on('click', function(e) {
  $(this).css('color', 'blue');
});

$('input[type="text"]').on('keypress', function(e) {
  if (e.which === 13) {
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
