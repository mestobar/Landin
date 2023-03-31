function saludo() {
  alert("Hola mundo");
  var nombre = prompt("Ingrese su nombre: ");
  alert("hola " + nombre);
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function() {
  saludo();
});

function alerta() {
  alert("Gracias por visitar la página");

}

var inicio = document.getElementsByClassName("link")[1];

inicio.addEventListener("click", function() {
  alerta();
});