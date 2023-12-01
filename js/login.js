document.getElementById("openCrud").addEventListener("click", function() {
    var password = prompt("Ingrese la contraseña:");

    // Verifica la contraseña (puedes cambiar la contraseña)
    if (password === "leito") {
        window.location.href = "/templates/front_crud.html";
    } else {
        alert("Contraseña incorrecta. No tienes acceso.");
    }
});