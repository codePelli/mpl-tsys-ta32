let texto = prompt("introduce lo que te de la gana");

let palindromo = "";
texto = texto.replaceAll(" ", "");

for (let x = texto.length - 1; x >= 0; x--) {
    palindromo = palindromo + texto[x];

}

if(texto == palindromo){
    alert("es polindromo");
} else {
    alert("no es polindromo");
}
console.log(palindromo);
