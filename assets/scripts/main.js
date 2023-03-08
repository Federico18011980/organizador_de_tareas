const boton = document.querySelector("[data-form-btn]");

const crearTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor= input.value;
    const task = document.createElement("li");
    task.classList.add("card");
    const ul = document.querySelector("[data-list]");
    const contenido = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${valor}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  task.innerHTML=contenido;
  ul.appendChild(task);
    input.value="";
    
} 
    
boton.addEventListener("click",crearTask );