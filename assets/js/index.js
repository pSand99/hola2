/* Accediendo Al Dom */
const btnCompra = document.querySelectorAll('.botonComprar');
// console.log(btnCompra);

const click = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Purchase Was Successful',
        showConfirmButton: false,
        timer: 2000
    });
    // window.alert('Compra');
    // console.log(btnCompra.target);
}

userEvents();

function userEvents() {
    btnCompra.forEach((btn) => {
        // console.log(btn);
        // console.log(btn.classList.contains('botonComprar'))
        if (btn.classList.contains('botonComprar')) {
            btn.addEventListener('click', click);
        }
    });
}