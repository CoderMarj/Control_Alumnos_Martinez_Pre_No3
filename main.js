//Variables
let identificadorTiempoDeEspera;
let  alumno = [];
let objetoMolde = {};

const inputNombre = document.querySelector("#nombreAlumno");
const inputPaterno = document.querySelector("#apellidos");
const inputelefono = document.querySelector("#telefono");
const inputEmail = document.querySelector("#correo");

const ShowDown = document.querySelector("#abajo");
const btnCleaner = document.querySelector("#btnLimpiar");
const btnAgregacion = document.querySelector("#btnAgregar");
const agregaDatos = document.querySelector("#agregando");

const btnDespliegue = document.querySelector("#btnDesplegar");

//Crea Tabla
const contenedor = document.getElementById("resultado");

const tituloCambiado = document.getElementById("titulo");//titulo
 


//Agrega los datos  al Array LOCAL STORAGE*******************************
btnAgregacion.addEventListener("click", (e) => {
  
  e.preventDefault();

  let valorInputNombre = inputNombre.value;
  let valorInputApellido = inputPaterno.value;
  let valorInputelefono = inputelefono.value;
  let valorInputEmail= inputEmail.value;

if (valorInputNombre === "" || valorInputApellido === "") {

    mesageSinExito();

}else {
  objetoMolde = {
    "nombre": valorInputNombre,
    "Apellidos": valorInputApellido,
    "Telefono": valorInputelefono,
    "correo": valorInputEmail,
   } //end Object

       if ( alumno === undefined || alumno === null || alumno === ''  ) {
        resultado.innerText = "No existen Datos o Storage es Null o Campos Vacios"  
        temporizadorDeRetraso();
       }else {
        alumno.push(objetoMolde);
        
           //insertArreglo = [].concat(alumno);
      
            //const ConvertirObjeto =   JSON.parse(localStorage.getItem("alumno")); // array entre comilla
           agregaDatos.innerHTML = `<h4> Datos Agregados  al Storage ...... </h4>
           <p><strong> Nombre: </strong>${valorInputNombre.toUpperCase()}</p> 
           <p><strong> Apellidos: </strong>${valorInputApellido.toUpperCase()}</p>
           <p><strong> Teléfono: </strong>${valorInputelefono}</p>
           <p><strong> Correo: </strong>${valorInputEmail}</p>
           <hr>
            `;

            localStorage.setItem("IngresoAlumnos", JSON.stringify(alumno));
         }
  }  
  
  inputNombre.value = "";
  inputPaterno.value = "";
  inputelefono.value = "";
  inputEmail.value = "";
  ShowDown.innerText = "";

  //ShowDown.innerText = "";

});

//Guardar  *******************************

btnDespliegue.addEventListener("click", (e) => {

  e.preventDefault();


  const obtieneDatos = JSON.parse(localStorage.getItem('IngresoAlumnos')); // Se llama con el nombre de la Key
    if ( obtieneDatos === undefined || obtieneDatos === null || obtieneDatos === ''  ) {
      //alert("dise que esa vacio es nulo o undefine");
      mesageSinExito();
     }else {
      //alert("deberi mostrar datos lla funcon mostrando datos");
      mostrandoDatos();
    }
});

//Funcion realiza mensajes sin exito

function mesageSinExito() {
  
  inputNombre.value = "";
  inputPaterno.value = "";
  inputelefono.value = "";
  inputEmail.value = "";
  ShowDown.innerText = "";

  agregaDatos.innerHTML = `
   <p><strong></strong></p>
   <p><strong></strong></p>
   <p><strong></strong></p>
   <p><strong></strong></p>
   `
   //tituloCambiado.innerText = "No existen Datos o Storage es Null"
   resultado.innerText = "No existen Datos o Storage es Null o Campos Vacios"

   temporizadorDeRetraso(); //tarda tres segundos y borra el mensaje
}


//Limpiar id="btnLimpiar"  *******************************
btnCleaner.addEventListener("click", (e) => {
  e.preventDefault();
  inputNombre.value = "";
  inputPaterno.value = "";
  inputelefono.value = "";
  inputEmail.value = "";
  ShowDown.innerText = "";
  
  //alumno = [];

  agregaDatos.innerHTML = `
   <p><strong></strong></p>
   <p><strong></strong></p>
   <p><strong></strong></p>
   <p><strong></strong></p>
   <hr>`

  //localStorage.clear();

});

function temporizadorDeRetraso() {
  identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
  resultado.innerText = "";
  inputNombre.focus();
}


//Despliega datos Guardados en el Storage
function mostrandoDatos() {          

  inputNombre.value = "";
  inputPaterno.value = "";
  inputelefono.value = "";
  inputEmail.value = "";
  ShowDown.innerText = "";

  
  agregaDatos.innerHTML = `
  <p><strong></strong></p>
  <p><strong></strong></p>
  <p><strong></strong></p>
  <p><strong></strong></p>
  <hr>`


  const ConvertirObjeto = JSON.parse(localStorage.getItem('IngresoAlumnos')); // Se llama con el nombre de la Key
  //console.log(ConvertirObjeto);

  ConvertirObjeto.forEach((ConvertirObjetos) => {
    agregaDatos.innerHTML += `<h4> Datos del Alumno: </h4>
    <p><strong> Nombre: </strong>${ConvertirObjetos.nombre.toUpperCase()}</p> 
    <p><strong> Apellidos: </strong>${ConvertirObjetos.Apellidos.toUpperCase()}</p>
    <p><strong> Teléfono: </strong>${ConvertirObjetos.Telefono}</p>
    <p><strong> Correo: </strong>${ConvertirObjetos.correo}</p>
    <hr>`;
  });

  //inputNombre.focus();
};
