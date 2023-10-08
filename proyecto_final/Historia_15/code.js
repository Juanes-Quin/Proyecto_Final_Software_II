// Obtener los valores de los campos del formulario
const nombre = document.querySelector("#nombre").value;
const apellido = document.querySelector("#apellido").value;
const email = document.querySelector("#email").value;
const telefono = document.querySelector("#telefono").value;
const direccion = document.querySelector("#direccion").value;
const password = document.querySelector("#password").value;

// Crear un objeto task con la información del usuario
const task = {
  nombre,
  apellido,
  email,
  telefono,
  direccion,
  password
};

// Guardar la información 
function guardarTask(task) {
}

// Guardar la tarea
guardarTask(task);

// Mostrar un mensaje 
alert("Usuario registrado correctamente");