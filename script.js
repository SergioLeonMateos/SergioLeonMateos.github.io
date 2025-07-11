const btn = document.getElementById("theme-toggle");


btn.addEventListener("click", () => {
  const modoOscuroActivo = document.body.classList.toggle("modo-oscuro");
  
  btn.setAttribute("aria-pressed", modoOscuroActivo);
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
    nombre: "CatalogoApp",
    descripcion: "Segundo proyecto realizado en el curso de OpenWebinars. Aplicación web para gestionar un catálogo de productos.",
    imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    url: "https://github.com/sergioleonmateos/CatalogoApp"
  }
  //... Proximos proyectos se pueden añadir aquí
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
