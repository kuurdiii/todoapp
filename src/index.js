import './scss/main.scss';


// selectors
const _taskInput = document.querySelector('.task-input');
const _taskButton = document.querySelector('.task-button');
const _taskList = document.querySelector('.task-list');
const filterOption = document.querySelector(".filter-task");


// event handlers
_taskButton.addEventListener('click', addTask)
_taskList.addEventListener("click", deleteTask);
filterOption.addEventListener("click", filterTask);
document.addEventListener("DOMContentLoaded", getTasks);



// functions
function addTask(event) {
    // to prevent the browser form refreshing, add event.prevent();
    event.preventDefault();

    // task DIV (this will create the div 'task')
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    // this will create the li
    const newTask = document.createElement('li');
    if (_taskInput.value === '') {
        alert("Input must not be empty. Write something!");
    } 
    else {
    
        newTask.innerText = _taskInput.value;
        newTask.classList.add("task-item");
        // this will append it onto task DIV
        taskDiv.appendChild(newTask);

        // saving to local storage
        saveLocalTasks(_taskInput.value);

        // clear input field
        _taskInput.value = "";

        // completed button 
        const completedButton = document.createElement('button');
        completedButton.innerHTML = `<i class="gg-check"></i>`;
        completedButton.classList.add('check-btn');
        taskDiv.appendChild(completedButton);

        // delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<i class="gg-trash"></i>`;
        deleteButton.classList.add('trash-btn');
        taskDiv.appendChild(deleteButton);

        // this will append it onto task list
        _taskList.appendChild(taskDiv);
    }
}

function deleteTask(e) {
    const item = e.target;
  
    if (item.classList[0] === "trash-btn") {
      // e.target.parentElement.remove();
      const task = item.parentElement;
      task.classList.add("fall");
      //at the end
      removeLocalTasks(task);
      task.addEventListener("transitionend", e => {
        task.remove();
      });
    }
    if (item.classList[0] === "check-btn") {
      const task = item.parentElement;
      task.classList.toggle("completed");
      console.log(task);
    }
  }
  
  function filterTask(e) {
    const tasks = _taskList.childNodes;
    tasks.forEach(function(task) {
      switch (e.target.value) {
        case "all":
          task.style.display = "flex";
          break;
        case "completed":
          if (task.classList.contains("completed")) {
            task.style.display = "flex";
          } else {
            task.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!task.classList.contains("completed")) {
            task.style.display = "flex";
          } else {
            task.style.display = "none";
          }
      }
    });
  }
  
  function saveLocalTasks(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  function removeLocalTasks(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    const taskIndex = task.children[0].innerText;
    tasks.splice(tasks.indexOf(taskIndex), 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task) {
      //Create task div
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      //Create list
      const newTask = document.createElement("li");
      newTask.innerText = task;
      newTask.classList.add("task-item");
      taskDiv.appendChild(newTask);
      _taskInput.value = "";
      //Create Completed Button
      const completedButton = document.createElement('button');
      completedButton.innerHTML = `<i class="gg-check"></i>`;
      completedButton.classList.add("check-btn");
      taskDiv.appendChild(completedButton);
      //Create trash button
      const trashButton = document.createElement('button');
      trashButton.innerHTML = `<i class="gg-trash"></i>`;
      trashButton.classList.add("trash-btn");
      taskDiv.appendChild(trashButton);
      //attach final task
      _taskList.appendChild(taskDiv);
    });
  }