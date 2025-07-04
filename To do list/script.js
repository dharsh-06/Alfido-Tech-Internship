document.getElementById('add-btn').addEventListener('click', function () {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please write something beautiful ✨');
    return;
  }
  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', function () {
    li.remove();
  });
  li.appendChild(deleteBtn);
  document.getElementById('task-list').appendChild(li);
  taskInput.value = '';
});
