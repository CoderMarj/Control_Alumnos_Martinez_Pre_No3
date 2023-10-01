// Uso: funciones, Ciclos : for, While, Condicionales
// declaracion de variables.
//Iteraador que agrega datos a un arreglo, borra, despliega datos, busca, filtra por diferentes categorias

//Definicion Variales
//const insertArreglo = [].concat(alumno);
//let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let pasaNombre, aceptaNombre, pasaCursada, aceptaCursada, pasaPuntos, aceptaPuntos; 

var insertArreglo =  [];
let bandera = true;
let  alumno = [];
let objetoMolde = {}
let mensaje = ' Antes de Realizar Cualquier Operacion, Favor de Ingresar los datos Solicitados, (NOMBRE del Alumno), (en puntuacion: puntos obtenidos del 1 al 100) y en lenguajes ejemplo: PYTHON, JAVASCRIPT, C++, C#, PHP, en los que se encuentran inscritos los alumnos';
alert(mensaje);

//**********************************************
//Seccion  de Agregar Alumnos
//**********************************************
const btnAgregar = document.querySelector("#agregar");
btnAgregar.addEventListener("click", () => {
  let bandera = true;
  while (bandera) {

    //se utilizan funciones para ingresar datos a un objeto (uso funcion y objeto)
    function elNombre() {
       pasaNombre = prompt("Ingrese nombre del alumno").toUpperCase();
       if (pasaNombre === NaN || pasaNombre === undefined || pasaNombre === null || pasaNombre === ''  ) {
        return "";
        }else { return pasaNombre };
    
     }

     function laCursada() {
          pasaCursada = prompt("Ingrese nombre de Cursada").toUpperCase();
          if (pasaCursada === NaN || pasaCursada === undefined || pasaCursada === null || pasaCursada === ''  ) {
            return "";
            }else { return pasaCursada };
          
      }

       function puntosObtenidos() {
             pasaPuntos = parseInt(prompt("Ingresar Puntos Obtenidos en la Cursada, EN UN RANGO DE 1 a 100 Materias"),0);
             if (pasaPuntos === NaN || pasaPuntos === undefined || pasaPuntos === null || pasaPuntos === ''  ) {
                 return 0;
                 }else { return Number(pasaPuntos) }
        }

       objetoMolde = {
         "nombre": elNombre(),
         "cursada": laCursada(),
         "Puntos": puntosObtenidos(),
        } //end Object

       if (objetoMolde === undefined || objetoMolde === null) {
          alert("Error en los datos ingresados, Verifique... ");

       }else{
        //let insertArreglo = ()=>{alumno.push(objetoMolde)};
        alumno.push(objetoMolde);
        //var insertArreglo = [].concat(alumno);
       
        
         let Continuar = confirm("Si Desea Ingresar otro alumno Click (Aceptar), Finalizar Click en (Cancelar)");

         if (Continuar) {
              alert("Continuamos.... ");
                bandera = true;
          } else {
                bandera = false;
          }
       }         
      
}  //end while
msage = "Alumnos Ingresados"
alumno.forEach((alumnos) => { msage += `\nNombre: ${alumnos.nombre}\n Lenguaje: ${alumnos.cursada}\n Puntos Obtenidos: ${alumnos.Puntos}\n`});
alert(msage)
});


