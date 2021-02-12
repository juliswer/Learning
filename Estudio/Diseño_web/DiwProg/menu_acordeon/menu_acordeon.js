const opcion = document.querySelectorAll('.opcion');

opcion.forEach(e => {

    e.addEventListener('click', function(e){

        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation');
        padre.parentNode.children[1].classList.toggle('animation');
    });
});