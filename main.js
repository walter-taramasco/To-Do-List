var tarea1 = document.getElementById("tarea1");
var tarea2 = document.getElementById("tarea2");
var tarea3 = document.getElementById("tarea3");
var tarea4 = document.getElementById("tarea4");
let tarea5 = document.getElementById("tarea5");
var escribir = document.getElementById("input-escribir");
var anadirTarea = document.querySelector(".anadir");
var editarTarea0 = document.querySelector(".editarTarea");
var nombretarea1 = document.getElementById("nombretarea1");
var nombretarea2 = document.getElementById("nombretarea2");
var nombretarea3 = document.getElementById("nombretarea3");
var nombretarea4 = document.getElementById("nombretarea4");
let nombretarea5 = document.getElementById("nombretarea5");
/* let editartarea1 = document.getElementById("editartarea1");
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
// Activar/desactivar el botón de añadir tarea dependiendo si el campo de texto estaba vacío o con algún carácter
function clickEscribir() {
if(escribir.value.length > minimo) {
anadirTarea.style.pointerEvents = 'all';
anadirTarea.style.opacity = '1';
anadirTarea.style.transition = '0.3s';
editarTarea0.style.opacity = '1';
editarTarea0.style.transition = '0.3s';
editarTarea0.style.pointerEvents = 'all';
console.log("True");
} else{
console.log("False");
anadirTarea.style.pointerEvents = 'none';
anadirTarea.style.opacity = '0.6';
anadirTarea.style.transition = '0.3s';
editarTarea0.style.transition = '0.3s';
editarTarea0.style.opacity = '0.6';
editarTarea0.style.pointerEvents = 'none';
}
};
var arrToDo = [];
function clickAñadir() {
arrToDo.push(escribir.value);
if(arrToDo[0] == undefined) {
tarea1.style.display = 'none';
} else {
tarea1.style.display = 'flex';
nombretarea1.textContent = arrToDo[0];
escribir.value = "";
anadirTarea.style.pointerEvents = 'none';
anadirTarea.style.opacity = '0.6';
anadirTarea.style.transition = '0.3s';
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
}
if(arrToDo[1] == undefined) {
tarea2.style.display = 'none';
} else {
nombretarea2.textContent = arrToDo[1];
tarea2.style.display = 'flex';
escribir.value = "";
anadirTarea.style.pointerEvents = 'none';
anadirTarea.style.opacity = '0.6';
anadirTarea.style.transition = '0.3s';
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
}
if(arrToDo[2] == undefined) {
tarea3.style.display = 'none';
} else {
nombretarea3.textContent = arrToDo[2];
tarea3.style.display = 'flex';
escribir.value = "";
anadirTarea.style.pointerEvents = 'none';
anadirTarea.style.opacity = '0.6';
anadirTarea.style.transition = '0.3s';
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
}
if(arrToDo[3] == undefined) {
tarea4.style.display = 'none';
} else {
nombretarea4.textContent = arrToDo[3];
tarea4.style.display = 'flex';
escribir.value = "";
anadirTarea.style.pointerEvents = 'none';
anadirTarea.style.opacity = '0.6';
anadirTarea.style.transition = '0.3s';
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
}
if(arrToDo[4] == undefined) {
tarea5.style.display = 'none'
} else {
nombretarea5.textContent = arrToDo[4];
tarea5.style.display = 'flex';
escribir.value = "";
anadirTarea.style.pointerEvents = 'none';
anadirTarea.style.opacity = '0.6';
anadirTarea.style.transition = '0.3s';
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
}
if(arrToDo.length >= 6 ) {
alert("¡Solo se permiten 5 tareas como máximo!");
arrToDo.splice(5, 1);
}
};

var StorageArrToDo = JSON.parse(localStorage.getItem("ToDoList"));
if(StorageArrToDo[0] == undefined) {
tarea1.style.display = 'none';
} else {
nombretarea1.textContent = StorageArrToDo[0];
tarea1.style.display = 'flex';
arrToDo[0] = StorageArrToDo[0];
}
if(StorageArrToDo[1] == undefined) {
tarea2.style.display = 'none';
} else {
nombretarea2.textContent = StorageArrToDo[1];
tarea2.style.display = 'flex';
arrToDo[1] = StorageArrToDo[1];
}
if(StorageArrToDo[2] == undefined) {
tarea3.style.display = 'none';
} else {
nombretarea3.textContent = StorageArrToDo[2];
tarea3.style.display = 'flex';
arrToDo[2] = StorageArrToDo[2];
}
if(StorageArrToDo[3] == undefined) {
tarea4.style.display = 'none';
} else {
nombretarea4.textContent = StorageArrToDo[3];
tarea4.style.display = 'flex';
arrToDo[3] = StorageArrToDo[3];
}
if(StorageArrToDo[4] == undefined) {
tarea5.style.display = 'none';
} else {
nombretarea5.textContent = StorageArrToDo[4];
tarea5.style.display = 'flex'
arrToDo[4] = StorageArrToDo[4];
}

if(StorageArrToDo.length >= 6) {
StorageArrToDo.splice(5, 1);
}

function eliminarTarea1() {
arrToDo.splice(0, 1);
StorageArrToDo.splice(StorageArrToDo, 0);
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
nombretarea1.textContent = "";
tarea1.style.display = 'none';
}

function eliminarTarea2() {
arrToDo.splice(1, 1);
StorageArrToDo.splice(StorageArrToDo, 1);
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
nombretarea2.textContent = "";
tarea2.style.display = 'none';
}

function eliminarTarea3() {
arrToDo.splice(2, 1); 
StorageArrToDo.splice(StorageArrToDo, 2);
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
nombretarea3.textContent = "";
tarea3.style.display = 'none';
}

function eliminarTarea4() {
arrToDo.splice(3, 1);
StorageArrToDo.splice(StorageArrToDo, 3);
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
nombretarea4.textContent = "";
tarea4.style.display = 'none';
}

function eliminarTarea5() {
arrToDo.splice(4, 1);
StorageArrToDo.splice(StorageArrToDo, 4);
localStorage.setItem("ToDoList", JSON.stringify(arrToDo));
nombretarea5.textContent = "";
tarea5.style.display = 'none';
}

/*
function editarTarea1() {
escribir.value = nombretarea1.textContent;
anadirTarea.style.display = 'none';
editarTarea0.style.display = 'flex';
}
document.querySelector(".editarTarea").addEventListener('click', () => {
if(editarTarea0.style.display == true && escribir.value == nombretarea1.tex) {
arrToDo[0] = escribir.value;
anadirTarea.style.display = 'flex';
editarTarea0.style.display = 'none';
}
});
*/
