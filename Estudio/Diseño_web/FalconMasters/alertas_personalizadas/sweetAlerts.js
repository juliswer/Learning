(async() => {
	const {value: pais} = await Swal.fire({
		title: "¡Bienvenido!",
		text: "Estás en mi página web. Espero que la disfrutes",
		// html: "<b>Hola</b>",
		icon: 'success',
		confirmButtonText: 'Agradecer',
		// footer: 'Esta es información importante',
		width: '70%',
		padding: '1rem',
		background: '#f1f1f1',
		
		backdrop: true,
		// timer: 3000,
		timerProgressBar: true,
		toast: false,
		position: 'center',
		allowOutsideClick: true,
		allowEscapeKey: false,
		allowEnterKey: false,
		stopKeydownPropagation: true,
	
		// input: 'select',
		inputPlaceholder: 'País',
		inputValue: '',
		inputOptions: {
			mexico: 'México',
			españa: 'España',
		},
		
		customClass: {
		// container:
		// popup:
		// 	header:
		// 	title:
		// 	closeButton:
		// 	icon:
		// 	image:
		// 	content:
		// 	input:
		// 	actions:
		// 	confirmButton:
		// 	cancelButton:
		// 	footer:	
		},

		showConfirmButton: true,
		confirmButtonColor: '#3e60e9',
		confirmButtonAriaLabel: 'Confirmar',
	
		showCancelButton: true,
		cancelButtonText: 'Saltear',
		cancelButtonColor: 'red',
		cancelButtonAriaLabel: 'Saltear',
		
		buttonsStyling: true,
		showCloseButton: true,
		closeButtonAriaLabel: 'Cerrar alerta',
	
	//	imageUrl: 'img/4.png',
		imageWidth: '200px',
		// imageHeight:
		imageAlt: 'Camara de fotografias',
	});
	if (pais){
		Swal.fire({
			title: `Seleccionaste ${pais}`
		})
	}
})();