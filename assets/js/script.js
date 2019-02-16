todos = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6'];

for (let i = 0; i < todos.length; i++) {
  $('ul').append(`<li>${todos[i]}</li>`);
}
