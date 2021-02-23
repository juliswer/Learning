const btnEnviar = document.getElementById('btn-enviar');

btnEnviar.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: '¡Excelente!',
        text: 'Su pago fue acreditado con éxito',
        footer: '<a href>Políticas de privacidad</a>'
      })
})
