window.addEventListener("scroll", function(){
    progreso();
    menu();
})

function progreso(){
    let scroll = document.documentElement.scrollTop;
    let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight
 //   let progreso = (scroll/height)*100;
    document.getElementsByClassName("barra")[0].style.width = progreso+"%";
}

let ubicacionPrincipal = window.pageYOffset;
function menu(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsById("navbar").style.top = "0";
    }else{
        document.getElementsById("navbar").style.top = '-100px';
    }
    ubicacionPrincipal = desplazamientoActual
}