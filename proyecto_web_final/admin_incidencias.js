
//añadir incidencias

document.getElementById('form_solicitudes').addEventListener('submit', function (event) {
  event.preventDefault();

  var Nombre = document.getElementById('Nombre').value;
  var id = document.getElementById('id').value;
  var propietario = document.getElementById('propietario').value;
  var Problema = document.getElementById('Problema').value;

  var table = document.getElementById('dataTable');
  var newRow = table.insertRow(table.rows.length); // Inserta al final

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  cell1.innerHTML = Nombre;
  cell1.classList.add('nombre');
  cell2.innerHTML = id;
  cell2.classList.add('id');
  cell3.innerHTML = propietario;
  cell4.innerHTML = Problema;
  cell5.innerHTML = '<button class="btn-aceptar">Aceptar</button>' + " " + '<button class="btn-rechazar">Rechazar</button>';

  document.getElementById('Nombre').value = '';
  document.getElementById('id').value = '';
  document.getElementById('propietario').value = '';
  document.getElementById('Problema').value = '';
});

//buscador
document.addEventListener("keyup", (e) => {
  if (e.target.matches(".buscador")) {
    const filtro = e.target.value.toLowerCase();
    const filasTabla = document.querySelectorAll(".tabla tr");

    filasTabla.forEach((fila, index) => {
      if (index !== 0) {
        const celdaModelo = fila.querySelector("td.nombre");
        const celdaID = fila.querySelector("td.id");
        const celdaCurso = fila.querySelector("td.curso");

        const modelo = celdaModelo ? celdaModelo.textContent.toLowerCase() : "";
        const id = celdaID ? celdaID.textContent.toLowerCase() : "";
        const curso = celdaCurso ? celdaCurso.textContent.toLowerCase() : "";

        if (
          modelo.includes(filtro) ||
          id.includes(filtro) ||
          curso.includes(filtro)
        ) {
          fila.style.display = "table-row";
        } else {
          fila.style.display = "none";
        }
      }
    });
  }
});


//volver al inicio
document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "admin.html";
});
