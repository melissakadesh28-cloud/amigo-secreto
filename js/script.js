const nombres = [];

const listaNombres = document.getElementById("name-list");
const resultado = document.getElementById("result");
const botonAgregar = document.querySelector(".button-add");
const botonSortear = document.querySelector(".button-draw");
const inputNombre = document.getElementById("nombre");

botonAgregar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();

  if (!nombre) {
    alert("El nombre no puede estar vacío.");
    return;
  }

  if (nombres.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    return;
  }

  nombres.push(nombre);

  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = nombre;
  listaNombres.appendChild(nuevoItem);

  inputNombre.value = "";
});

botonSortear.addEventListener("click", () => {
  if (nombres.length === 0) {
    resultado.textContent = "⚠️ No hay nombres para sortear.";
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indiceAleatorio];

  resultado.textContent = 🎉 Tu amigo secreto es: ${nombreSorteado};
});
