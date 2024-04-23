async function fetchStuff(){
    let stuff = await fetch("http://localhost:3000/api/tasks")
    let tasks = await stuff.json()
    return tasks
}
function loadTasks(){
    let tasks = fetchStuff();
    tasks.then((Response) =>{
        Response.forEach(task => {
            let parent = document.getElementById(task["status"])
            parent = parent.getElementsByClassName("task list")[0]
            loadCard(parent,task["title"],task["description"],task["startDate"],task["endDate"],task["status"],task["priority"],task["comments"])
        });
    })
}

function loadCard(parent, taskTitle, taskDescription, taskStart, taskEnd,taskStatus,taskPriority,taskComments) {
    if (taskTitle != "") {
        let oldButton = parent.querySelector(".addClassButton")
        oldButton.remove()
        let choreContainer = parent.querySelector(".choreContainer:last-child")
        let newTask = document.createElement("li")
        let newPar = document.createElement("p")
        newPar.setAttribute("class","chore")
        newPar.innerHTML = `${taskTitle}`
        newTask.setAttribute('class', 'choreContainer')
        choreContainer.appendChild(newPar)

        let newDiv = document.createElement("div")
        newDiv.setAttribute("class","choreDetails")
        let newDivInner = document.createElement("div")
        newDivInner.setAttribute("class","choreDetails_Inner")
        newDivInner.innerHTML = `<h2 class="taskTitle">${taskTitle}</h2> <p class="taskDescription">${taskDescription}</p> <p class="taskStart">${taskStart}</p> <p class="taskEnd">${taskEnd}</p> <p class="taskStatus">${taskStatus}</p> <p class="taskPriority">${taskPriority}</p> <p class="taskComments">${taskComments}</p> <button class="hideChore">Close details</button>`
        newDiv.appendChild(newDivInner)
        choreContainer.appendChild(newDiv)

        let showDivButton = document.createElement("button")
        showDivButton.setAttribute("class","button showChore")
        showDivButton.textContent = "Show details"
        choreContainer.appendChild(showDivButton)
        
        parent = parent.parentElement
        let newButton = document.createElement("button")
        newButton.setAttribute("class", "button addClassButton")
        newButton.setAttribute("onclick", "createCard(this)")
        newButton.textContent = "+ Add a card"
        newTask.appendChild(newButton)
        parent.appendChild(newTask)
    }
}

function addCard(parent, taskTitle, taskDescription, taskStart, taskEnd,taskStatus,taskPriority) {
    if (taskTitle.value != "") {
        const options = {
            method: 'POST',
            body : JSON.stringify({
                title: taskTitle.value,
                description: taskDescription.value,
                startDate: taskStart.value,
                endDate: taskEnd.value,
                status: taskStatus.value,
                priority: taskPriority.value,
            }),
        }
        fetch("http://localhost:3000/api/tasks",options)
                
        .then((response) => response.json())
        .then((json) => console.log(json))
        /*
        MANDAR DATOS AL BACKEND PARA CHECKEAR Y SUBIR, LIMPIAR IMPUTS, FETCHEAR DATOS
        let oldButton = parent.querySelector(".addClassButton")
        oldButton.remove()
        let newTask = document.createElement("li")
        let newPar = document.createElement("p")
        newPar.innerHTML = `<p class = "chore">${taskTitle.value}</p>`
        newTask.setAttribute('class', 'choreContainer')
        parent.appendChild(newPar)

        let newDiv = document.createElement("div")
        newDiv.innerHTML = `<div class="choreDetails"> <h2 class="taskTitle">${taskTitle.value}</h2> <p class="taskDescription">${taskDescription.value}</p> <p class="taskStart">${taskStart.value}</p> <p class="taskEnd">${taskEnd.value}</p> <p class="taskStatus">${taskStatus.value}</p> <p class="taskPriority">${taskPriority.value}</p> <button class="hideChore">Close details</button> </div>`
        parent.appendChild(newDiv)

        let showDivButton = document.createElement("button")
        showDivButton.setAttribute("class","button showChore")
        showDivButton.textContent = "Show details"
        parent.appendChild(showDivButton)
        
        parent = parent.parentElement
        let newButton = document.createElement("button")
        newButton.setAttribute("class", "button addClassButton")
        newButton.setAttribute("onclick", "createCard(this)")
        newButton.textContent = "+ Add a card"
        newTask.appendChild(newButton)
        parent.appendChild(newTask)
        */
        clearInputs(taskTitle, taskDescription, taskStart, taskEnd,taskStatus,taskPriority,taskComments)
    }
}

