const input = document.querySelector("input");
const btn = document.querySelector("button");
const toDo = document.querySelector(".to-do");

function myfunc() {
    const dragableElements = document.querySelectorAll(".task");
    const containers = document.querySelectorAll(".task-container");
    dragableElements.forEach((dragableElement) => {
        dragableElement.addEventListener("dragstart", (e) => {
            e.target.classList.add("drag-item");
        });
        dragableElement.addEventListener("dragenter", (e) =>{
            e.target.classList.add("drag");
        })
        dragableElement.addEventListener("dragend", (e) => {
            e.target.classList.remove("drag-item");
        });
    });

    containers.forEach((container) => {
        container.addEventListener("dragenter", (e) => {
            const dragItem = document.querySelector(".drag-item");
            container.appendChild(dragItem);
        });
    });
};

myfunc();

function myfunc2() {
    const x = document.querySelectorAll("i");
    x.forEach((x) => {
        x.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
    });
}

myfunc2();

btn.addEventListener("click", () => {
    const task = document.createElement("div");
    const btnX = document.createElement("i");
    btnX.className = "fa-solid fa-x";
    task.setAttribute("class", "task")
    task.setAttribute("draggable", "true");
    toDo.appendChild(task);
    task.textContent = input.value;
    task.appendChild(btnX);
    input.value = "";
    myfunc();
    myfunc2();
});

input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        const task = document.createElement("div");
        const btnX = document.createElement("i");
        btnX.className = "fa-solid fa-x";
        task.setAttribute("class", "task")
        task.setAttribute("draggable", "true");
        toDo.appendChild(task);
        task.textContent = input.value;
        task.appendChild(btnX);
        input.value = "";
        myfunc();
        myfunc2();
    };
});