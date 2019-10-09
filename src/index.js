let newForm = document.querySelector("#create-task-form")
console.log(newForm)

let listOfTaskUL = document.querySelector("#tasks")


newForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  
  let newTask = evt.target.querySelector("input").value
  console.log(newTask)

  let newTaskLi = document.createElement("li")
  newTaskLi.innerText = newTask
  listOfTaskUL.append(newTaskLi)
  // newTaskLi.setAttribute("data-task, task")

  let deleteTaskButton = document.createElement("button")
 
  deleteTaskButton.innerText = "screw you"
  newTaskLi.append(deleteTaskButton)

  deleteTaskButton.addEventListener("click", handleDelete)
  
  function handleDelete(evt){
      evt.target.parentNode.remove()
  }

} );





// document.addEventListener("DOMContentLoaded", () => {
// });
