// Datos de calificaciones del alumno (puedes modificar estos datos según tus necesidades)
var grades = [
    { subject: "Matemáticas", grade: 90 },
    { subject: "Ciencias", grade: 85 },
    { subject: "Historia", grade: 95 },
    { subject: "Idiomas", grade: 88 },
    { subject: "Arte", grade: 92 }
  ];
  
  // Obtener la tabla de calificaciones
  var table = document.getElementById("gradesTable");
  
  // Iterar sobre los datos de calificaciones y agregar filas a la tabla
  for (var i = 0; i < grades.length; i++) {
    var row = table.insertRow(i + 1);
    var subjectCell = row.insertCell(0);
    var gradeCell = row.insertCell(1);
    subjectCell.innerHTML = grades[i].subject;
    gradeCell.innerHTML = grades[i].grade;
  }
  