let plusIcon = document.getElementById("add-btn"); 
let task_description = document.getElementById("task"); 
let taskList = document.getElementsByClassName("mainToDoList")[0]; 


plusIcon.addEventListener("click", function (e) 
{
    let newTask = document.createElement("div");
    newTask.classList.add("todo-item");

    let taskText = document.createElement("span");
    taskText.textContent = task_description.value;

    let mainButton = document.createElement("div");
    mainButton.classList.add("button-group"); 

    let editBtn = document.createElement("button");
    editBtn.setAttribute("type", "button");
    editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    mainButton.append(editBtn);
    mainButton.append(deleteBtn);
    newTask.append(taskText);
    newTask.append(mainButton);
    taskList.append(newTask);

    // console.log(taskList)

    task_description.value = "";
});
