window.addEventListener("DOMContentLoaded", function (){

  const jsonEvents = `{
    "eventos": [
      {
          "id": 101,
          "nombre": "Concierto en la Playa",
          "fecha": "2023-08-18",
          "hora": "19:00",
          "descripcion": "Disfruta de un concierto al aire libre en la playa con bandas locales. Una recompensa por tu esfuerzo en la limpieza de la playa.",
          "ubicacion": "Playa del Sol",
          "imagen": "./images/1.Recompensa.jpg"
      },
      {
          "id": 102,
          "nombre": "Noche de Cine al Aire Libre",
          "fecha": "2023-09-05",
          "hora": "20:30",
          "descripcion": "Relájate y disfruta de una noche de cine bajo las estrellas en el parque. Una recompensa por tu participación en la reforestación.",
          "ubicacion": "Parque Natural Verde",
          "imagen": "./images/2.Recompensa.jpg"
      },
      {
          "id": 103,
          "nombre": "Visita a Museo de Arte",
          "fecha": "2023-09-25",
          "hora": "11:00",
          "descripcion": "Explora el mundo del arte en nuestro museo local. Una recompensa por tu asistencia a la charla sobre sostenibilidad.",
          "ubicacion": "Museo de Arte",
          "imagen": "./images/3.Recompensa.jpg"
      },
      {
          "id": 104,
          "nombre": "Exposición de Fotografía",
          "fecha": "2023-10-15",
          "hora": "14:00",
          "descripcion": "Sumérgete en el mundo de la fotografía en nuestra exposición local. Una recompensa por tu participación en la ciclovía recreativa.",
          "ubicacion": "Galería de Arte",
          "imagen": "./images/4.Recompensa.jpg"
      },
      {
          "id": 105,
          "nombre": "Obra de Teatro Local",
          "fecha": "2023-11-10",
          "hora": "19:30",
          "descripcion": "Disfruta de una emocionante obra de teatro local en nuestro teatro comunitario. Una recompensa por tu participación en el taller de reciclaje creativo.",
          "ubicacion": "Teatro Comunitario",
          "imagen": "./images/5.Recompensa.jpg"
      },
      {
          "id": 106,
          "nombre": "Concierto de Jazz",
          "fecha": "2023-12-03",
          "hora": "18:00",
          "descripcion": "Disfruta de una noche de música jazz en nuestro evento especial. Una recompensa por tu participación en el Día del Reciclaje.",
          "ubicacion": "Centro de Artes Escénicas",
          "imagen": "./images/6.Recompensa.jpg"
      }]
  }`

  //proporcionamos el JSON pegándolo directamente
  const div = document.getElementById("actualevent")
  //punto de anclaje de los elementos que se aurogenerarán para mostrar los eventos
  const events = JSON.parse(jsonEvents)
  //parseamos el JSON a un array de eventos

  const eventoActual = events.eventos[4]
  console.log(eventoActual)

 let card = document.createElement('div')
 let cardContent = `
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${eventoActual.imagen}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"> ${eventoActual.nombre} </h5>
          <p class="card-text">${eventoActual.descripcion}</p>
          <p class="card-text"><small class="text-body-secondary">${eventoActual.ubicacion}</small></p>
          <p class="card-text"><small class="text-body-secondary">${eventoActual.fecha}</small></p>
        </div>
      </div>
    </div>
  </div>
  `
  card.innerHTML = cardContent
  div.appendChild(card)


  
  
  
  
  })