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