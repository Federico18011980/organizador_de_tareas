const boton = document.querySelector("[data-form-btn]");

const crearTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
} 
    
boton.addEventListener("click",crearTask );