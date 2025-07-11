console.log('Javascript is running!');
let tasks = [];

function addTask(){
    const todoo = document.getElementById("todo");
    const tngll = document.getElementById("tngl");

    if(todoo.value === "" || tngll === ""){
        alert("Please fill in both task and due date!");
    } else {
        const newTask = {
            task:todoo.value,
            dueDate:tngll.value,
            completed: false,
        };

        tasks.push(newTask);

        todoo.value="";
        tngll.value="";

        console.log('New task added:', newTask);

    }
}

function displaytask() {
    const tasklist = document.getElementById("task-list");
}

function deletealltask(){
    tasks=[];
    displaytasks();
    console.log("All task deleted");
}

function filtertask(){
}