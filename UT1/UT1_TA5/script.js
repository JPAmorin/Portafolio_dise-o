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
        newButton.setAttribute("class", "button addClassButton")
        newButton.setAttribute("onclick", "createCard(this)")
        newButton.textContent = "+ Add a card"
        parent.appendChild(newButton)
    } else {
        removeForm(parent, text, add, cancel)
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
    newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createCard(this)'>+ Add card</button>"
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
    } else {
        text.remove()
        add.remove()
        cancel.remove()
        newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createCard(this)'>+ Add card</button>"
    }
    parent.appendChild(newButton)
}

const openBtn = document.getElementById("openModal")
const closeBtn = document.getElementById("closeModal")
const modal = document.getElementById("modal")
openBtn.addEventListener("click", () => {
    modal.classList.add("open")
})
closeBtn.addEventListener("click", () => {
    modal.classList.remove("open")
})