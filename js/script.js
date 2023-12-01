// Realizar una solicitud a la nueva URL para obtener los productos
fetch('https://leonelonne.pythonanywhere.com/productos')
  .then(response => response.json())
  .then(data => {
    const imageContainer = document.getElementById('image-container');

    // Itera sobre los datos y crea elementos para los productos
    data.forEach(producto => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style = '--clr: #009688';
      
      const imgBox = document.createElement('div');
      imgBox.className = 'img-box';
      const img = document.createElement('img');
      img.src = producto.imagen;
      img.alt = producto.nombre;

      const content = document.createElement('div');
      content.className = 'content';
      
      const h2 = document.createElement('h2');
      h2.textContent = producto.nombre;
      
      const p = document.createElement('p');
      p.textContent = `Precio: ${producto.precio} ARS`; // Agrega la moneda según la necesidad
      
      const a = document.createElement('a');
      a.href = "#";
      a.textContent = 'Sumar al carrito';

      // Organiza los elementos
      imgBox.appendChild(img);
      content.appendChild(h2);
      content.appendChild(p);
      content.appendChild(a);
      card.appendChild(imgBox);
      card.appendChild(content);
      imageContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al cargar los productos desde la API: ' + error);
  });




/*carrito*/

/* fin de carrito */


  
//Validacion del form

const $form = document.querySelector('#form');

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const emailInput = $form.querySelector('input[name="email"]');
    const messageInput = $form.querySelector('textarea[name="message"]');
    const nameInput = $form.querySelector('input[name="name"]');

    // Validar correo electrónico con una expresión regular
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (emailInput.value.trim() === '' || 
        messageInput.value.trim() === '' || 
        nameInput.value.trim() === '' || 
        !emailPattern.test(emailInput.value)) {
        // Muestra una notificación de error si los campos están vacíos o el correo no es válido
        Swal.fire(
            'Atención',
            'Por favor, complete todos los campos obligatorios y proporcione un correo electrónico válido.',
            'error'
        );
        return; // Detiene el envío del formulario si hay errores
    }

    // Validar longitud del nombre y mensaje (puedes ajustar los límites según tus necesidades)
    if (nameInput.value.length < 2 || nameInput.value.length > 50 || 
        messageInput.value.length < 10 || messageInput.value.length > 500) {
        Swal.fire(
            'Atención',
            'El nombre debe tener entre 2 y 50 caracteres, y el mensaje debe tener entre 10 y 500 caracteres.',
            'error'
        );
        return;
    }

    // Realiza el envío del formulario si pasa la validación
    const form = new FormData($form);
    const response = await fetch($form.action, {
        method: $form.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        $form.reset();
        Swal.fire(
            'Gracias por contactarnos.',
            'Nos comunicaremos contigo pronto.',
            'success'
        );
    } else {
        Swal.fire(
            'Error',
            'Hubo un problema al enviar el formulario.',
            'error'
        );
    }
}
