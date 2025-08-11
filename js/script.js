// Lista de nombres
const nombres = [];

// Elementos del DOM
const listaNombres = document.getElementById("name-list");
const resultado = document.getElementById("result");
const botonAgregar = document.querySelector(".button-add");
const botonSortear = document.querySelector(".button-draw");

// Función para agregar nombre
botonAgregar.addEventListener("click", () => {
  const nombre = prompt("Ingresa un nombre:");

  if (!nombre || nombre.trim() === "") {
    alert("El nombre no puede estar vacío.");
    return;
  }

  const nombreLimpio = nombre.trim();

  if (nombres.includes(nombreLimpio)) {
    alert("Ese nombre ya fue agregado.");
    return;
  }

  nombres.push(nombreLimpio);

  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = nombreLimpio;
  listaNombres.appendChild(nuevoItem);
});

// Función para realizar el sorteo
botonSortear.addEventListener("click", () => {
  if (nombres.length === 0) {
    resultado.textContent = "⚠️ No hay nombres para sortear.";
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indiceAleatorio];

  resultado.textContent = 🎉 Tu amigo secreto es: ${nombreSorteado};
});

