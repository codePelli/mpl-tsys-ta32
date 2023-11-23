let texto = prompt("introduce lo que te de la gana")

let minusculas = false;
let mayusculas = false;

for(let x = 0; x < texto.length; x++){

    let caracter = texto[x];

    if(/[a-z]/.test(caracter)){

        minusculas = true;
    } else if(/[A-Z]/.test(caracter)){

        mayusculas = true;
    }
}

if(minusculas && mayusculas){

    alert("contiene minus y mayus");

} else if(minusculas){

    alert("contiene minus");

} else if(mayusculas){
    
    alert("contiene mayus");
}