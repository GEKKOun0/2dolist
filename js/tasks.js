
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


