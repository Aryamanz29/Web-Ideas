const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListerners();

//Load All Event listerners
function loadEventListerners() {

    //DOM load event
    document.addEventListener('DOMContentLoaded' , getTasks);

    //Add task event
    form.addEventListener('submit', addTask);

    //Clear task event
    taskList.addEventListener('click' , removeTask);

    //Clear tasks event
    clearBtn.addEventListener('click' , clearTasks);

    //Filter tasks
    filter.addEventListener('keyup' , filterTasks);
}

//Get Tasks from LS
function getTasks() { 
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
         //create li element
        const li = document.createElement('li');

        //Add classes
        li.className = 'collection-item';

        //create text node and append to li
        li.appendChild(document.createTextNode(task));

        //Create link element
        const link = document.createElement('a');

        //Add classes to link element
        link.className = 'delete-item secondary-content';

        //Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';

        //Append link element to li element
        li.appendChild(link);

        //Append li to ul
        taskList.appendChild(li);
    });

}

function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }


    else {
    //create li element
    const li = document.createElement('li');

    //Add classes
    li.className = 'collection-item';

    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //Create link element
    const link = document.createElement('a');

    //Add classes to link element
    link.className = 'delete-item secondary-content';

    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append link element to li element
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
    
    //Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);


    //clear Input
    taskInput.value = '';

    }
    
    e.preventDefault();
}

//Store Task in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks' , JSON.stringify(tasks));
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure ? ')) {
            e.target.parentElement.parentElement.remove();
            
            //remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }

        
    }
}


function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task , index) {
        if(taskItem.textContent === task) {
            tasks.splice(index , 1);
        }
    });

    localStorage.setItem('tasks' , JSON.stringify(tasks));
}

function clearTasks() {
    //One way
   // taskList.innerHTML = '';

   //Alternate and better way and faster
   while(taskList.firstChild) {
       taskList.removeChild(taskList.firstChild);
   }

   localStorage.clear();

}

//Filter Tasks
function filterTasks(e) {
    const text =e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task) {
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );

}