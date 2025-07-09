//Seleccionando elementos
const addTaskBtn = document.querySelector('addTaskBtn');
const taskCreateBtn = document.querySelector('taskCreateBtn');
const taskForm = document.querySelector('.taskForm')
const modal = document.querySelector('#modal');

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('show');
});
// Evaluando el formulario
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleTask = document.querySelector('#titleTask').value.trim();
    const dateTask = document.querySelector('#dateTask').value.trim();
    const descTask = document.querySelector('#descTask').value.trim();
    const prioTask = document.querySelector('#prioTask').value.trim();
    const colorTask = document.querySelector('#colorTask').value.trim();

    const today = new Date().toISOString().split('T')[0];
    if (dateTask < today) {
        showAlert('La fecha no puede ser anterior al día actual', true);
        return;
    }

    if (titleTask === '' || dateTask === '' || descTask === '' || prioTask === '') {
        showAlert('All fields are required', true);
        return;
    } else {
        modal.classList.remove('show');
        createTasks(titleTask, dateTask, descTask, prioTask, colorTask);
        renderTasks();
        taskForm.reset();
    }
}); 