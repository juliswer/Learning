                        'CLASE 1'

var nombre;

nombre = "Julián";

var edad = 16;

var precio = 12.5;

canal = "YouTube"; //mala práctica

document.querySelector("body").innerHTML = "Hola mundo";
document.querySelector("body").innerHTML = "Hola " + nombre;

console.log(edad);
console.log(canal);

                        'CLASE 2'

var edad = 13;
console.log(edad + 3); //esto me va a dar como resultado mi edad final.

edad++; //el ++ aumenta 1 a la variable, es decir, pasa a ser 14.

var puntos_flotantes= 12.5;

console.log(edad + punto_flotantes);

/*
Operadores aritméticos
División = /
Multiplicación = *
Suma = +
Resta = -
Módulo = % (Da el resto de la divisón)
*/

var resultado_suma = edad * 4;

console.log(resultado_suma);

function es_par(número){
  if(numero % 2 == 0){
    return true;
    }
    return false;
 }

console.log(es_par(2));

/* console.log(Math.pow(2,2), //hace potencia
console.log(Math.ceil(0,1), //redondea hacia arriba
console.log(Math.floor(0,9), //redondea hacia abajo
console.log(Math.sqrt(4), // hace la raíz cuadrada
console.log(Math.random), //da un numero random */


                        'CLASE 3'


var cadena = "Hola mundo";
var nombre = "Julián";
var cadena2 = "Hola " + nombre;
var resultado = caden.indexOf("Julián");



console.log(cadena);
console.log(cadena.length);
console.log(resultado);

if(nombre.indexOf("Julián")!= -1){
    console.log("Eres el tutor del curso")
}
else{
  console.log("No eres el tutor del curso");
}

console.log(nombre[0]); // mide las posiciones

console.log(nombre.charAt(1)); //mide el lugar de las letras. (1 es la segunda posición)

nombre = nombre.replace("U","A");

console.log(nombre);

console.log(nombre.slice(2,3)); //nos devolvería los caracteres digitados

