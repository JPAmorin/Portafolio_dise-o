function createCard(button){
    let parent = button.parentElement;
    let newListItem = document.createElement("li")
    let text = document.createElement("input")
    text.setAttribute("type","text")
    text.setAttribute("placeholder","Enter a title for this card...")
    let add = document.createElement("button")
    add.textContent = "el que no anda"
    let cancel = document.createElement("button")
    cancel.textContent = "x"
    newListItem.appendChild(text)
    newListItem.appendChild(add)
    newListItem.appendChild(cancel)
    parent.appendChild(newListItem)
    add.addEventListener("click",e => addCard(parent,text,add,cancel))
}
function addCard(parent,text,add,cancel){
    parent = parent.parentElement
    let newTask = document.createElement("li")
    let newPar = document.createElement("p")
    newPar.textContent = text.value
    newTask.appendChild(newPar)
    text.remove()
    add.remove()
    cancel.remove()
    parent.appendChild(newTask)
    let newButton = document.createElement("button")
    newButton.innerHTML = "<button class='button' class='addClassButton' onclick='createCard(this)'>Add item</button>"
    parent.appendChild(newButton)
    /*
    if (text != ""){   
        parent = parent.parentElement
        let newTask = document.createElement("li")
        let newPar = document.createElement("p")
        newPar.textContent = text.value
        newTask.appendChild(newPar)
        parent.appendChild(newTask)
        let newListButton = document.createElement("li")
        let newButton = document.createElement("button")
        newButton.setAttribute("class","addClassButton")
        newButton.setAttribute("onclick","createCard(this)")
        newButton.textContent = "Add item"
        newListButton.appendChild(newButton)
        parent.appendChild(newListButton)
    }
    */
}