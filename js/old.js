//ESTE JS ESTA COMO BACKUP DE CODIGO VIEJO NO ES FUNCIONAL. SOLO ES PARA AYUDA PERSONAL.



//En este bloque creamos/declaramos una clase. Se declaran tambien los datos que tendra
class Alumno {
    constructor(nombre, apellido, calificacion1, calificacion2, calificacion3, calificacionFinal) { //aqui se inicializa una nueva instancia
        this.nombre = nombre;
        this.apellido = apellido;
        this.calificacion1 = calificacion1;
        this.calificacion2 = calificacion2;
        this.calificacion3 = calificacion3;
        this.calificacionFinal = calificacionFinal;
    }
}

//creamos una funcion para ingresar los datos que el objeto leera y guardara para crearse
function crearAlumno() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let calificacion1 = Number(prompt("Ingrese la calificacion del primer parcial"));//especificamos que el dato tendra que ser interpretado como numero
    let calificacion2 = Number(prompt("Ingrese la calificacion del segundo parcial"));
    let calificacion3 = Number(prompt("Ingrese la calificacion del tercer parcial"));
    let calificacionFinal = (calificacion1 + calificacion2 + calificacion3) / 3;
    calificacionFinal = calificacionFinal.toFixed(2); // Limitamos los decimales a dos
    if (calificacionFinal < 6) { //Condicional para mostrar el resultado del alumno dependiendo del calculo de la calificacion final
        alert(nombre + " " + apellido + "\nEl alumno reprobo con una calificacion de " + calificacionFinal);
    } else {
        alert(nombre + " " + apellido + "\nEl alumno aprobo con una calificacion de " + calificacionFinal);
    }
    let alumno = new Alumno(nombre, apellido, calificacion1, calificacion2, calificacion3, calificacionFinal);//Creamos un nuevo alumno con los datos inresados por el usuario
    return alumno;//finalizamos la ejecucion de la funcion y retornamos el valor del nuevo alumno para que se vuelva a ejecutar la funcion en referencia al while de abajo
}

let alumnosArray = [];

//En este bloque usamos un ciclo para indicar la cantidad de alumnos y en consecuencia aumentar la cantidad de objetos a crear
//En mas detalle, estamos diciendole que se ejecute la funcion crearAlumno hasta que se cumpla la condicion y es por ello que se crean nuevos objetos
let i = 1;
while (i < 2) {
    let alumno = crearAlumno();//llamamos a crearAlumno para obtener un nuevo objeto
    console.log(alumno);//imprimimos en consola el objeto
    alumnosArray.push(alumno);//hasta este punto la funcion crearAlumno ya creo 1 alumno y le decimos que haga push al array creado en la lina 32
    i++//esta debe ser la ultima linea para poder indicarle al loop que aumentara el valor de i hasta que la condicion sea el limite
}

console.log(alumnosArray);// para mostrar el array creado en consola
console.log(alumnosArray.length);// mostramos el largo del array




const agregarAlumno = () => {
    const nombreAlumno = nombre1.value;
    alumnos.push(nombreAlumno);
    nombre1.value = "";
    mostrarAlumnos();
};

const eliminarAlumno = (index) => {
    alumnos.splice(index, 1);
    mostrarAlumnos();
};

const mostrarAlumnos = () => {
    lista.innerHTML = "";
    alumnos.forEach((nombreAlumno, index) => {
        lista.innerHTML += `
            <li>
                <span>${nombreAlumno}</span>
                <button class="btn btn-primary btn-eliminar" onclick="eliminarAlumno(${index})">Eliminar</button>
            </li>
        `;
    });
};

btn.addEventListener("click", agregarAlumno);