document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('add-task-button');
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', addTask);
  newTaskInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          addTask();
      }
  });

  function addTask() {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
          const listItem = document.createElement('li');
          listItem.textContent = taskText;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', () => {
              taskList.removeChild(listItem);
          });

          listItem.appendChild(deleteButton);
          taskList.appendChild(listItem);

          newTaskInput.value = '';
          newTaskInput.focus();
      }
  }
});
