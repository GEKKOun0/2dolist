
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskCreateBtn = document.querySelector('#taskCreateBtn');
const taskForm = document.querySelector('.taskForm');
const modal = document.querySelector('#modal');

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('show');
});

//evaluando el formulario
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleinput = document.querySelector('#taskTitle')
    const dateinput = document.querySelector('#taskDate')
    const descinput = document.querySelector('#taskDesc')
    const prioinput = document.querySelector('#taskPrio')
    const colorinput = document.querySelector('#taskColor')

    const titleTask = titleinput.value.trim();
    const dateTask = dateinput.value.trim();
    const descTask = descinput.value.trim();
    const prioTask = prioinput.value.trim();
    const colorTask = colorinput.value.trim();


    // console.log('titleTask:', titleTask);
    // console.log('dateTask:', dateTask);
    // console.log('descTask:', descTask);
    // console.log('prioTask:', prioTask);

    const today = new Date().toISOString().split('T')[0];
    if (dateTask < today) {
        showAlert('La fecha no puede ser anterior al día actual', true);
        return;
    }

    if (titleTask.value.trim() === '' || dateTask.value.trim() === '' || descTask.value.trim() === '' || prioTask.value.trim() === '') {
        showAlert('All fields are requiered', true);
        return;
    } else {
        modal.classList.remove('show');
        // resetTasks();
        createTasks(titleTask, dateTask, descTask, prioTask, colorTask);
        renderTask();
        taskForm.reset();
    }

});

function createTasks(titleTask, dateTask, descTask, prioTask, colorTask) {
    const task = {
        id: Date.now(),
        title: titleTask,
        date: dateTask,
        desc: descTask,
        prio: prioTask,
        color: colorTask
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTask() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const tasklist = document.querySelector('.task-container');
    tasklist.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('DIV');
        taskItem.classList.add('task-item');
        taskItem.style.backgroundColor = task.color;


        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.date}</p>
            <p>${task.desc}</p>
            <p>Priority: ${task.prio}</p>
            <button class="deleteTask-btn">Eliminar</button>`;

            tasklist.appendChild(taskItem);

    });



}


function showAlert(m, error = null) {
    const alert = document.createElement('P');
    alert.textContent = m;

    if (error) {
        alert.classList.add('error');
    } else {
        alert.classList.add('correcto');
    }

    taskForm.appendChild(alert)

    setTimeout(() => {
        alert.remove();
    }, 5000);
}

function resetTasks() {
    localStorage.removeItem("tasks");
    const tasklist = document.querySelector('.task-container');
    tasklist.innerHTML = '';
}
