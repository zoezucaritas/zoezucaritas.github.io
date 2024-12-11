const emojiRange = document.getElementById("emojiRange");
const emojiOutput = document.getElementById("emojiOutput");

// Mapeo de valores de la barra deslizante a emojis
const emojis = ["😔", "😟", "😊", "😁", "🤩"];

// Actualiza el emoji según el valor de la barra
emojiRange.addEventListener("input", () => {
  const value = emojiRange.value;
  emojiOutput.textContent = emojis[value - 1];
});

// boton sorpresa
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


// Función para abrir una ventana emergente con una cartilla de InDesign
function openPopup() {
  const popupWidth = 600; // Ancho de la ventana emergente
  const popupHeight = 400; // Alto de la ventana emergente
  const left = (window.screen.width - popupWidth) / 2;
  const top = (window.screen.height - popupHeight) / 2;

  // Crear la nueva ventana emergente
  const popup = window.open(
    "",
    "popupWindow",
    `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`
  );

  // Agregar el contenido del iframe a la ventana emergente
  popup.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartilla</title>
    </head>
    <body>
      <iframe style="border: 1px solid #777;" src="https://indd.adobe.com/embed/cd3e0ff9-69a0-46bb-9bfa-51a2d0639940?startpage=1&allowFullscreen=true" width="580px" height="380px" frameborder="0" allowfullscreen=""></iframe>
    </body>
    </html>
  `);
}


function openPopup2() {
  const popupWidth = 600; // Ancho de la ventana emergente
  const popupHeight = 400; // Alto de la ventana emergente
  const left = (window.screen.width - popupWidth) / 2;
  const top = (window.screen.height - popupHeight) / 2;

  // Crear la nueva ventana emergente
  const popup = window.open(
    "",
    "popupWindow",
    `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`
  );

  // Agregar el contenido del iframe a la ventana emergente
  popup.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartilla</title>
    </head>
    <body>
  <iframe style="border: 1px solid #777;" src="https://indd.adobe.com/embed/5d325fdf-a23d-41ae-a889-be7ab2bbad17?startpage=1&allowFullscreen=true" width="580px" height="380px" frameborder="0" allowfullscreen=""></iframe>
    </body>
    </html>
  `);
}


function openPopup3() {
  const popupWidth = 600; // Ancho de la ventana emergente
  const popupHeight = 400; // Alto de la ventana emergente
  const left = (window.screen.width - popupWidth) / 2;
  const top = (window.screen.height - popupHeight) / 2;

  // Crear la nueva ventana emergente
  const popup = window.open(
    "",
    "popupWindow",
    `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes,scrollbars=yes`
  );

  // Agregar el contenido del iframe a la ventana emergente
  popup.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cartilla</title>
    </head>
    <body>
<iframe style="border: 1px solid #777;" src="https://indd.adobe.com/embed/7f8e8d65-ea34-4934-b062-0ccdbcc14664?startpage=1&allowFullscreen=true" width="580px" height="380px" frameborder="0" allowfullscreen=""></iframe>    
  </body>
    </html>
  `);
}
