var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("escribe tu dni");

let letra = prompt("escribe la letra del dni");
let calculoLetra;

if(dni < 0 || dni > 99999999){
    alert("DNI INCORRECTO");
} else {
    calculoLetra = letras[dni%23];

    if (calculoLetra != letra){
        alert("la letra escrita no es la misma");
    }
}