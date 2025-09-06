//Массив для хранения задачи
export let tasks = [];
//Элементы DOM
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
//Функция отрисовки списка задач
function renderTasks() {
    if (!taskList)
        return;
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        // Если задача выполнена - добавляем класс
        if (task.completed) {
            li.classList.add("completed");
        }
        //Кнопка "выполнено"
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = task.completed ? "↩" : "✔";
        toggleBtn.addEventListener("click", () => toggleTask(task.id));
        //Кнопка "Удалить"
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));
        li.appendChild(toggleBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
export function addTask() {
    const value = taskInput.value.trim();
    console.log("Нажали на кнопку!");
    if (value === "")
        return;
    const newTask = {
        id: Date.now(),
        text: value,
        completed: false,
    };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
}
export function toggleTask(id) {
    tasks = tasks.map(task => task.id === id ? Object.assign(Object.assign({}, task), { completed: !task.completed }) : task);
    renderTasks();
}
export function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
addTaskBtn.addEventListener("click", addTask);
renderTasks();
