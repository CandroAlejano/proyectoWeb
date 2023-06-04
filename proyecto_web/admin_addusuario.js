//volver al inicio
document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "admin.html";
});

//añadir filas a la tabla
document
  .getElementById("formulario_profesor")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre_profesor").value;
    var apellido = document.getElementById("apellido_profesor").value;
    var dni = document.getElementById("dni_profesor").value;
    var correo = document.getElementById("correo_profesor").value;
    var departamento = document.getElementById("depa_profesor").value;

    var table = document.getElementById("tabla_profesor");
    var newRow = table.insertRow(table.rows.length); // Inserta al final

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = nombre;
    cell2.innerHTML = apellido;
    cell3.innerHTML = dni;
    cell4.innerHTML = correo;
    cell5.innerHTML = departamento;

    // Limpiar los campos del formulario
    document.getElementById("nombre_profesor").value = "";
    document.getElementById("apellido_profesor").value = "";
    document.getElementById("dni_profesor").value = "";
    document.getElementById("correo_profesor").value = "";
    document.getElementById("depa_profesor").value = "";
  });

document
  .getElementById("formulario_alumno")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre_alumno").value;
    var apellido = document.getElementById("apellido_alumno").value;
    var nia = document.getElementById("nia_alumno").value;
    var correo = document.getElementById("correo_alumno").value;
    var curso = document.getElementById("curso").value;

    var table = document.getElementById("tabla_alumno");
    var newRow = table.insertRow(table.rows.length); // Inserta al final

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = nombre;
    cell2.innerHTML = apellido;
    cell3.innerHTML = nia;
    cell4.innerHTML = correo;
    cell5.innerHTML = curso;

    // Limpiar los campos del formulario
    document.getElementById("nombre_alumno").value = "";
    document.getElementById("apellido_alumno").value = "";
    document.getElementById("nia_alumno").value = "";
    document.getElementById("correo_alumno").value = "";
    document.getElementById("curso").value = "";
  });

  //buscador ALUMNOS
  document.addEventListener("keyup", (e) => {
    if (e.target.matches("#buscador_alumnos")) {
      const filtro = e.target.value.toLowerCase();
      const filasTabla = document.querySelectorAll("#tabla_alumno tr");
  
      filasTabla.forEach((fila, index) => {
        if (index !== 0) {
          const celdaNombre = fila.querySelector("td.nombre");
          const celdaApellido = fila.querySelector("td.apellido");
          const celdaNia = fila.querySelector("td.nia");
          const celdaCorreo = fila.querySelector("td.correo");
          const celdaCurso = fila.querySelector("td.curso");
  
          if (celdaNombre && celdaApellido && celdaNia && celdaCorreo && celdaCurso) {
            const nombre = celdaNombre.textContent.toLowerCase();
            const apellido = celdaApellido.textContent.toLowerCase();
            const nia = celdaNia.textContent.toLowerCase();
            const correo = celdaCorreo.textContent.toLowerCase();
            const curso = celdaCurso.textContent.toLowerCase();
  
            if (
              nombre.includes(filtro) ||
              apellido.includes(filtro) ||
              nia.includes(filtro) ||
              correo.includes(filtro) ||
              curso.includes(filtro)
            ) {
              fila.style.display = "table-row";
            } else {
              fila.style.display = "none";
            }
          }
        }
      });
    }
  });

  //buscador profesor
  document.addEventListener("keyup", (e) => {
    if (e.target.matches("#buscador_profesores")) {
      const filtro = e.target.value.toLowerCase();
      const filasTabla = document.querySelectorAll("#tabla_profesor tr");
  
      filasTabla.forEach((fila, index) => {
        if (index !== 0) {
          const celdaNombre = fila.querySelector("td.nombre");
          const celdaApellido = fila.querySelector("td.apellido");
          const celdaDni = fila.querySelector("td.dni");
          const celdaCorreo = fila.querySelector("td.correo");
          const celdaDepartamento = fila.querySelector("td.departamento");
  
          if (celdaNombre && celdaApellido && celdaDni && celdaCorreo && celdaDepartamento) {
            const nombre = celdaNombre.textContent.toLowerCase();
            const apellido = celdaApellido.textContent.toLowerCase();
            const dni = celdaDni.textContent.toLowerCase();
            const correo = celdaCorreo.textContent.toLowerCase();
            const departamento = celdaDepartamento.textContent.toLowerCase();
  
            if (
              nombre.includes(filtro) ||
              apellido.includes(filtro) ||
              dni.includes(filtro) ||
              correo.includes(filtro) ||
              departamento.includes(filtro)
            ) {
              fila.style.display = "table-row";
            } else {
              fila.style.display = "none";
            }
          }
        }
      });
    }
  });
  