//**********************************************
//Seccion  de Filtrado
//**********************************************
const btnFiltrar = document.querySelector("#filtrar");
btnFiltrar.addEventListener("click", () => {
  let bandera = true;
       expresion = prompt("Filtrar => Oprima: (1) Filtro Por Lenguaje, (2) Filtro Por Nombre, (3) Puntuacion MAYOR a 50, (4) Puntuacion MENOR 50");
              switch (expresion) {
                     case "1":
                            
                            let lenguaje = prompt("Escribir el Lenguanje a filtrar: JAVASCRIPT, PYTHON, C++, PHP, C#").toUpperCase();
                            const buscar = {cursada: lenguaje};
                           //const insertArreglo  = alumno.slice();
                            const insertArreglo = [].concat(alumno);
                            const filtro = insertArreglo.filter(filtrarLenguaje);      //elementos => elementos === );
                                    if ( filtro.length > 0 ){
                                            msage = "Resultados";
                                             filtro.forEach((alumnos) => { msage += `\nNombre: ${alumnos.nombre}\n Lenguaje: ${alumnos.cursada}\n Puntos Obtenidos: ${alumnos.Puntos}\n \n`});
                                              alert(msage);
                                     }else {
                                      alert("Dato Inexistente en el arreglo, O no se han agregado datos");
                                     }
                                     function filtrarLenguaje(insertArreglo){
                                      if(buscar.cursada){
                                          return insertArreglo.cursada === buscar.cursada;
                                      }
                                      return insertArreglo;
                                  }
                                  
                               break;

                      case "2":
                       
                      let nombres = prompt("Escribir el NOmbre a Filtrar").toUpperCase();
                      const buscarNombres = {nombre: nombres};
                     //const insertArreglo  = alumno.slice();                     
                      const insertArregloNombre = [].concat(alumno);                 
                      const filtroNombre = insertArregloNombre.filter(filtrarNombre);      //elementos => elementos === );
                              if ( filtroNombre.length > 0 ){
                                      msage = "Resultados";
                                      filtroNombre.forEach((alumnos) => { msage += `\nNombre: ${alumnos.nombre}\n Lenguaje: ${alumnos.cursada}\n Puntos Obtenidos: ${alumnos.Puntos}\n \n`});
                                        alert(msage);
                               }else {
                                      alert("Dato Inexistente en el arreglo, O no se han agregado datos");
                               }
                               function filtrarNombre(insertArregloNombre){
                                if(buscarNombres.nombre){
                                    return insertArregloNombre.nombre === buscarNombres.nombre;
                                }
                                return insertArregloNombre;
                            }
                            
                         break;

                      case "3":
                        alert("Alumnos con Puntuación MAYOR a 50 puntos");
                       //const insertArreglo  = alumno.slice();                     
                        const insertArregloPuntosMayor = [].concat(alumno);                 
                        const filtroPuntosMayor = insertArregloPuntosMayor.filter(elementos => elementos.Puntos > 50 );
                                if ( filtroPuntosMayor.length > 0) {
                                        msage = "Resultados";
                                        filtroPuntosMayor.forEach((alumnos) => { msage += `\nNombre: ${alumnos.nombre}\n Lenguaje: ${alumnos.cursada}\n Puntos Obtenidos: ${alumnos.Puntos}\n \n`});
                                          alert(msage);
                                 }else {
                                        alert("Dato Inexistente en el arreglo, O no se han agregado datos");
                                 };   
                           break;

                           case "4":
                            alert("Alumnos con Puntuación MENOR-IGUAL a 50 puntos");
                           //const insertArreglo  = alumno.slice();                     
                            const insertArregloPuntosMenor = [].concat(alumno);                 
                            const filtroPuntosMenor = insertArregloPuntosMenor.filter(elementos => elementos.Puntos <= 50 );
                                    if ( filtroPuntosMenor.length > 0) {
                                            msage = "Resultados";
                                            filtroPuntosMenor.forEach((alumnos) => { msage += `\nNombre: ${alumnos.nombre}\n Lenguaje: ${alumnos.cursada}\n Puntos Obtenidos: ${alumnos.Puntos}\n \n`});
                                              alert(msage);
                                     }else {
                                            alert("Dato Inexistente en el arreglo, O no se han agregado datos");
                                     };   
                               break;
                       default:
                             alert("Para realizar cualquier operacion en el MENU Oprima del [1..4]");
                             break;
               }
});


//**********************************************
//Despliega los elementos del array
//**********************************************

const btnMostrar = document.querySelector("#mostrar");
btnMostrar.addEventListener("click", () => {
if (alumno.length > 0  ){
  msage = "Resultados";
   alumno.forEach((alumnos) => { msage += `\nNombre: ${alumnos.nombre}\n Lenguaje: ${alumnos.cursada}\n Puntos Obtenidos: ${alumnos.Puntos}\n \n`});
    alert(msage);

}else {
  alert("Sin Resultados, Vaya al Boton Agregar alumnos");
}
});

//**********************************************
//FUNCION: Busca por el NOMBRE del alumno
//**********************************************

const btnBuscar = document.querySelector("#buscar");
btnBuscar.addEventListener("click", () => {
  const nombreAlumno = prompt("Escribir el Nombre del alumno").toUpperCase();
  const buscarAlumno = {nombre: nombreAlumno};
 //const insertArreglo  = alumno.slice();
  const consultaArreglo = [].concat(alumno);
  
  const busquedaMetodo = consultaArreglo.find(elementos => elementos.nombre === buscarAlumno.nombre );
  if ( busquedaMetodo ){
          alert(JSON.stringify(busquedaMetodo, null, 4));
   }else {
          alert("Dato Inexistente en el arreglo, O no se han agregado datos");
   };
  
});

//**********************************************
//FUNCION: Busca y elimina el dato solicitado dentro del array
//**********************************************

