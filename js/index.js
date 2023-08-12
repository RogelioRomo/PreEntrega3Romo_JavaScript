let alumnos = []; //array para almacenar los objetos que se crean mas adelante
let form = document.querySelector("form"); //un queryselector para el form que no he utilizado
let nombre = document.getElementById("nombre-alumno"); //la referencia del DOM para tomar el valor de ese ID
let apellido = document.getElementById("apellido-alumno"); //la referencia del DOM para tomar el valor de ese ID
let primerParcial = document.getElementById("primer-parcial"); //la referencia del DOM para tomar el valor de ese ID
let segundoParcial = document.getElementById("segundo-parcial"); //la referencia del DOM para tomar el valor de ese ID
let tercerParcial = document.getElementById("tercer-parcial"); //la referencia del DOM para tomar el valor de ese ID
let btn = document.getElementById("btn-submit"); //la referencia del DOM para tomar el valor de ese ID
let lista = document.getElementById("list"); //la referencia del DOM para tomar el valor de ese ID


class Alumno {//En este bloque creamos/declaramos una clase/objeto. Se declaran tambien los datos que tendra
    constructor(nombre, apellido, calificacion1, calificacion2, calificacion3, calificacionFinal) { //aqui se inicializa una nueva instancia
        this.nombre = nombre;
        this.apellido = apellido;
        this.calificacion1 = calificacion1;
        this.calificacion2 = calificacion2;
        this.calificacion3 = calificacion3;
        this.calificacionFinal = calificacionFinal;
    }
}

function crearAlumno(e){//creamos una funcion para ingresar los datos que el objeto leera y guardara para crearse
    e.preventDefault();
    let name = nombre.value;
    let lastname = apellido.value;
    let firstScore = Number(primerParcial.value); //importante especificar siempre que sea un numero. Recordar que fallo el valor del promedio por esta razon
    let secondScore = Number(segundoParcial.value);
    let thirdScore = Number(tercerParcial.value);
    let average = (firstScore + secondScore + thirdScore)/3;//se calcula el promedio
    average = average.toFixed(2); //se limitan los decimales a 2
    nombre.value = ""; //para limpiar el imput en el DOM y que no se queden lo valores depues de darle submit
    apellido.value = "";
    primerParcial.value = "";
    segundoParcial.value = "";
    tercerParcial.value = "";
    let alumno = new Alumno (name, lastname, firstScore, secondScore, thirdScore, average)//Creamos un nuevo alumno con los datos inresados por el usuario
    console.log(alumno);//para mostrar los valores del array en consola. Solo como referencia para el coder
    alumnos.push(alumno);//mandamos los valores al array 'alumnos' declarado en la linea #1
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    return alumno;//finalizamos la ejecucion de la funcion y retornamos el valor del nuevo alumno para que se vuelva a ejecutar la funcion
}

function crearTabla() {//funcion para creacion de una tabla
    let tabla = document.getElementById("alumnos-tabla");//referencia del ID de la tabla que se populara en el HTML

    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }

    let filaPrincipal = document.createElement("tr");//creamos la fila principal de la tabla con los strings que queremos que tenga
    filaPrincipal.innerHTML = "<th>Nombre</th><th>Apellido</th><th>Parcial 1</th><th>Parcial 2</th><th>Parcial 3</th><th>Calificación Final</th>";
    tabla.appendChild(filaPrincipal);

    alumnos.forEach(alumno => {//creamos dependiendo del input del usuario las filas con los datos ingresados en la tabla. Aqui hay un error revisar despues.
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${alumno.nombre}</td><td>${alumno.apellido}</td><td>${alumno.calificacion1}</td><td>${alumno.calificacion2}</td><td>${alumno.calificacion3}</td><td>${alumno.calificacionFinal}</td>`;
        tabla.appendChild(fila);
    });
}

btn.addEventListener("click", function(e) {
    let alumno = crearAlumno(e);
    crearTabla();
});

btn.addEventListener("click", crearAlumno);//boton de submit para que se ejecuten lo del form y que se cree la tabla en consecuencia