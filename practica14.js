// suma de numeros  


const sumaDosNumeros = () => {
    let num1= prompt("ingrese numero 1");   
    let num2 = prompt("ingrese numero 2");
    console.log(num1, num2);
    let resultado = parseInt (num1) + parseInt(num2);
    alert ("la suma es " + resultado); 
}



// Resta de dos numeros
const restaDosNumeros = () => {
    let num1= prompt("ingrese numero 1");   
    let num2 = prompt("ingrese numero 2");
    console.log(num1, num2);
    let resultado = parseInt (num1) - parseInt(num2);
    alert ("la resta es " + resultado); 
}




//multiplicar dos numeros
const multiplicarDosNumeros = () => {
    let num1= prompt("ingrese numero 1");   
    let num2 = prompt("ingrese numero 2");
    console.log(num1, num2);
    let resultado = parseInt (num1) * parseInt(num2);
    alert ("la multiplicacion es " + resultado); 
}




//dividir dos numeros


const dividirDosNumeros = () => {
    let num1= prompt("ingrese numero 1");   
    let num2 = prompt("ingrese numero 2");
    console.log(num1, num2);
    // validacion por cero
    if (num2 != 0) {
        let resultado = parseFloat(num1) / parseFloat(num2);
        alert ("la division es " + resultado); 
    } else {
        alert("No es posible dividir por cero")
    }


    
   
}



// para aseguranos que estamos trabajando con decimales, usamos parseFloat