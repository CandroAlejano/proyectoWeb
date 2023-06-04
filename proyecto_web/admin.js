document.getElementById("estadisticas").addEventListener("click", function () {
  alert("hola");
});

document.getElementById("incidencias").addEventListener("click", function () {
  window.location.href = "admin_incidencias.html";
});

document.getElementById("inventario").addEventListener("click", function () {
  window.location.href = "admin_inventario.html";
});

document.getElementById("usuario").addEventListener("click", function () {
  window.location.href = "admin_addusuario.html";
});

document.addEventListener("keyup", (e) => {
  if (e.target.matches(".buscador")) {
    const filtro = e.target.value.toLowerCase();
    const filasTabla = document.querySelectorAll(".tabla  tr");

    let hayCoincidencia = false;

    filasTabla.forEach((fila, index) => {
      if (index !== 0) {
        const celdaModelo = fila.querySelector("td.modelo");
        if (celdaModelo) {
          const modelo = celdaModelo.textContent.toLowerCase();

          if (modelo.includes(filtro)) {
            fila.style.display = "table-row";
            hayCoincidencia = true;
          } else {
            fila.style.display = "none";
          }
        }
      }
    });

    filasTabla.forEach((fila, index) => {
      if (index !== 0) {
        const celdaModelo = fila.querySelector("td.id");
        if (celdaModelo) {
          const modelo = celdaModelo.textContent.toLowerCase();

          if (modelo.includes(filtro)) {
            fila.style.display = "table-row";
            hayCoincidencia = true;
          } else {
            fila.style.display = "none";
          }
        }
      }
    });

    if (!hayCoincidencia) {
      filasTabla.forEach((fila, index) => {
        if (index !== 0) {
          fila.style.display = "table-row";
        }
      });
    }
  }
});


//volver al inicio
document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "admin.html";
});