let form = document.querySelector("form")
let taskUl = document.querySelector(".task_collection")
let taskInp = document.querySelector("#task_inp")

form.addEventListener("submit", toDoList)

function toDoList(e){
    e.preventDefault();
    
    let taskLi = document.createElement("li")
    taskLi.classList = "task_li"
    taskUl.appendChild(taskLi)

    let liInp = document.createElement("input")
    taskLi.appendChild(liInp)
    liInp.setAttribute("readonly", true)
    liInp.value = taskInp.value

    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();

    let timeP = document.createElement("p")
    timeP.classList = "time_p"
    taskLi.appendChild(timeP)
    timeP.innerText = `${hour < 10 ? "0" + hour : hour} : ${minute < 10 ? "0" + minute :minute}`

    let editLi = document.createElement("i")
    editLi.classList = "fas fa-edit"
    taskLi.appendChild(editLi)

    editLi.addEventListener("click", () => {
        if(liInp.hasAttribute("readonly")){
            liInp.removeAttribute("readonly")
            liInp.style = "border: 1px solid #000; border-radius: 4px;"
            liInp.focus();
        }
        else{
            liInp.setAttribute("readonly",
        true)
        liInp.style = "border: none"
        }
    })

    let checkLi = document.createElement("i")
    checkLi.classList = "fas fa-check"
    taskLi.appendChild(checkLi)

    checkLi.addEventListener("click", () => {
        liInp.style = "color: red; text-decoration: line-through;"
    })

    let delLi = document.createElement("i")
    delLi.classList = "fas fa-times"
    taskLi.appendChild(delLi)

    delLi.addEventListener("click", () => {
        taskLi.style.display = "none"
    })


    taskInp.value = "";
}