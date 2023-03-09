const crearIcono = ()=>{
    const i = document.createElement("i");
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click',completeTask)
    return i;
}
const completeTask = (evento) => {
   const element = evento.target;
   element.classList.toggle('fas');
   element.classList.toggle('completeIcon');
   element.classList.toggle('far');
}

