function createCard(button) {
    let parent = button.parentElement;
    let newListItem = document.createElement("li")
    let text = document.createElement("input")
    text.setAttribute("type", "text")
    text.setAttribute("placeholder", "Enter a title for this card...")
    let add = document.createElement("button")
    add.innerHTML = "Add card"
    let cancel = document.createElement("button")
    cancel.innerHTML = "x"
    newListItem.appendChild(text)
    newListItem.appendChild(add)
    newListItem.appendChild(cancel)
    parent.appendChild(newListItem)
    button.remove()
    add.addEventListener("click", e => addCard(parent, text, add, cancel))
    cancel.addEventListener("click", e => removeForm(parent, text, add, cancel))
}
function createList(button){
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
    add.addEventListener("click", e => addTitle(titleContainer,text,add,cancel))
    cancel.addEventListener("click", e => removeForm(parent,text,add,cancel))
}
function addCard(parent, text, add, cancel) {
    if (text.value != "") {
        parent = parent.parentElement
        let newTask = document.createElement("li")
        let newPar = document.createElement("p")
        newPar.innerHTML = `<p class = "chore">${text.value}</p>`
        newTask.appendChild(newPar)
        text.remove()
        add.remove()
        cancel.remove()
        parent.appendChild(newTask)
        let newButton = document.createElement("button")
        newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createCard(this)'>Add a card</button>"
        parent.appendChild(newButton)
    } else {
        removeForm(parent, text, add, cancel)
    }
}/*
function addTitle(titleContainer,text,add,cancel){
    if (text.value != ""){
        let title = document.createElement("h2")
        title.textContent = text.value
        titleContainer.appendChild(title)
        text.remove()
        add.remove()
        cancel.remove()
        let parent = titleContainer.parentElement
        let orderedList = document.createElement("ol")
        orderedList.setAttribute("class","task list")
        let firstListItem = document.createElement("li")
        let newButton = document.createElement("button")
        newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createCard(this)'>Add a card</button>"
        firstListItem.appendChild(newButton)
        orderedList.appendChild(firstListItem)
        parent.appendChild(orderedList)
        createAddListButton()
    }
}
function createAddListButton(){
    let newButton = document.createElement("button")
    newButton.innerHTML = '<button class="button" class="addListButton" onclick="createList(this)">+ Add another list</button>'
    let divInner = document.createElement("div")
    divInner.setAttribute("class","list title")
    let divOuter = document.createElement("div")
    let newLI = document.createAttribute("li")
    newLI.setAttribute("class", "item")
    divInner.appendChild(newButton)
    divOuter.appendChild(divInner)
    newLI.appendChild(divOuter)
    parent.appendChild(newLI)
}*/
function removeForm(parent, text, add, cancel) {
    let newButton = document.createElement("button")
    if (parent.itemIds == "list_container"){
        parent = parent.parentElement
        text.remove()
        add.remove()
        cancel.remove()
        newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createList(this)'>+ Add another list</button>"
    } else {    
        text.remove()
        add.remove()
        cancel.remove()
        newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createCard(this)'>+ Add card</button>"
    }
    parent.appendChild(newButton)
}
function addTitle(titleContainer,text,add,cancel){
    let title = document.createElement("h2")
    title.textContent = text.value
    titleContainer.appendChild(title)
    text.remove()
    add.remove()
    cancel.remove()
    let newButton = document.createElement("button")
    newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createCard(this)'>+ Add card</button>"
    parent = titleContainer.parent
    let newLI = document.createElement("li")
    newLI.appendChild(newButton)
    titleContainer.appendChild(newLI)
}

const openBtn = document.getElementById("openModal")
const closeBtn = document.getElementById("closeModal")
const modal = document.getElementById("modal")
openBtn.addEventListener("click", () => {
    modal.classList.add("open")
})
closeBtn.addEventListener("click",() => {
    modal.classList.remove("open")
})