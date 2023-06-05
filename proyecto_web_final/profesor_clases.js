function mostrarCuadroSeleccionado() {
    var select = document.getElementById("Clases");
    var cuadroSeleccionado = document.getElementById("cuadroSeleccionado");

    if (select.value !== "") {
        cuadroSeleccionado.style.display = "block";
        cuadroSeleccionado.textContent = "Seleccionaste: " + select.value;
        if (select.value == 1) {
            cuadroSeleccionado.innerHTML = "<div class ='alumno'> Juan Pérez <br> <div class='rota'>María González <br> Carlos Ramírez</div> Ana López <br> Luis Martínez <br> Laura García <br><div class='defectuosa'> Alejandro Rodríguez</div>Patricia Sánchez <br> Andrés Torres <br> Gabriela Fernández </div>"
        }
        else if (select.value == 2) {
            cuadroSeleccionado.innerHTML = "<div class ='alumno'> Roberto Gómezm<br><div class='rota'>Adriana Morales<br>Diego Herrera<br>Valentina Ríos</div>Javier Castro<br>Daniela Torres<br>Martín Silva<br>Natalia Vargas<br>Sebastián Ortega<br><div class='defectuosa'> Camila Mendoza</div></div>"
        }
        else if (select.value == 3) {
            cuadroSeleccionado.innerHTML = "<div class ='alumno'><div class='defectuosa'> Sofía Torres<br>Mateo García<br>Valentina López<br>Sebastián Martínez</div>Isabella Rodríguez<br>Santiago Ramírez<br>Camila Sánchez<br><div class='rota'>Daniel González<br>Emma Hernández<br>Nicolás Castro</div></div>"
        }
        else if (select.value == 4) {
            cuadroSeleccionado.innerHTML = "<div class ='alumno'> Sofia Cruz<br><div class='defectuosa'>Lucas Torres<br>Valentina Ramirez</div>Mateo Hernandez<br>Isabella Gonzalez<br>Santiago Lopez<br>Camila Martinez<br>Nicolas Rodriguez<br><div class='rota'>Mia Perez<br>Sebastian Sanchez</div></div>"

        }


    } else {
        cuadroSeleccionado.style.display = "none";
    }
}

//volver al inicio
document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "profesor.html";
  });
  