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


const entradasBlog = [
  {
    id: 1,
    titulo: "De DAW a DAM: un cambio de rumbo en mi vida",
    fecha: "16/09/2025",
    resumen: "Mi experiencia y motivos para cambiar de DAW a DAM.",
    contenido: `
      <h3>De DAW a DAM: un cambio de rumbo en mi vida</h3>
      <span class="blog-fecha">16/09/2025</span>
      <p>Durante ocho años trabajé como mozo de almacén. Era un empleo estable, que me permitía conciliar mi vida personal con la laboral, pero con el tiempo empecé a pensar que quería otra cosa para mi futuro. Con 31 años decidí dar el paso y volver a estudiar, aunque eso significara cambiar mi rutina, viajar cada día desde Cáceres a Navalmoral de la Mata para ir al instituto y enfrentarme de nuevo a las aulas después de tanto tiempo.</p>
      <p>Cuando hice la matrícula, mi primera opción fue DAM (Desarrollo de Aplicaciones Multiplataforma). Sin embargo, solo quedaba plaza en DAW (Desarrollo de Aplicaciones Web), así que empecé por ahí. El primer curso es común, lo que me permitió avanzar sin perder el rumbo, pero siempre tuve claro hacia dónde quería ir. Este año por fin he conseguido el traslado a DAM.</p>
      <h4>¿Por qué elegí DAM?</h4>
      <ul>
        <li><strong>Proyección laboral:</strong> en la formación dual del año pasado participé en cursos con NTT Data, y ahí vi que el perfil de DAM tiene mucha salida en el sector tecnológico.</li>
        <li><strong>Más posibilidades:</strong> DAM abre la puerta a trabajar en proyectos que no se limitan solo a la web, sino que también abarcan aplicaciones en distintos dispositivos.</li>
        <li><strong>Motivación personal:</strong> me interesa más este camino porque siento que encaja mejor con lo que me gusta y con el futuro profesional que quiero construir.</li>
      </ul>
      <h4>Una decisión que va más allá de los estudios</h4>
      <p>Para mí no es solo cambiar de DAW a DAM. Es haber decidido dar un giro a mi vida, dejar atrás la comodidad de lo que ya conocía y apostar por un futuro con más oportunidades. No ha sido fácil, pero cada paso confirma que tomé la decisión correcta.</p>
      <button id="volver-blog">Volver</button>
    `
  }
  // Puedes añadir más entradas aquí
];

function cargarBlogTarjetas() {
  const contenedor = document.getElementById("blog-entradas");
  contenedor.innerHTML = "";
  entradasBlog.forEach(entrada => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "blog-tarjeta";
    tarjeta.dataset.id = entrada.id;
    tarjeta.innerHTML = `
      <h3>${entrada.titulo}</h3>
      <span class="blog-fecha">${entrada.fecha}</span>
      <p>${entrada.resumen}</p>
      <button class="ver-mas">Ver más</button>
    `;
    contenedor.appendChild(tarjeta);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarBlogTarjetas();

  document.getElementById("blog-entradas").addEventListener("click", function(e) {
    if (e.target.classList.contains("ver-mas")) {
      const id = e.target.parentElement.dataset.id;
      const entrada = entradasBlog.find(ent => ent.id == id);
      document.getElementById("blog-entradas").style.display = "none";
      const detalle = document.getElementById("blog-detalle");
      detalle.innerHTML = entrada.contenido;
      detalle.style.display = "block";
    }
  });

  document.getElementById("blog-detalle").addEventListener("click", function(e) {
    if (e.target.id === "volver-blog") {
      document.getElementById("blog-detalle").style.display = "none";
      document.getElementById("blog-entradas").style.display = "block";
    }
  });
});
