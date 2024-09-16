const taskList = document.getElementById('taskList')
const inputF = document.getElementById('taskInput')
const addBtn = document.getElementById('addTaskBtn')

const loadTask = ()  => {
    const savedTask = JSON.parse(localStorage.getItem('list')) || []
    savedTask.forEach(list =>{
        const li = document.createElement('li')
        li.innerHTML = `<input type="checkbox" id="checkbox"> ${list}
        <span class="delete">X</span>`
        console.log(li.innerText)
        taskList.appendChild(li);
        inputF.value = '';
        updateLocalStorage()
        li.querySelector('.delete').addEventListener('click', () => {
            li.remove()
            updateLocalStorage()
        })
    }
    )
}

const updateLocalStorage = () =>{
    let task = [];
    taskList.querySelectorAll('li').forEach(li => {
        task.push(li.textContent.replace('X','').trim())
    })
    localStorage.setItem('list', JSON.stringify(task))
   
}

const addTask = () => {
    const inputVal = inputF.value.trim()
    if (inputVal !== ''){
        const li = document.createElement('li')
        li.innerHTML = `<input type="checkbox" id="checkbox"> ${inputVal}
        <span class="delete">X</span>`
        console.log(li.innerText)
        taskList.appendChild(li);
        inputF.value = '';
        updateLocalStorage()
        li.querySelector('.delete').addEventListener('click', () => li.remove())
    }
}
addBtn.addEventListener('click', addTask);
inputF.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        addTask();
    }
})

window.addEventListener('load', loadTask)