

const boton = document.querySelector("[data-form-btn]");

const textoTask = (valor) =>{
    const span = document.createElement("span");
    span.classList.add("task");
    span.textContent = valor;
    return span;
}

const crearTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor= input.value;
    const task = document.createElement("li");
    task.classList.add("card");
    const ul = document.querySelector("[data-list]");
    const contenedor = document.createElement("div");
    contenedor.classList.add("contenedor")
    contenedor.appendChild(crearIcono());
    contenedor.appendChild(textoTask(valor));
    contenedor.appendChild(crearDelete());
    task.appendChild(contenedor);
    ul.appendChild(task);
    input.value="";
    
} 
    
boton.addEventListener("click",crearTask );
