// saludo

// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

// const nombre = prompt('Ingrese su nombre');
// const saludo = document.getElementById('saludo');
// const mensaje = document.createTextNode(`Bienvenide ${nombre}, cómo estas?`);
// saludo.style.textAlign = 'center';
// saludo.style.fontSize = '2.5em'
// saludo.style.fontFamily = 'Verdana'

// saludo.appendChild(mensaje);

// color

// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

// const color = prompt('Ingresá un color en el sistema hexadecimal');
// const body = document.getElementById('body');
// body.style.backgroundColor= `#${color}`;

// rgb

// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

// const rojo = prompt('Ingresa un valor del 0 al 255 correspondiente a la cantidad de rojo del color final');
// const verde = prompt('Ingresa un valor del 0 al 255 correspondiente a la cantidad de verde del color final');
// const azul = prompt('Ingresa un valor del 0 al 255 correspondiente a la cantidad de azul del color final');
// if(rojo>=0 && verde>=0 && azul>=0 && rojo<=255 && verde<=255 && azul<=255){
//     body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`
// }else{
//     alert('Valores inválidos');
// }

// imagen

// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:
// Opción elegida 	Ancho de imagen
// chica 	200px
// mediana 	500px
// grande 	800px

// const imagen = document.getElementById('img');
// const opcion = prompt('Elegí el tamaño de la imagen (chica, mediana o grande)')
// if(opcion=== 'chica'){
//     imagen.style.width = '200px'
// } else if(opcion === 'grande'){
//     imagen.style.width = '800px'
// } else if(opcion === 'mediana'){
//     imagen.style.width= '500px'
// }

// temperatura

// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:
// Temperatura 	Color
// Menor a 0° 	Azul
// Mayor o igual a 0° y menor a 15° 	Celeste
// Mayor o igual a 15° y menor a 25° 	Verde
// Mayor o igual a 25° y menor a 30° 	Amarillo
// Mayor o igual a 30° y menor a 35° 	Naranja
// Mayor a 35° 	Rojo

// const temperatura = prompt('Ingresá la temperatura')
// const temperaturaMensaje = document.createTextNode(`Temperatura actual: ${temperatura}°`)
// const textoTemperatura = document.getElementById('textoTemperatura');
// textoTemperatura.appendChild(temperaturaMensaje);
// if(temperatura<0){
//     textoTemperatura.style.color = 'blue';
// } else if(temperatura>=0 && temperatura<15){
//     textoTemperatura.style.color = 'lightblue';
// } else if(temperatura>=15 && temperatura<25){
//     textoTemperatura.style.color = 'green';
// } else if(temperatura>=25 && temperatura<30){
//     textoTemperatura.style.color = 'yellow';
// } else if(temperatura>=30 && temperatura<35){
//     textoTemperatura.style.color = 'orange';
// } else if(temperatura>= 35){
//     textoTemperatura.style.color = 'red';
// }


// progreso

// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)


// const pintado = document.getElementById('pintado');
// const contenedor = document.getElementById('contenedor');
// const aPintar = prompt('Ingrese el porcentaje de progreso');

// pintado.style.width = `${aPintar}%`


// reacciones

// En un documento html hacer un post de una red social que contenga:

//     un h3 con la usuaria
//     un p con un lorem ipsum
//     3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad

// Dar estilos para que

//     la tipografía sea distinta a la default
//     los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius

// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

// const reaccionUno = prompt('Ingrese la cantidad de me gusta');
// const reaccionDos = prompt('Ingrese la cantidad de no me gusta');
// const reaccionTres = prompt('Ingrese la cantidad de me divierte');
// const like = document.getElementById('like');
// const wow = document.getElementById('wow');
// const love = document.getElementById('love');

// like.innerText =`${reaccionUno}`;
// love.innerText =`${reaccionDos}`;
// wow.innerText =`${reaccionTres}`;


// card

// Hacer un programa que al iniciarse pregunte mediante prompts por

//     un título
//     una url de una imagen
//     una url a un artículo

// Utilizar esos datos para completar en el html una card que tenga

//     una imagen, con la url de la imagen ingresada
//     un título, con el texto del título ingresado
//     un link que diga Leer más, con la url al artículo ingresado

// Dar algunos estilos mínimos a la card:

//     centrarla con respecto a la pantalla
//     agregarle un borde
//     agregarle un sombreado
//     cambiarle la tipografía
//     cambiarle los tamaños de fuente
//     cambiarle los colores por defecto

// const title = prompt('Ingrese un título');
// const urlImg = prompt('Ingrese la url de una imagen');
// const urlArt = prompt('Ingrese la url de un artículo');
// const card = document.getElementById('card');

