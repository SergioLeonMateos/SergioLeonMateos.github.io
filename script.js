// script.js
const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
});

// Array de proyectos
const proyectos = [
  {
    nombre: "Proyecto CRUD",
    descripcion: "Página web CRUD realizada durante mis prácticas en NTT DATA. Incluye gestión completa de usuarios y tareas.",
    imagen: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=400",
    url: "https://github.com/SergioLeonMateos/ProyectoCRUD-NTT"
  },
  {
    nombre: "Segundo Proyecto",
    descripcion: "Segundo proyecto.",
    imagen: "images/proyecto2.jpg",
    url: "https://github.com/sergioleonmateos/app-tareas"
  }
  // Puedes añadir más objetos con tus proyectos aquí
];

function cargarProyectos() {
  const contenedor = document.getElementById("contenedor-proyectos");
  proyectos.forEach(proyecto => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-proyecto";

    tarjeta.innerHTML = `
      <img src="${proyecto.imagen}" alt="Imagen del proyecto ${proyecto.nombre}">
      <div class="contenido">
        <h3>${proyecto.nombre}</h3>
        <p>${proyecto.descripcion}</p>
        <a href="${proyecto.url}" target="_blank" rel="noopener noreferrer">Ver proyecto</a>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });
}

document.addEventListener("DOMContentLoaded", cargarProyectos);