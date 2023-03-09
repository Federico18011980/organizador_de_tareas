const eliminarTask = (evento) => {
    const parent = evento.target.parentElement.parentElement;
    parent.remove();
    
}

const crearDelete = () => {
    const i = document.createElement("i");
    i.classList.add('fas','fa-trash-alt','trashIcon','icon');
    i.addEventListener('click',eliminarTask);
    return i;
}
