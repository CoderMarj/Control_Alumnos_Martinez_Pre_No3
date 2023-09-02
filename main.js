// Uso: funciones, Ciclos : for, While, Condicionales
// declaracion de variables.
//Iterador que promedia las calificaciones de alumnos
//Algo sencillo pero que incluye lo solicicitado

//Definicion Variales
let acumulador = 0;
let promedio = 0;
let bandera = true;

//Saludo cordial
let mensaje = 'SUMULADOR QUE GENERA EL PROMEDIO DE CALIFICACIONES DE UN ESTUDIANTE EN BASE A LA CANTIDAD DE MATERIAS A PROMEDIAR';
alert(mensaje);

//Inicio

while (bandera) {
  let noMaterias = parseInt(prompt("Ingresar Cuantas materias va a Promediar, EN UN RANGO DE 2 a 10 Materias)",0));
  
  if (noMaterias > 1 && noMaterias < 12 && noMaterias != Number.NaN){
         for (let i = 1; i <= noMaterias; i+=1) {
            let calificaciones = parseInt(prompt("Ingresar Calificación entre 1 y 10",0));
            acumulador = calificaciones + acumulador;
          }
          if (acumulador === Number.NaN || isNaN(acumulador)){
            alert("Datos Erroneos, Verifique... ");
          }else{
              promedio = acumulador / noMaterias;
              alert("Tu Promedio General fue de: " + promedio);

             if (promedio <= 5) {
                 (function () {
                  alert("Debe seguir estudiando para mejorar... ");
                  })();
                 } else {
                 (function () {
                    alert(
                    " F E L I C I T A C I O N E S  .... Usted Tiene Calificaciòn Aprobatoria"
                    );
                  })();
               }
           }

  } else {
    alert("Rango Inexistente en la cantidad de Materias a promediar o no Ingreso un Numero... ");
  }

  let Continuar = confirm(
    "Si Desea Continuar Para Promediar Otro Alumno Oprima (Aceptar), terminar oprima (Cancelar)"
  );

  if (Continuar) {
    alert("Continuamos.... ");
    acumulador = 0;
    promedio = 0;
  } else {
    bandera = false;
  }
}

const titulo = document.getElementById("titulo");
titulo.innerText = "Proceso Terminado";


