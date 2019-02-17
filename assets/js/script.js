todos = [
  'Check on different pointer formats',
  'jQuery: fades, slides',
  'CSS: Margin, Padding, Float',
  'jQuery: create element, event delegation',
  'CSS: box-shadow, transition'
];

function appendTodo(todo) {
  $('ul').append(
    `<li><div class="trash-icon"><i class="far fa-trash-alt"></i></div><div class="todo">${todo}</div></li>`
  );
  addClickListeners();
  addMouseListeners();
}

function addClickListeners() {
  $('li div.todo')
    .last()
    .on('click', function(e) {
      $(this).toggleClass('done');
    });
  $('li div.trash-icon')
    .last()
    .on('click', function(e) {
      $(this)
        .parent()
        .remove();
    });
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
  $('input').toggle();
});
