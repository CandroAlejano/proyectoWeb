//volver al inicio
document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "profesor.html";
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
  
  //añadir incidencias
  
  document.getElementById('form_solicitudes').addEventListener('submit', function (event) {
      event.preventDefault();
    
      var Nombre = document.getElementById('Nombre').value;
      var Curso = document.getElementById('Curso').value;
      var ID = document.getElementById('ID').value;
      var Problema = document.getElementById('Problema').value;
    
      var table = document.getElementById('dataTable');
      var newRow = table.insertRow(table.rows.length); // Inserta al final
    
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);

    
      cell1.innerHTML = Nombre;
      cell2.innerHTML = Curso;
      cell3.innerHTML = ID;
      cell4.innerHTML = Problema;
      
    
      document.getElementById('Nombre').value = '';
      document.getElementById('Curso').value = '';
      document.getElementById('ID').value = '';
      document.getElementById('Problema').value = '';
    });