const btnBorrar = document.querySelector("#borrar");
btnBorrar.addEventListener("click", () => {
  const nom = prompt("Escribir el Nombre del alumno a Eliminar").toUpperCase();
  const bus = {nombre: nom};
 //const insertArreglo  = alumno.slice();
  //const consultaArreglo = [].concat(alumno);
  const indice = alumno.findIndex(elemento => elemento.nombre === bus.nombre );
   
    if (indice >= 0) {
      alert("Usted Borrarà el Siguiente Registro:");
       const borraElemento = alumno.find(elementos => elementos.nombre === bus.nombre );
       alert(JSON.stringify(borraElemento, null, 4));
       alumno.splice(indice, 1);
      }else {
             alert("Dato no Encontrado, NO se Eliminaron Datos");
      };
});
      

//agregar al carrito
/* dentro del formulario es la agregar al carrito
   <fieldset class="costos container">
           <Legend>Agregar Cursada al Carrito</Legend>   
             
             <select name="listaDesplegableLenguajes" id="listaDesplegableLenguajes"  tabindex="7">
                <optgroup>
                  <option disabled selected>- Elija una Opción -</option>
                  <option  value="JAVASCRIPT">JAVASCRIPT => $2,000.00</option>
                  <option value="PYTHON">PYTHON => $1,800.00</option>
                  <option value="PHP">PHP => $1,200.00</option>
                  <option value="JAVA">JAVA => $800.00</option>
                  <option value="SQL">SQL => $500.00</option>
                  <option value="C++">C++ => $700.0</option>
                  <option value="HTML">HTML => $900.00</option>
                  <option value="CSS">CSS => $1,200.00</option>
                  <option value="C#">C# => $3,000.00</option>
                </optgroup>
             </select>
             <div class="mb-3 row align-center">
              <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-1 mt-1" id="guardaCursadaPrecio" ><i class="fa-solid fa-cart-plus"></i></i></button><!--  <i class="bi bi-cart-plus" size="20"></i>-->
              </div>
            </div>
          </fieldset>
LIMPIANLAS ETIQUEATS
          document.querySelector('#li-1').innerHTML = "";
  document.querySelector('#li-2').innerHTML = ""; 
  document.querySelector('#li-3').innerHTML = "";
  document.querySelector('#li-4').innerHTML = "";
  document.querySelector('#li-5').innerHTML = "";
  document.querySelector('#li-6').innerHTML = "";
  document.querySelector('#li-7').innerHTML = "";
  document.querySelector('#li-8').innerHTML = "";
  document.querySelector('#li-9').innerHTML = "";

//Agregar al carrito *******************************
btnAgregar.addEventListener("click", (e) => {
  e.preventDefault();
  obtenerCursada();
});
const btnAgregar = document.querySelector("#guardaCursadaPrecio");

function obtenerCursada() {
  //e.preventDefault();
  let selectElement = document.querySelector('#listaDesplegableLenguajes');
  const output = selectElement.value;

         switch (output) {

                case "JAVASCRIPT":
                  document.querySelector('#li-1').innerHTML = output ;
                break;

                case "PYTHON":
                  document.querySelector('#li-2').innerHTML = output ; 
                break;

                case "PHP":
                  document.querySelector('#li-3').innerHTML = output ;
                break;

                case "JAVA":
                  document.querySelector('#li-4').innerHTML = output ;
                break;

                case "SQL":
                  document.querySelector('#li-5').innerHTML = output ;
                break;

                case "C++":
                  document.querySelector('#li-6').innerHTML = output ;
                break;

                case "HTML":
                  document.querySelector('#li-7').innerHTML = output ;
                break;

                case "CSS":
                  document.querySelector('#li-8').innerHTML = output ;
                break;

                case "C#":
                  document.querySelector('#li-9').innerHTML = output ;
                break;
       }
}; //final funcion Agregar al carrito


//TODO LO DE CCS
#precioCursada {
  list-style: none;
  list-style-position:inside;
}
#contenedor_mostrar{
  display:flex;
  border: 1px solid rgb(195, 195, 197);
  flex-direction: column;
  flex-wrap: wrap;
  /*justify-content: center; /*lo centra en el ccontenedor*/
  /*align-items:start;*/
  /*align-items:center;*/
  /*min-height: 50vh; /*altura minima del contenedor 80% dela ventana*/
  /*width: 100vh;
  /*max-width: 120px; /*su ancho maximo sera de 550px aun en pantalla grande*/
  /*background-color: rgb(255, 198, 243);
  /*border: 1px solid rgb(0, 38, 255);*/
  /*border-radius: 8%;
  
}

.precioCursda{
  margin-top: 2rem;
}*/



