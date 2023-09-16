// Uso: funciones, Ciclos : for, While, Condicionales
// declaracion de variables.
//Iteraador que agrega datos a un arreglo, borra, despliega datos, busca, filtra por diferentes categorias

//Definicion Variales
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
      

