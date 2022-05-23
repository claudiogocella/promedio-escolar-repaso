//… funcionalidad de ingreso de datos …
rotulo1.innerHTML = "Ingrese el número de alumnos: ";
rotulo2.innerHTML = "A quien busca: ";
let numAlum : number = Number(dato1.value);
let alumnos : string[] = new Array(numAlum);
let nota1 : number[] = new Array(numAlum);
let nota2 : number[] = new Array(numAlum);
let nota3 : number[] = new Array(numAlum);
let indice : number;
for (indice=0; indice<alumNum; indice++) {
let alumnos[indice]= prompt("Nombre: ");
let nota1[indice] = Number(prompt("Nota 1er trimestre:"));
let nota2[indice] = Number(prompt("Nota 2do trimestre:"));
let nota3[indice] = Number(prompt("Nota 3er trimestre:"));
}

let alumBuscado : string = dato2.value;
let encontrado : boolean = false;
let promedio : number = 0; indice = 0;
while (indice < alumNum && !encontrado) {
if (alumnos[indice] == alumBuscado) { encontrado = true;
promedio = nota1[indice] + nota2[indice] + nota3[indice];
promedio /= 3; }indice++;
}i
f (encontrado) {
console.log("El promedio de ", alumBuscado, " es ", promedio);
} else {
console.log("No se pudo encontrar a ", alumBuscado);
}

//promedio escolar - no es muy usable 
function calcularPromedio(nota1 : number, nota2 : number, nota3 : number) : number {
  let prom3 : number = (nota1 + nota2 + nota3) / 3;
  return prom3;
  }

  //promedio escolar - es reusable?

  function buscar(alumBuscado : string, alumnos : number[], alumNum : number) : number {
    let indAlum : number = -1;
    let indice : number = 0
    while (indice < alumNum && indAlum == -1) {
    if (alumnos[indice] == alumBuscado) {
    indAlum = indice;
    }i
    ndice++;
    }
    return indAlum;
    }

    //promedio escolar -. no pudimos automatizar la carga de notas
    rotulo2.innerHTML = "A quién busca: ";
//Defino e inicializo las variables
//Cargo las notas
//Leer a quién busco
let alumBuscado : string = dato2.value;
let indAlum : number = buscar(alumBuscado, alumnos, alumNum);
//Si lo encontre imprimo el promedio
if (indAlum != -1) {
console.log("El promedio de ", alumBuscado, " es ", calcularPromedio(nota1[indAlum], nota2[indAlum],nota3[indAlum]);
} else {
console.log("No se pudo encontrar a ", alumBuscado);
}