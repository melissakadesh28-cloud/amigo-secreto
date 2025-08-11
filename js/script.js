let nombres = [];

function agregarNombre() {
  const input = document.getElementById("nombre");
  const nombre = input.value.trim();
  if (nombre && !nombres.includes(nombre)) {
    nombres.push(nombre);
    mostrarNombres();
    input.value = "";
  }
}

function mostrarNombres() {
  const lista = document.getElementById("listaNombres");
  lista.innerHTML = "";
  nombres.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    lista.appendChild(li);
  });
}

function realizarSorteo() {
  if (nombres.length < 2) {
    alert("Agrega al menos dos nombres.");
    return;
  }

  let copia = [...nombres];
  let resultado = [];

  nombres.forEach(nombre => {
    let posibles = copia.filter(n => n !== nombre);
    if (posibles.length === 0) {
      alert("No se puede realizar el sorteo sin repetir.");
      return;
    }
    let elegido = posibles[Math.floor(Math.random() * posibles.length)];
    resultado.push(${nombre} → ${elegido});
    copia = copia.filter(n => n !== elegido);
  });

  const listaResultado = document.getElementById("resultadoSorteo");
  listaResultado.innerHTML = "";
  resultado.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    listaResultado.appendChild(li);
  });
}
