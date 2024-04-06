function createCard(button){
    let parent = button.parentElement;
    let newListItem = document.createElement("li")
    let form = document.createElement("form")
    let text = document.createElement("input")
    text.setAttribute("type","text")
    text.setAttribute("placeholder","Enter a title for this card...")
    let add = document.createElement("button")
    add.textContent = "el que no anda"
    let cancel = document.createElement("button")
    cancel.textContent = "x"

    form.appendChild(text)
    form.appendChild(add)
    form.appendChild(cancel)
    
    newListItem.appendChild(form)
    parent.appendChild(newListItem)
    button.remove()
    add.addEventListener("click",e => addCard(parent,text.value))
}
function addCard(parent,text){
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
}