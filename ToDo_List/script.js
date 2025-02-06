
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

    editBtn.addEventListener("click", function(e){
        let editText = prompt("Enter a updated message...", taskText.textContent);
        taskText.textContent = editText;
        
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.classList.add("deleteIcon")
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    deleteBtn.addEventListener("click", function(e){
        newTask.remove();
    });


    mainButton.append(editBtn);
    mainButton.append(deleteBtn);
    newTask.append(taskText);
    newTask.append(mainButton);
    taskList.append(newTask);

    task_description.value = "";

});
