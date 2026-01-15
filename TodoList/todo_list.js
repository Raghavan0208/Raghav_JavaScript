const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let task =[];

function addTask()
{
    const taskText = taskInput.value.trim()
    if(taskText !== ""){
        task.push({text: taskText });
        taskInput.value = "";
        displayTask();    
    }
}

function displayTask()
{
    taskList.innerHTML = "";
    task.forEach((task, index) =>{
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id=-"task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change",()=> toggleTask(index));
        taskList.appendChild(li);
    
    });
}
 function toggleTask(index) 
 {
    
    task[index].completed = !task[index].completed;
     displayTask();
 }

function clearCompletedTasks() 
{
    task = task.filter(task => !task.completed);
    displayTask();
}
       
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTask();