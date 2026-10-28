"use strict";

// aqui se referenciaran los elementos del html

const contenedorUsuarios = document.querySelector("#usuarios");
const estado = document.querySelector("#estado");
const contador = document.querySelector("#contador");
const botonRecargar = document.querySelector("#btn-recargar-usuario");

// aqui estara la direccion de la API que vamos a estar consultando
const API_URL = "https://jsonplaceholder.typicode.com/users";

// aqui estara la funcion para consultar la API
async function cargarUsuarios() {
    // aqui se informa que estaremos realizando una peticion.
    estado.textContent = "Cargando usuarios...";
    estado.classList.remove("error");

    contador.textContent = "Consultando...";
    contenedorUsuarios.replaceChildren();

    // Aqui indicamos que se están cargando los datos.
    contenedorUsuarios.setAttribute("aria-busy", "true");

    botonRecargar.disabled = true;

    try{
        // Aqui el fetch solicita los datos a la api
        const respuesta = await fetch(API_URL);
        
        // El fetch no genera error error automaticamente
        // Cuando el servidor responde, por ejemplo con error 404!
        if(!respuesta.ok){
            throw new Error(
                `Error HTTP: ${respuesta.status}`
            );
        }
        // Pasar la respuesta json a datos en JavaScript
        const usuarios = await respuesta.json();

        // aqui se probara que la respuesta cuente con el formato indicado
        if(!Array.isArray(usuarios)){
            throw new Error("La respuesta no es una lista de usuarios.");
        }
        
        //Validar los datos que se necesitan mostrar.
        const usuariosValidados = usuarios.filter((usuario) => {
            return (
                usuario !== null &&
                typeof usuario === "object" &&
                typeof usuario.name === "string" &&
                typeof usuario.email === "string" &&
                usuario.address !== null &&
                typeof usuario.address === "object" &&
                typeof usuario.address.city === "string"
            );
        });

        if(usuariosValidados.length === 0){
            throw new Error("No se recibieron usuarios validados.");
        }

        // Generaremos una sola tarjeta por cada usuario que sea valido.
        // Creamos un fragmento para reunir las tarjetas antes de insertarlas.
        const fragmento = document.createDocumentFragment();

        usuariosValidados.forEach((usuario)=>{
             // Aquí creamos los elementos de las tarjetas
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("usuario-card");

            const numero = document.createElement("p");
            numero.classList.add("usuario-numero");
            numero.textContent = `USUARIO #${usuario.id}`;

            const nombre = document.createElement("h3");
            nombre.textContent = usuario.name;

            const correo = document.createElement("p");
            correo.classList.add("usuario-correo");

            const etiquetaCorreo = document.createElement("strong");
            etiquetaCorreo.textContent = "Correo electronico";

            const enlaceCorreo = document.createElement("a");
            enlaceCorreo.textContent = usuario.email;
            enlaceCorreo.href = `mailto:${usuario.email}`;

            correo.append(etiquetaCorreo, enlaceCorreo);

            const ciudad = document.createElement("p");
            ciudad.classList.add("usuario-ciudad");

            const estiquetaCiudad = document.createElement("strong");
            estiquetaCiudad.textContent = "Ciudad";

            const nombreCiudad = document.createElement("span");
            nombreCiudad.textContent = usuario.address.city;

            ciudad.append(estiquetaCiudad, nombreCiudad);

            // aqui pondremos los diferentes elementos dentro de la tarjeta.
            tarjeta.append(numero, nombre, correo, ciudad);

            // aqui se coloca la tarjeta en el html
            fragmento.append(tarjeta);
        });

        // Insertamos todas las tarjetas en el HTML.
        contenedorUsuarios.append(fragmento);

        contador.textContent = 
            `${usuariosValidados.length} usuarios encontrados`;

        estado.textContent = 
            "Datos cargados correctamente desde la API";
    }catch (error){
        //Aqui se capturan los errores o problemas de conexion o procesamiento.
        console.error("No se pudieron cargar los usuarios;", error);

        estado.textContent =
            "No fue posible cargar los usuarios." +
            "Comprueba la conexion e intenta de nuevo.";

        estado.classList.add("error");
        contador.textContent = "Error en la consulta";
    }finally{
        // Indicamos que la carga ha terminado.
        contenedorUsuarios.setAttribute("aria-busy", "false");

        // El botón vuelve a estar disponible tanto si funciona
        // la petición como si ocurre un error.
        botonRecargar.disabled = false; 
    }
}

// Aqui los eventos

// aqui permite consultar nuevamente la API con un clic.
botonRecargar.addEventListener("click", cargarUsuarios);

// aqui ejecutamos la consulta cuando se carga el scrip.
cargarUsuarios();