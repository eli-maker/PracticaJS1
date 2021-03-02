//Ejercicio dia de la semana
//creamos variable para almacenar el dia de la semana 
let dia = prompt("Ingresa un dia a la semana");
// convertir lo que escriba el usuario en minuscula
dia = dia.toLowerCase();
//validamos si es dia entre semana o un fin de semana
if (
  dia == "Lunes" ||
  dia == "martes" ||
  dia == "miercoles" || 
  dia == "jueves" ||
  dia == "viernes"
) {
  alert("Es un dia entre semana");
} else {
  if (dia == "sabado" || dia == "domingo") {
    alert("Es un fin de semana");
  } else {
    alert("Porfavor ingresar un dia a la semana");  }
}
