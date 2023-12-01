document.getElementById("openCrud").addEventListener("click", function() {
    Swal.fire({
        title: 'Ingrese la contraseña:',
        input: 'password',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Acceder',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (password) => {
            // Verifica la contraseña (puedes cambiar la contraseña)
            if (password === "leito") {
                Swal.fire({
                    title: 'Acceso permitido',
                    icon: 'success'
                }).then(() => {
                    window.location.href = "/templates/front_crud.html";
                });
            } else {
                Swal.fire({
                    title: 'Contraseña incorrecta',
                    icon: 'error'
                });
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    });
});