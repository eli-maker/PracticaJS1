
// suma de numeros  


const sumaDosNumeros = () => {
    let num1= prompt("ingrese numero 1");   
    let num2 = prompt("imgrese numero 2");
    console.log(num1, num2);
    let resultado = parseInt (num1) + parseInt(num2);
    alert ("la suma es " + resultado); 
}



// la suma no funciona porque el + concatena textos
//cuando hay un formulario en la pagina, cajita de texto, o un prompt, todo lo que ingrese desde una interfaz asi ponga numeros es texto
// llega como string al codido. lo que se ingrese desde una interfaz llega como string al codigo
//parseInt para pasar una string a un entero