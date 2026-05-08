window.onload = function () {
const tabla = document.getElementById("tablaDias");

for (let i = 1; i <= 31; i++) {
let fila = document.createElement("tr");

fila.innerHTML = `
<td>${i}</td>
<td><input type="text" id="tarea${i}"></td>
<td><input type="checkbox" id="check${i}"></td>
<td><input type="text" id="firma${i}"></td>
`;

tabla.appendChild(fila);
}

cargarDatos();
};

function guardarDatos() {
let datos = {};

for (let i = 1; i <= 31; i++) {
datos[i] = {
tarea: document.getElementById("tarea" + i).value,
check: document.getElementById("check" + i).checked,
firma: document.getElementById("firma" + i).value
};
}

localStorage.setItem("limpieza", JSON.stringify(datos));
alert("Datos guardados");
}

function cargarDatos() {
let datos = JSON.parse(localStorage.getItem("limpieza"));

if (datos) {
for (let i = 1; i <= 31; i++) {
document.getElementById("tarea" + i).value = datos[i]?.tarea || "";
document.getElementById("check" + i).checked = datos[i]?.check || false;
document.getElementById("firma" + i).value = datos[i]?.firma || "";
}
}
}
