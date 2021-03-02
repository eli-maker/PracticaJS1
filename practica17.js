//funcion que ejecuta la mini calculadora 2 29
const miniCalculadora = () => {
    // creamos la variable "op" que almacena la operacion a realizar   
    let op = prompt(
        "seleccione el numero indicado para realizar la operacion: \n 1 -para sumar \n 2 - para restar \n 3 -  para multiplicar \n 4 -     para dividir"
    );

    // validamos la opcion seleccionada por el usuario 
    
    if (op !== "1" && op !=="2" && op !=="3" && op !=="4") {
        alert ("deber ser una opcion entre 1 y 4");
    } else {
        // solicitamos los dos numeros de la operacion a relizar
        let num1 = prompt("Ingrese el primer numero");
        let num2 = prompt("Ingrese el segundo numero");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        let resultado = 0;
        // validar datos correctos en variables num1 y num2 (expresiones regulares)

        // validamos que la operacion sea suma "1"
        switch (op) {
            case "1":
                resultado = num1 + num2;
                alert("El resultado es " + resultado);
                break;
            
            case "2":
                 resultado = num1 - num2;
                 alert("El resultado es " + resultado);
                 break;

             case "3":
                 resultado = num1 * num2;
                 alert("El resultado es " + resultado);
                 break;
                 

            case "4":
                 
                    if (num2 === 0) {
                        alert ("no es posible dividir por 0");
                    } else {
                        resultado = num1 / num2;
                    
                } 
                alert("El resultado es " + resultado);

            
        }






        if (op === "1") {
            resultado = num1 + num2;
        } 

        // validamos la resta "2"
        if (op === "2") {
            resultado = num1 - num2;
        } 

        // validamos la multiplicacion "3"

        if (op === "3") {
            resultado = num1 * num2;
        } 

        // validacion la division "4"

        if (op === "4") {
            if (num2 === 0) {
                alert ("no es posible dividir por 0");
            } else {
                resultado = num1 / num2;
            }
        } 
         alert("El resultado es " + resultado);
    

    }

};

// float nos permite trabajar con numeros decimales
// int con enteros