console.log(nombre.toUpperCase()); //vuelve todo a mayúsula
console.log(nombre.toLowerCase()); //vuelve todo a minúscula


                        'CLASE 4'

  if(true){
    console.log("La condición fue verdadera");
  }
  else if(false){
    console.log("La condición fue falsa");
  }

  var numero_uno = 23;
  var numero_dos = 30;

  if(numero_uno > numero_dos){
    console.log("Entre al bloque");
  }
  else{
    console.log("No podés entrar");
  }

  if(numero_uno == numero_dos){ //la diferencia de == y === es que el primero convierte el dato a uno que pueda dar igualdad, mientras que el triple igual lo toma tal como se lo damos
    console.log("taweno");      //se recomienda siempre usar el triple igual (===)
  } 

  /* Con los if se usan los operadores lógicos, los cuales son:
    > Mayor que
    < Menor que
    OR selecciona entre una opción y otra
    AND, && Hace que puedas poner dos opciones válidas en una misma sentencia
    == Significa igualdad, pero de ser necesario convierte uno de los valores (ej, "30" a 30.)
    === Significa igualdad pero toma los valores tales como los ingresamos.
    != Significa que es diferente, pero al igual que el == transforma uno de los valores de ser necesario.
    !== Significa que es diferente, se lee, la igual que el anterior como "Diferente de..." y la diferencia es que no transforma ningún valor.
  */

                        'CLASE 5'

  var contador = 0;

  while(contador < 11){             //La diferencia entre while e if es que while repite su comando hasta que este de falso, mientras que if solo lo hace 1 vez, sin importar su estado.
    contador ++;
    console.log(contador);
  }

  if(contador % 2 == 0){
    continue;
  }
    console.log(contador);

  while(true){                    
    contador = contador + 1;      
    console.log(contador);
    continue;
  if(contador >= 10){
    break;
    }
  }    

  /*Dentro del while existen dos keywords. Break y continue.
  Continue sirve para decirle a la máquina que el while sigue vigente, mientras que el break indica el momento en el cual este ciclo While debe romperse*/
  
  do{
    contador++;
    console.log(contador);
    if(contador >= 10){
      break;
    }
  }while(false);

  /*A su vez existe una variación dentro del ciclo While.
  También existe el ciclo Do While, el cual se diferencia de While con que Do While se ejecuta al menos 1 vez, aunque la condición se cumpla o no, mientras que While requiere de la condición en cumplimiento para ejecutarse*/
  
                      'CLASE 6'

  for(var i = 0;i<10;i++){      //El ciclo for recibe 3 procesos. 1 de inicialización, otro de condición y un último de incremento.
    console.log(i);
  }

  var arreglo = ["Hola","mundo"];

  for(var i = 0;i<arreglo.length;i++){
    if(i>1){
      break;
    }
    console.log(arreglo[i]);
  }

  for(var i = 0;i<10;i++)
  if (i%2 !== 0){
    continue;
    console.log(i);
  }

                  'CLASE 7'

  var number = 0;

  console.log(typeof number);      //el typeof puede servir para saber si una variable está declarada

  if(typeof hola == "undefined"){
    console.log("esta variable no está declarada");
  }

  /*
    Más allá del typeof, cuyo significado está arriba, existen otras dos keywords.
    Null y undefined.
    Null indica la ausencia de valor de una variable. Se va a usar cuando no se esté seguro si una variable tiene un vaor asignado o no.
    Undefined es una variable que siempre está declarada, aunque no la escribamos. A esta variable solo se la puede leer, más no aplicarle un valor cualquiera. Se va a usar más que nada para saber si una variable está definida o no.
   */

   hola = hola + otra_cosa; // este tipo de dato es igual a undefined, ya que la variable otra_cosa no está definida.

                  'CLASE 8'

  /* En esta clase se hace un minijuego sobre adivinar un número.
  
      Primero se colocó en html lo siguiente:
    <p> Adivina el número secreto, y colócalo en la ventana que se despliega<p>
    <p> Coloca 0 si quieres cerrar el programa <p>
  
  */

  var max = 100;
  var min = 1;

  var numero_secreto = Math.random() * (max-min) + min;

  parseInt(numero_secreto); //El parseInt sirve para que el número se un número entero.

  console.log(numero_secreto);

  var mensaje = "Ingresa un número para adivinar el número mágico"
  
  
  while(true){
    var numero_del_usuario = prompt(mensaje, "0");

    numero_del_usuario = parseInt(numero_del_usuario);

    if(numero_del_usuario === numero_secreto){
      alert("Ganaste!!!!! Adivinaste el número secreto");
      break;
    }

    else if(numero_del_usuario === 0){
      break;
    }

    else if(numero_del_usuario > numero_secreto){
      mensaje = "Lo sentimos. El número que ingresaste es mayor al número mágico";
    }

    else if (numero_del_usuario < numero_secreto){
      mensaje = "Lo sentimos. El número que ingresaste es menor al número mágico";
    }
  }

                  'CLASE 9'

  /*
    Para llevar esta clase a cabo se escribieron distintas líneas de código en HTML y CSS:
    HTML: <div> id="mi_div" class="mi_clase"</div>
    CSS: .mi_clase{
      background: red;
      padding: 10px;
    }
  */

  var div = 
  document.getElementById("mi_div");  //esto se utiliza solo si queremos obtener un div.
  document.getElementsByClassName("mi_clase"); //esto se utiliza solo si queremos obtener la clase.
  document.getElementsByTagName("div"); //esto sirve para obtener todos los elementos que tengan la etiqueta colocada entre las comillas.
  document.querySelector(".mi_clase"); // Esto se utiliza para seleccionar elementos de CSS.
  document.querySelectorAll(); //Esto se utiliza para seleccionar TODOS los elementos.

  /*Hay una forma de declarar que busco por clase o por id:
    con un punto (.) significa que busco por clase
    con un numeral (#) significa que busco por id.
  */

  div.classList.add("mi_clase");

  console.log(mi_div);
  console.log(mi_clase);


                  'CLASE 10'

  /* 
    Para llevar a cabo esta clase se escribieron distintas líneas de código en HTML:
    <button onclick = "clic()"> Click en mi para abrir un alert</button>
  */

  /*
    En esta clase se vieron eventos, pero que se ejecutan en HTML y se escriben de la siguiente manera:
    <button onmouseOver> = cuando el mouse se posiciona arriba del botón.
    <button onmouseOut> = cuando el mouse se sale del boton.
  */

  function clic(){
    alert(":3");
  }

  // LA FORMA MÁS CORRECTA DE ENLAZAR UN EVENTO ES LA SIGUIENTE:
  /* En HTML se crea el botton y se le aplica un id:
    <button id="mi_btn">Clic en mi para abrir un alert</button>
  */

  document.getElementById("mi_btn").addEventListener("click", clic());  //dentro del addEventListener se tiene que utilizar la siguiente estructura: 1-El evento que va a suceder. 2-La función que se va a ejecutar cuando este evento suceda.
  //Además siempre se ejecuta de adentro hacia afuera.

  function clic(){
    alert(":3");
  }

  // Para hacer otro ejemplos también se hizo lo siguiente en HTML:
  /*
    <div id="mi_div">
      <button id="mi_btn">
        Click en mí para abrir un alert
      </button>
    </div>
  */

  document.getElementById("mi_div").addEventListener("click",another_clic, true);

  document.getElementById("mi_btn").addEventListener("click", clic, false);

  function clic(){
    alert("Esto fue disparado por el botón")
  }

  function another_clic(){
    alert("Esto fue disparado por el div");
  }

                  'CLASE 11'

  //Para realizar un arreglo se puede hacer de las siguientes dos formas:
  var arreglo = [20, 10, 5];            
  var arreglo = new Array(20, 10, 5);

  console.log(arreglo[0]);
  console.log(arreglo.length); //con esto podemos saber cuántos elementos hay en el arreglo

  //Hay dos formas de agregar valores a un arreglo:  
  arreglo.push(7); 
  arreglo.unshift(7); 
  // La diferencia entre estos dos es que, con arreglo.push() agregamos un valor al final, mientras que con arreglo.unshift() lo hacemos al principio.

  //También existen dos manera de remover elementos en un arreglo:
  arreglo.shift();
  arreglo.pop();
  //Con arreglo.shift() se elimina el primer valor, mientras que con arreglo.pop(); se elimina el último.

  var arreglo = [20, 10, 5];
  
  for(var i=0;i<arreglo.length;i++){    //de esta manera se hace que de un número de los del arreglo. Acorde a la condición, va a crecer hasta 2, y la posición 2 es el 5, es decir que nos devolvería 20, 10, 5.
    console.log(arreglo[i]);
  }

  //Si bien de la anterior manera se puede iterar un arreglo, la forma más optimizada es la siguiente:
  var arreglo = [20, 10, 5, 3];

  for(var i = arreglo.length;i >= 0;i--){ //de esta manera nos devolvería lo mismo, solo que de atras hacia adelante. Es decir, 3, 5, 10, 20.
    console.log(arreglo[i]);
  }

  //Otro tipo de optimización es el siguiente:
  var arreglo = [20, 10, 5, 3];
  var i = arreglo.length;

  for(;i>=0;i--){ //esto es así debido a que, como js no tiene que determinar la longitud de i, se hace más rápido.
    console.log(arreglo[i]);
  }

                      'CLASE 12'

  function nombre_function(){
    //codigo que se va a ejecutar al llamar la función
  }

  function suma(a,b){
    return a+b;
  }

  console.log(suma(2,3));

  var resultado = suma(4,7);
  console.log(resultado);

  var funcion_suma = suma;

  function ejecutar(funcion){
    return funcion()
  }

  var funcion_suma = suma;

  resultado = ejecutar(funcion_suma);

  var resultado = suma();

  //No siempre se debe imprimir todos los valores que le demos a una función. Esto la hace muy flexible. Por ejemplo:
  function suma(a,b)
    console.log(b);

                    'CLASE 13'

  var arreglo = [2,5,1,10,20];

  arreglo.sort(); //arreglo.sort() hace que el arreglo se ordene acorde al índice

  console.log(arreglo);

  function ordenacion(a,b){     //De esta manera se puede ordenar de mayor a menor, pero de una manera muy extensa.
    if(a > b){
      return 1;
    }
    else if(b > a) {
      return -1;
    }
    else if(a === b){
      return 0;
    }
  }
  //Hay otra manera de ordenarlos, pero de una manera más corta y optimizada.
  function ordenacion(a,b){
    return a -b;
  }

  arreglo.reverse(); //hace que se ordene en un orden inverso todos los valores.

  var arreglo = "a,b,c,2".split(","); //con el .split() logramos que se separen los valores en el valor que pongamos. Es decir que en esta línea de código obtendríamos [A, B, C, 2].

  var arreglo = "a,b,c,2".split("b");

  arreglo = arrelo.join(p);  //Con el comando .join() obtenemos un string separados por el valor puesto entre los paréntesis. Es decir que en esta línea de código obtendríamos el siguiente resultado: apbpcp2

                      'CLASE 14'

  //Con este código lo que se hace es determinar todos los números pares dentro de la variable numeros.

  var numeros = [10,2,3,5,9,20,22];

  var numeros_pares = [];

  for(var i = numeros.lenght;i>=0;i++){ 
    var numero = numeros [i];
    if(numero % 2 == 0){
      numeros_pares.push(numero);
    }
  }                               

  console.log(numeros_pares);

  //A su vez también existe otra manera de realizar eso:
  var numeros_pares = 
  numeros.filter(function(numero){
    return numero % 2 === 0;
  
    console.log(numeros_pares)
  });
  //con el comando .filter lo que se realiza es, como dice el nombre, filtrar todos los valores los cuales retornen falso. Este comando solo se puede utilizar en arreglos.

                    'CLASE 15'

   // Hay 2 formas de hacer lo mismo:
  //  Con callback:   
  var arreglo = [1,5,6,8];

  var cuadrados = numero.map(function(elemento){
    return elemento * elemento;
  });

  console.log(cuadrados);

  var cuadrados

  //Sin callback:

  var cuadrados = [];

  for(var i = numero.length -1; i>=0; i++){
    var numero = numeros[i];
    cuadrados.push(Math.pow(numero,2));
  }

  console.log(cuadrados);

                  'CLASE 16'

  var numeros = [2,4,6,8];  

  numeros.forEach(function(elemento,index,arreglo){ //El forEach es muy parecido al ciclo for, solo que en lugar de utilizar un ciclo se utiliza un callback.
    console.log(elemento);
      console.log(index);
        console.log(arreglo);
  });

  var numeros = [2,4,6,8];

  numeros.forEach(function(elemento,index,arreglo){
    arreglo[index] = Math.pow(elemento,2); 
  });

  console.log(numeros);

                  'CLASE 17'

  var letras = ["H", "o", "l", "a"];

  console.log(letras.join("")); //de esta forma se juntan los valores y nos devuelve uno solo.  Por ejemplo: ahora no devolvería "Hola".

  var palabra = 
  letras.reduce(function(valor_anterior_retornado,valor_actual,index,arreglo){
    return valor_anterior_retornado + valor_actual;
  })  //de esta manera se logra hacer lo mismo que antes

  console.log(palabra);

  var numeros = [20,1,23,1,5];

  var suma = numeros.reduce(function(valor_anterior_retornado,valor_actual,index,arreglo){
    return valor_anterior_retornado + valor_actual;
  })
    console.log(suma);

    var suma = 0;
    for(var i = 0; i<numeros.length;i++){
      suma = numeros[i];
    }

    console.log(suma);

                  'CLASE 18'

  