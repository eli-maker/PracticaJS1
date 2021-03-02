// condicional switch
let prueba = prompt("ingresa un numero entre 1 y 4 y adivina cual es el correcto");





switch (prueba) {
    case "1":
        alert("intenta de nuevo");
        break;
        case "2":
        alert("respuesta correcta");
        break;
        case "3":
        alert("intenta de nuevo");
        break;
        case "4":
        alert("intenta de nuevo");
        break;

    default:
        alert("ingresa un numero entre 1 y 4");
        break;
}

// version if else


if (prueba !== "1" && prueba !=="2" && prueba !=="3" && prueba !=="4") {
    alert ("deber ser una opcion entre 1 y 4");
} else {
    if(prueba !== "2") {
        alert("intenta de nuevo");
    } else {
        alert("respuesta correcta");
    }
}