const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksForm = document.getElementById('tasks__form');

// Функция для загрузки задач из localStorage
const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTaskToDOM);
};

// Функция для добавления задачи в DOM и localStorage
const addTaskToDOM = (taskText) => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <div class="task__title">${taskText}</div>
        <a href="#" class="task__remove">&times;</a>
    `;
    tasksList.appendChild(taskElement);
};

// Функция для добавления задачи
const addTask = (event) => {
    event.preventDefault(); 
    const taskText = taskInput.value.trim(); 
    if (taskText) {
        addTaskToDOM(taskText);
        taskInput.value = '';
        saveTasks();
    }
};

// Функция для сохранения задач в localStorage
const saveTasks = () => {
    const tasks = Array.from(tasksList.children).map(task => task.querySelector('.task__title').textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Обработчик события для удаления задач
tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.preventDefault();
        const taskElement = event.target.closest('.task');
        tasksList.removeChild(taskElement);
        saveTasks(); 
    }
});


tasksForm.addEventListener('submit', addTask);
// Загружаем задачи при загрузке страницы
loadTasks();