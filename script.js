const CONTENIDO = {
  subtituloHero: "Edición especial // 19 años",
  tituloHero: "Feliz cumpleaños, Vico",

  cartaPrincipal: `Hoy cumplís 19 y, aunque estemos lejos, no quería dejar pasar este día sin armarte un rincón propio para vos.

Admiro muchísimo la forma en que creás: cómo hacés hablar a tus dibujos con cada trazo y color, y cómo lograste que el clarinete sea una extensión de lo que sentís. Tenés una sensibilidad única que se nota en todo lo que hacés.

Gracias por cada charla, por las risas a la distancia y por dejarme conocerte así. Ojalá este nuevo año te encuentre llena de música, ideas nuevas y momentos lindos. Muy feliz cumple, Vico.`,

  cartas: [
    {
      etiqueta: "Sobre 01",
      titulo: "Abrí cuando me extrañes",
      texto: `Si abriste esto es porque la distancia hoy pesa un poco más. Acordate de que los kilómetros son solo un detalle temporal frente a todo lo que compartimos.

Mandame un audio, una foto de lo que estés haciendo o simplemente un mensaje. Siempre tengo tiempo para vos.`
    },
    {
      etiqueta: "Sobre 02",
      titulo: "Abrí cuando tengas bloqueo artístico",
      texto: `Respirá hondo y soltá la presión de que cada línea tenga que salir perfecta a la primera. Hasta tus bocetos más rápidos tienen una expresividad increíble.

Dibujá algo solo para vos, sin pensar en mostrarlo. Tu estilo ya tiene magia propia.`
    },
    {
      etiqueta: "Sobre 03",
      titulo: "Abrí cuando ensayes clarinete",
      texto: `Ojalá pudiera estar sentado ahí escuchándote tocar en vivo en lugar de imaginármelo a la distancia.

Disfrutá cada nota y acordate de lo mucho que creciste con la música. Cuando nos veamos, me debés un concierto privado.`
    },
    {
      etiqueta: "Sobre 04",
      titulo: "Abrí cuando quieras saber qué siento por vos",
      texto: `No hace falta dar muchas vueltas: me encantás. Me gusta tu cabeza, tu arte, tu forma de ser y cómo hacés que cualquier día común sea mejor cuando hablamos.

Qué suerte haberme cruzado con vos.`
    }
  ],

  pistaPlaylist: "Pista: leé en vertical la primera letra de cada canción.",
  spotifyPlaylistId: "3SMMNkujCXikvBJFZKeJqu"
};

function renderizarParrafos(contenedor, texto) {
  contenedor.innerHTML = "";
  texto.split("\n\n").forEach((bloque) => {
    const p = document.createElement("p");
    p.textContent = bloque.trim();
    contenedor.appendChild(p);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("subtitulo-hero").textContent = CONTENIDO.subtituloHero;
  document.getElementById("titulo-hero").textContent = CONTENIDO.tituloHero;
  renderizarParrafos(document.getElementById("carta-principal"), CONTENIDO.cartaPrincipal);

  const grid = document.getElementById("sobres-grid");
  const modal = document.getElementById("modal");

  CONTENIDO.cartas.forEach((carta) => {
    const btn = document.createElement("button");
    btn.className = "sobre";
    btn.innerHTML = `<small>${carta.etiqueta}</small><strong>${carta.titulo}</strong>`;
    btn.addEventListener("click", () => {
      document.getElementById("modal-etiqueta").textContent = carta.etiqueta;
      document.getElementById("modal-titulo").textContent = carta.titulo;
      renderizarParrafos(document.getElementById("modal-texto"), carta.texto);
      modal.classList.add("activo");
    });
    grid.appendChild(btn);
  });

  document.getElementById("cerrar-modal").addEventListener("click", () => {
    modal.classList.remove("activo");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("activo");
  });

  document.getElementById("pista-playlist").textContent = CONTENIDO.pistaPlaylist;
  document.getElementById("spotify-frame").src =
    `https://open.spotify.com/embed/playlist/${CONTENIDO.spotifyPlaylistId}?utm_source=generator&theme=0`;
});
