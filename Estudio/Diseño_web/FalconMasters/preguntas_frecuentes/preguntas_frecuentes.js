const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');
        const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;	
		if(!respuesta.style.maxHeight){
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
        }
        
        //opcional (hace que no se puedan abrir 2 preguntas al mismo tiempo)
        preguntas.forEach((elemento) => {
            if(pregunta !== elemento){
            elemento.classList.remove('activa');
            elemento.querySelector('.respuesta').style.maxHeight = null;
        }
        });
    });
});