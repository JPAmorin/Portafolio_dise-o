function createCard(button) {
    let parent = button.parentElement;
    let newListItem = document.createElement("li")
    let text = document.createElement("input")
    text.setAttribute("type", "text")
    text.setAttribute("placeholder", "Enter a title for this card...")
    let add = document.createElement("button")
    add.textContent = "Add card"
    let cancel = document.createElement("button")
    cancel.textContent = "x"
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
        newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createCard(this)'>Add a card</button>"
        parent.appendChild(newButton)
    } else {
        removeForm(parent, text, add, cancel)
    }
}
function removeForm(parent, text, add, cancel) {
    parent = parent.parentElement
    text.remove()
    add.remove()
    cancel.remove()
    let newButton = document.createElement("button")
    newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createCard(this)'>Add a card</button>"
    parent.appendChild(newButton)
}