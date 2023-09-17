# Practica - Expresiones Regulares 1

## Instrucciones:
* En esta actividad deberán agregar un pequeño formulario para que el usuario ingrese la frase y un botón para que se valide.

## Correr el proyecto:
* `npm i` ó `npm install` para instalar las dependencias.
* `npm run dev` para generar el servidor local desde el cual se podra acceder al proyecto.

## Código
Para realizar esta solucion, decidi seguir el enfoque al que invita Vite con su proyecto default: HTML inyectado desde Javascript hacia un archivo `Index.html` basico, esto ya que la mayoria de componentes de la pagina debian ser manipulados desde Javascript de cualquier manera, por lo que crearlos directamente en este resultó mas comodo.

La solucion de divide en 3 partes: 

* `Index.html`/`style.css`: Estos son los archivos basicos de un proyecto web, se utilizaron para el maquetado y estilos.
* `main.js`: A traves de este modulo se generan los elementos del formulario html, asi como tambien la funcion manejadora del botón del formulario.
* `assertRegex.js`: Este modulo fue creado para extrar logica abstracta del archivo main.js; En este se declara la funcion que prueba la cadena que introduzca el usuario utilizando el regex dado.
