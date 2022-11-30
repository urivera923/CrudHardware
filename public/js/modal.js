const myModal = new bootstrap.Modal(document.getElementById('modalContacto'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, (e) => {
        if(e.target.closest(selector)) {
            handler(e)
        }
    })
}
on(document, 'click', '#btnEditar', (e) => {
    const fila = e.target.parentNode.parentNode;
    edit_id.value = fila.children[0].innerHTML;
    edit_hardware.value = fila.children[1].innerHTML;
    edit_nombre.value = fila.children[2].innerHTML;
    edit_modelo.value = fila.children[3].innerHTML;
    edit_marca.value = fila.children[4].innerHTML;
    edit_lanzamiento.value = fila.children[5].innerHTML;
    edit_descripcion.value = fila.children[6].innerHTML;
    myModal.show();
    console.log(fila);
});

function gotoBlog(){
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 3500
    })
}

function validar() {
    hardware = document.getElementById("hardware").value;
    nombre = document.getElementById("nombre").value;
    modelo = document.getElementById("modelo").value;
    marca = document.getElementById("marca").value;
    descripcion = document.getElementById("lanzamiento").value;
    lanzamiento = document.getElementById("descripcion").value;
    img = document.getElementById("img").value;
    if (!hardware || !nombre || !modelo || !marca || !descripcion || !lanzamiento || !img) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos neceseitan llenar, gracias! 🫤🫤',
          })
    } else {
        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
}
