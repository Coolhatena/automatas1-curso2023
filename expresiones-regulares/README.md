# Practica - Expresiones Regulares 1

## Instrucciones:
* En esta actividad deberán agregar un pequeño formulario para que el usuario ingrese la frase y un botón para que se valide.

## Correr el proyecto:
* `npm i` ó `npm install` para instalar las dependencias.
* `npm run dev` para generar el servidor local desde el cual se podrá acceder al proyecto.

## Código
Para realizar esta solucion, decidi seguir el enfoque al que invita Vite con su proyecto default: HTML inyectado desde Javascript hacía un archivo `Index.html` básico, esto ya que la mayoría de componentes de la página tenían que ser manipulados desde Javascript de cualquier manera, por lo que crearlos directamente en este resultó más cómodo.

La solución de divide en 3 partes: 

* `Index.html`/`style.css`: Estos son los archivos básicos de un proyecto web, se utilizaron para el maquetado y estilos.
* `main.js`: A través de este módulo se generan los elementos del formulario html, así como también la función manejadora del botón del formulario.
* `assertRegex.js`: Este módulo fue creado para extraer lógica abstracta del archivo main.js; En este se declara la función que prueba la cadena que introduzca el usuario utilizando el regex dado.
