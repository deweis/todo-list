todos = [
  'jQuery: create element, event delegation',
  'put cdns to lib',
  'task 2',
  'task 3',
  'task 4'
];

// Add click listeners
$('ul').on('click', 'li div.todo', function(e) {
  $(this).toggleClass('done');
});

$('ul').on('click', 'li div.trash-icon', function(e) {
  $(this)
    .parent()
    .remove();
});

function appendTodo(todo) {
  $('ul').append(
    `<li><div class="trash-icon"><i class="far fa-trash-alt"></i></div><div class="todo">${todo}</div></li>`
  );
  addMouseListeners();
}

function addMouseListeners() {
  $('li')
    .last()
    .on('mouseenter', function() {
      $(this)
        .children(':first')
        .css('width', '30px')
        .find('i')
        .css('opacity', '1');
    });

  $('li')
    .last()
    .on('mouseleave', function() {
      $(this)
        .children(':first')
        .css('width', '0')
        .find('i')
        .css('opacity', '0');
    });
}

// Append the todos to the list
todos.forEach(x => appendTodo(x));

// Add a new task
$('input').on('click', function(e) {
  $(this).css('color', 'blue');
});

$('input').on('keypress', function(e) {
  var code = e.keyCode || e.which;
  if (code === 13) {
    const todo = $('input').val();
    todos.push(todo);
    appendTodo(todo);
    $('input').val('');
  }
});

// Toggle Input field
$('.input-toggle').on('click', function(e) {
  // $('input').slideToggle(500);
  $('input').fadeToggle(700);
  $('.input-container').slideToggle(800);
  $('.input-toggle i').toggleClass('fa-minus');
  $('.input-toggle i').toggleClass('fa-plus');
});