// const newTitle = document.createElement('h2');
// const newImg = document.createElement('img');
// const newA = document.createElement('a');
// newA.innerText = 'Leer más'
// newA.href = `${urlArt}`;
// newA.style.color = 'inherit';
// newImg.src = `${urlImg}`;
// newTitle.innerText = `${title}`;

// card.appendChild(newTitle);
// card.appendChild(newImg);
// card.appendChild(newA);



// animales

// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

// const animal = prompt('Elegí entre perro, gato o hurón');
// const perro = document.getElementById('perro');
// const gato = document.getElementById('gato');
// const huron= document.getElementById('huron');

// if(animal === 'perro'){
//     gato.style.display= 'none';
//     huron.style.display= 'none';
// } else if(animal === 'gato'){
//     perro.style.display= 'none';
//     huron.style.display= 'none';
// } else if(animal === 'huron'){
//     gato.style.display= 'none';
//     perro.style.display= 'none';
// } else{
//     alert('La opción ingresada no es válida')
// }

// paises

// En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.

// const paisElegido = prompt('Que continente querés ver?').toLocaleLowerCase();
// const asur = document.getElementsByClassName('asur');
// const asia = document.getElementsByClassName('asia');
// const anorte = document.getElementsByClassName('anorte');
// const oceania = document.getElementsByClassName('oceania');
// const africa = document.getElementsByClassName('africa');
// const europa = document.getElementsByClassName('europa');

// const esEuropa = (europa) =>{
//     for(i=0; i<europa.length; i++) {
//         europa[i].style.color = 'red';
//         europa[i].style.fontWeight = '800';
//     }
// }
// const esASur = (asur) =>{
//     for(i=0; i<asur.length; i++) {
//         asur[i].style.color = 'red';
//         asur[i].style.fontWeight = '800';
//     }
// }
// const esANorte = (anorte) =>{
//     for(i=0; i<anorte.length; i++) {
//         anorte[i].style.color = 'red';
//         anorte[i].style.fontWeight = '800';
//     }
// }
// const esAfrica = (africa) =>{
//     for(i=0; i<africa.length; i++) {
//         africa[i].style.color = 'red';
//         africa[i].style.fontWeight = '800';
//     }
// }
// const esOceania = (oceania) =>{
//     for(i=0; i<oceania.length; i++) {
//         oceania[i].style.color = 'red';
//         oceania[i].style.fontWeight = '800';
//     }
// }
// const esAsia = (asia) =>{
//     for(i=0; i<asia.length; i++) {
//         asia[i].style.color = 'red';
//         asia[i].style.fontWeight = '800';
//     }
// }

// switch (paisElegido){
//     case 'africa':
//         esAfrica(africa);
//         break;
//     case 'america del norte':
//         esANorte(anorte);
//         break;
//     case 'america del sur':
//         esASur(asur);
//         break;
//     case 'asia':
//         esAsia(asia);
//         break;
//     case 'europa':
//         esEuropa(europa);
//         break;
//     case 'oceania':
//         esOceania(oceania);
//         break;
// }

// comidas

// En un documento html agregar imágenes de comidas, postres y bebidas (3 o 4 de cada uno). Dar estilos para que se muestren una al lado de la otra, que tengan algo de espacio con margenes y que tengan el mismo tamaño. Hacer un programa que al iniciarse pregunte mediante un prompt qué se desea ver (comidas, postres o bebidas) y mostrar sólo las imágenes de la categoría correspondiente.

// const eleccion = prompt('Elegí si querés ver comida, bebida o postre');
// const comida = document.querySelectorAll('.comida'); 
// const bebida = document.querySelectorAll('.bebida');
// const postre = document.querySelectorAll('.postre');

// const comidaNone = (comida) =>{
//     for(i=0; i<comida.length; i++) {
//         comida[i].style.display = 'none';
//     }
// }

// const bebidaNone = (bebida) =>{
//     for(i=0; i<bebida.length; i++) {
//         bebida[i].style.display = 'none';
//     }
// }
// const postreNone = (postre) =>{
//     for(i=0; i<postre.length; i++) {
//         postre[i].style.display = 'none';
//     }
// }


// if(eleccion === 'comida'){
//     bebidaNone(bebida);
//     postreNone(postre);
// } else if(eleccion === 'bebida'){
//     comidaNone(comida);
//     postreNone(postre);
// } else if(eleccion === 'postre'){
//     bebidaNone(bebida);
//     comidaNone(comida);
// }

// busqueda

// En un documento html crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un prompt por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.

// const items = document.getElementsByTagName('li');
// const palabra = prompt('Ingrese la palabra que desea buscar en la lista');

// for(let i=0; i<items.length; i++){
//     const item = items[i];
//     if(item.innerHTML.toLocaleLowerCase().includes(palabra.toLocaleLowerCase())){
//         item.style.color = 'red';
//         item.style.fontWeight = '800';
//     }
// }

