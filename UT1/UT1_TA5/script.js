function addCard(parent, taskTitle, taskDescription, taskStart, taskEnd,taskStatus,taskPriority) {
    if (taskTitle.value != "") {
        parent = parent.parentElement
        let newTask = document.createElement("li")
        let newPar = document.createElement("p")
        newPar.innerHTML = `<p class = "chore">${taskTitle.value}</p>`
        newTask.appendChild(newPar)
        parent.appendChild(newTask)
        let newButton = document.createElement("button")
        newButton.setAttribute("class", "button addClassButton")
        newButton.setAttribute("onclick", "createCard(this)")
        newButton.textContent = "+ Add a card"
        parent.appendChild(newButton)
    }
}

function createList(button) {
    let parent = document.getElementById("list_container")
    let titleContainer = button.parentElement
    button.remove()
    let text = document.createElement("input")
    text.setAttribute("type", "text")
    text.setAttribute("placeholder", "Enter list title...")
    let add = document.createElement("button")
    add.innerHTML = "Add card"
    let cancel = document.createElement("button")
    cancel.innerHTML = "x"
    titleContainer.appendChild(text)
    titleContainer.appendChild(add)
    titleContainer.appendChild(cancel)
    add.addEventListener("click", e => addTitle(titleContainer, text, add, cancel))
    cancel.addEventListener("click", e => removeForm(parent, text, add, cancel))
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
    newListButton.setAttribute("class", "button")
    newListButton.setAttribute("onclick", "createList(this)")
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
    addCard(parent,taskTitle,taskDescription,taskStart,taskEnd,taskStatus,taskPriority)
    cardCreator.classList.remove("open")
})
cancelCard.addEventListener("click", () => {
    cardCreator.classList.remove("open")
})
/*

Agregar función que se llame cuando se apriete el botón de Add Task para abrir la ventana con los campos a rellenar.
Esos datos después los toma create card o add card, ver.

*/