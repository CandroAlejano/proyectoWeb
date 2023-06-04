document.addEventListener("keyup", (e) => {
  if (e.target.matches(".buscador")) {
    const filtro = e.target.value.toLowerCase();
    const filasTabla = document.querySelectorAll(".tabla tr");

    filasTabla.forEach((fila, index) => {
      if (index !== 0) {
        const celdaModelo = fila.querySelector("td.modelo");
        const celdaID = fila.querySelector("td.id");

        if (celdaModelo && celdaID) {
          const modelo = celdaModelo.textContent.toLowerCase();
          const id = celdaID.textContent.toLowerCase();

          if (modelo.includes(filtro) || id.includes(filtro)) {
            fila.style.display = "table-row";
          } else {
            fila.style.display = "none";
          }
        }
      }
    });
  }
});


//volver al inicio
document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "admin.html";
});