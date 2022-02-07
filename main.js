var tarea1 = document.getElementById("tarea1");
var tarea2 = document.getElementById("tarea2");
var tarea3 = document.getElementById("tarea3");
var tarea4 = document.getElementById("tarea4");
//let tarea5 = document.getElementById("tarea5");
var escribir = document.getElementById("input-escribir");
var anadirTarea = document.querySelector(".anadir");
var nombretarea1 = document.getElementById("nombretarea1");
var nombretarea2 = document.getElementById("nombretarea2");
var nombretarea3 = document.getElementById("nombretarea3");
var nombretarea4 = document.getElementById("nombretarea4");
/*let nombretarea5 = document.getElementById("nombretarea5");
let editartarea1 = document.getElementById("editartarea1");
let editartarea2 = document.getElementById("editartarea2");
let editartarea3 = document.getElementById("editartarea3");
let editartarea4 = document.getElementById("editartarea4");
let editartarea5 = document.getElementById("editartarea5");
let eliminartarea1 = document.getElementById("eliminartarea1");
let eliminartarea2 = document.getElementById("eliminartarea2");
let eliminartarea3 = document.getElementById("eliminartarea3");
let eliminartarea4 = document.getElementById("eliminartarea4");
let eliminartarea5 = document.getElementById("eliminartarea5"); 
*/
var minimo = 0;
/*
document.querySelector(".anadir").addEventListener('click', () => {
if(nombretarea1.textContent.length < minimo) {
nombretarea1.textContent = escribir.value;
tarea1.style.display = 'flex';
}
if(nombretarea1.textContent.length > minimo) {
nombretarea2.textContent = escribir.value;
tarea2.style.display = 'flex';
}
console.log("Llega");
if(nombretarea1.textContent.length > minimo && nombretarea2.textContent.length > minimo) {
nombretarea3.textContent = escribir.value;
tarea3.style.display = 'flex';
}
console.log("Llega2");
if(nombretarea1.textContent.length > minimo && nombretarea2.textContent.length > minimo && nombretarea3.textContent.length > minimo) {
nombretarea4.textContent = escribir.value;
tarea4.style.display = 'flex';
console.log("Se ejecuta");
}
});
*/
/*
if(nombretarea1.textContent == null) {
document.querySelector(".anadir").addEventListener('click', () => {
nombretarea1.textContent = escribir.value;
tarea1.style.display = 'flex';
});
}

if(nombretarea2.textContent.length < minimo && nombretarea1.textContent.length > minimo) {
document.querySelector(".anadir").addEventListener('click', () => {
nombretarea2.textContent = escribir.value;
tarea2.style.display = 'flex';
console.log("El if2 anda");
});
}
*/

// Activar/desactivar el botón de añadir tarea dependiendo si el campo de texto estaba vacío o con algún carácter
function clickEscribir() {
if(escribir.value.length > minimo) {
anadirTarea.style.pointerEvents = 'all';
anadirTarea.style.opacity = '1';
console.log("True");
} else{
console.log("False");
anadirTarea.style.pointerEvents = 'none';
anadirTarea.style.opacity = '0.6';
}
};

