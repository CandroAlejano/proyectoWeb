
document
  .getElementById("form_inventario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var modelo = document.getElementById("modelo").value;
    var id = document.getElementById("id").value;
    var enUso = document.getElementById("enUso").value;
    var disponible = document.getElementById("disponibles").value;
    var total = document.getElementById("total").value;

    var table = document.getElementById("tabla_inventario");
    var newRow = table.insertRow(table.rows.length); // Inserta al final

    var cell1 = newRow.insertCell(0);
    cell1.classList.add('modelo');
    var cell2 = newRow.insertCell(1);
    cell2.classList.add('id');
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = modelo;
    cell2.innerHTML = id;
    cell3.innerHTML = enUso;
    cell4.innerHTML = disponible;
    cell5.innerHTML = total;

    

    // Limpiar los campos del formulario
    document.getElementById("modelo").value = "";
    document.getElementById("id").value = "";
    document.getElementById("enUso").value = "";
    document.getElementById("disponibles").value = "";
    document.getElementById("total").value = "";
  });


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