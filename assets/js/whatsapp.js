/* 
* Author: Gabriel Chávez
* Website: https://gabrielchavez.me
*/

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '59163511638';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let Nombre = document.querySelector('#Nombre').value
        let Celular = document.querySelector('#Celular').value
        let Zona = document.querySelector('#Zona').value
                        
        let Servicio1 = document.getElementById('Servicio1').options[document.getElementById('Servicio1').selectedIndex].text
        let Servicio2 = document.querySelector('#Servicio2').value
        let Pago = document.getElementById('Pago').options[document.getElementById('Pago').selectedIndex].text
        let Detalle = document.querySelector('#Detalle').value
   
        let message = 'send?phone=' + phone + '&text=*_SOLICITUD DE BUSQUEDA DE INMUEBLE_*%0A*(Datos del Solicitante)*%0A%0A*¿Nombre Del Solicitante?*%0A' 
        + Nombre + '%0A*¿Celular de Contacto?*%0A' + Celular + '%0A*¿Zona/Lugar de Preferencia?*%0A' + Zona +
          '%0A*¿Tipo de Inmueble?*%0A' + Servicio1 +' *:* ' + Servicio2 +'%0A*Tipo de Transacción*%0A' +Pago+
          '%0A*Detalle Especificos del Inmueble*%0A' +Detalle+''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);
});

    var input = document.getElementById('Servicio2');

function carg(elemento) {
  d = elemento.value;
  
  if(d == 9){
    input.disabled = false;
  }else{
    input.disabled = true;
  }
}

       
