document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit",(event)=>{
    event.preventDefault()

    let newToDo = event.target.newtask.value
    let user = event.target.user.value
    let priority = event.target.priority.value
    console.log(priority)
    ToDo(newToDo, user)
    console.log(newToDo,user)
    form.reset()
  })
});
function ToDo(todo,user2) {
  const li= document.createElement("li")
  const btn= document.createElement("button")
  const user= document.createElement("span")
  btn.addEventListener("click", handleDelete)
  btn.innerText= "x"
  li.innerHTML= `${todo}${user2}${priority}`
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}