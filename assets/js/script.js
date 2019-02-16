todos = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];

// Append the todos to the list
todos.forEach(x => $('ul').append(`<li>${x}</li>`));

// line-through on click
$('li').on('click', function(e) {
  $(this).toggleClass('done');
});
