modal-container
taskForm
addTaskBtn
taskCreateBtn

const addTaskBtn = document.querySelector('#addTaskBtn');
const taskCreateBtn = document.querySelector('#taskCreateBtn');
const taskForm = document.querySelector('taskForm');
const modal = document.querySelector('modal');

addTaskBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

taskCreateBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});



