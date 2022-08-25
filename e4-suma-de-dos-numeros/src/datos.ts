import "./styles.css";

document.getElementsByClassName("texto-prueba").innerHTML = `
<h1>Hello Vanilla!</h1> dato.value
`;

let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  let datoNumerico: number = Number(dato.value);
  let datoNumerico2: number = Number(dato.value);

  let resultado: number = datoNumerico + datoNumerico2;

  console.log("el dato ingresado es ", resultado);
});