function createList(button) {
    let parent = button.parentElement
    let titleContainer = button.parentElement
    button.remove()
    let text = document.createElement("input")
    text.setAttribute("type", "text")
    text.setAttribute("placeholder", "Enter list title...")
    let add = document.createElement("button")
    add.setAttribute("class","button addList")
    add.innerHTML = "Add card"
    let cancel = document.createElement("button")
    cancel.setAttribute("class","cancelList")
    cancel.innerHTML = "x"
    titleContainer.appendChild(text)
    titleContainer.appendChild(add)
    titleContainer.appendChild(cancel)
    add.addEventListener("click", e => addTitle(titleContainer, text, add, cancel))
    cancel.addEventListener("click", e => removeListForm(parent, text, add, cancel))
}
function addTitle(titleContainer, text, add, cancel) {

    let container = document.createElement("li")
    let divContainer = document.createElement("div")
    titleContainer
    let title = document.createElement("h2")

    let newOL = document.createAttribute("ol")
    let newLI = document.createElement("li")
    let newButton = document.createElement("button")

    container.setAttribute("class", "item")
    title.textContent = text.value
    newButton.innerHTML = "+ Add card"
    newButton.setAttribute("class","button addClassButton")
    
    text.remove()
    add.remove()
    cancel.remove()

    parent = document.getElementById("lists")

    titleContainer.appendChild(title)
    newLI.appendChild(newButton)
    //newOL.appendchild(newLI)


    divContainer.appendChild(titleContainer)
    //divContainer.appendChild(newLI)
    divContainer.appendChild(newLI)
    container.appendChild(divContainer)
    parent.appendChild(container)

    let newListButtonContainer = document.createElement("div")
    newListButtonContainer.setAttribute("class", "list title")

    let newListButton = document.createElement("button")
    newListButton.setAttribute("class", "button addListButton")
    newListButton.setAttribute("id","addListButton")
    newListButton.textContent = "+ Add another list"
    newListButtonContainer.appendChild(newListButton)

    parent.appendChild(newListButtonContainer)
}

function removeForm(parent, text, add, cancel) {
    let newButton = document.createElement("button")
    if (parent.itemIds == "list_container") {
        parent = parent.parentElement
        text.remove()
        add.remove()
        cancel.remove()
        newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createList(this)'>+ Add another list</button>"
    }
    parent.appendChild(newButton)
}

function removeListForm(parent, text, add, cancel) {
    let newButton = document.createElement("button")
    text.remove()
    add.remove()
    cancel.remove()
    newButton.setAttribute("class","button addListButton")
    newButton.setAttribute("id","addListButton")
    newButton.textContent = "+ Add another list"
    parent.appendChild(newButton)
}

function clearInputs(taskTitle, taskDescription, taskStart, taskEnd,taskStatus,taskPriority,taskComments){
    taskTitle.value = ""
    taskDescription.value = "" 
    taskStart.value = "" 
    taskEnd.value = ""
    taskStatus.value = ""
    taskPriority.value = ""
    taskComments.value = ""
}   
const wrapper = document.getElementById('list_container')
const cardCreator = document.getElementById("cardCreator")
let parent

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.matches('.addClassButton');
    if (!isButton) {
        return;
    }
    parent = event.target.parentElement
    cardCreator.classList.add("open")
})
wrapper.addEventListener('click', (event) => {
    const showChore = event.target.matches('.showChore');
    if (!showChore) {
        return;
    }
    parent = event.target.parentElement
    let chroeShow = parent.querySelector('.choreDetails')
    chroeShow.classList.add("open")
    
})
wrapper.addEventListener('click', (event) => {
    const hideChore = event.target.matches('.hideChore')
    if (!hideChore) {
        return
    }
    parent = event.target.parentElement
    parent = parent.parentElement
    parent.classList.remove("open")
})
const submitCard = document.getElementById("submitCard")
const cancelCard = document.getElementById("cancelCard")
submitCard.addEventListener("click", () => {
    const taskTitle = document.getElementById("taskTitle")
    const taskDescription = document.getElementById("taskDescription")
    const taskStart = document.getElementById("taskStart")
    const taskEnd = document.getElementById("taskEnd")
    const taskStatus = document.getElementById("taskStatus")
    const taskPriority = document.getElementById("taskPriority")
    const taskComments = document.getElementById("taskComments")
    addCard(parent,taskTitle,taskDescription,taskStart,taskEnd,taskStatus,taskPriority,taskComments)
    cardCreator.classList.remove("open")
})
cancelCard.addEventListener("click", () => {
    cardCreator.classList.remove("open")
})

wrapper.addEventListener('click',(event) => {
    const addList = event.target.matches('.addListButton')
    if (!addList) {
        return
    }
    createList(event.target)
})
fetchStuff()