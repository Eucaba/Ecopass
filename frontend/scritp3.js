window.addEventListener("DOMContentLoaded", function () {

  const jsonEvents = `{
    "eventos": [
      {
          "id": 1,
          "nombre": "Concierto en la Playa",
          "fecha": "2023-04-23",
          "hora": "19:00",
          "descripcion": "Disfruta de un concierto al aire libre en la playa con bandas locales. Una recompensa por tu esfuerzo en la limpieza de la playa.",
          "ubicacion": "Playa del Sol",
          "imagen": "./images/1.Recompensa.jpg"
      },
      {
          "id": 2,
          "nombre": "Noche de Cine al Aire Libre",
          "fecha": "2023-05-17",
          "hora": "20:30",
          "descripcion": "Relájate y disfruta de una noche de cine bajo las estrellas en el parque. Una recompensa por tu participación en la reforestación.",
          "ubicacion": "Parque Natural Verde",
          "imagen": "./images/2.Recompensa.jpg"
      },
      {
          "id": 3,
          "nombre": "Visita a Museo de Arte",
          "fecha": "2023-06-21",
          "hora": "11:00",
          "descripcion": "Explora el mundo del arte en nuestro museo local. Una recompensa por tu asistencia a la charla sobre sostenibilidad.",
          "ubicacion": "Museo de Arte",
          "imagen": "./images/3.Recompensa.jpg"
      },
      {
          "id": 4,
          "nombre": "Exposición de Fotografía",
          "fecha": "2023-07-19",
          "hora": "14:00",
          "descripcion": "Sumérgete en el mundo de la fotografía en nuestra exposición local. Una recompensa por tu participación en la ciclovía recreativa.",
          "ubicacion": "Galería de Arte",
          "imagen": "./images/4.Recompensa.jpg"
      },
      {
          "id": 5,
          "nombre": "Obra de Teatro Local",
          "fecha": "2023-09-25",
          "hora": "19:30",
          "descripcion": "Disfruta de una emocionante obra de teatro local en nuestro teatro comunitario. Una recompensa por tu participación en el taller de reciclaje creativo.",
          "ubicacion": "Teatro Comunitario",
          "imagen": "./images/5.Recompensa.jpg"
      },
      {
          "id": 6,
          "nombre": "Concierto de Jazz",
          "fecha": "2023-10-15",
          "hora": "18:00",
          "descripcion": "Disfruta de una noche de música jazz en nuestro evento especial. Una recompensa por tu participación en el Día del Reciclaje.",
          "ubicacion": "Centro de Artes Escénicas",
          "imagen": "./images/6.Recompensa.jpg"
      }]
  }`
  //proporcionamos el JSON pegándolo directamente
  const events = JSON.parse(jsonEvents)
  //parseamos el JSON a un array de eventos

  const div1 = document.getElementById("newestevents")
  const div2 = document.getElementById("previousevents")
  //puntos de anclaje de los elementos que se aurogenerarán para mostrar los eventos

  let referencia = events.eventos.length - 2
  //punto de corte para diferenciar eventos antiguos o actuales y nuevos
  //la PK tiene AI, por lo que los 2 últimos elementos del array siempre serán evento actual y próximo evento
  //importante: para que funcione, los próximos eventos se añaden 1 cada vez (si cargamos todos los eventos del año a la vez, esta lógica no sirve)
  //Cuando se realiza el actual pasa a previous, el siguiente a actual, y se añade el siguiente próximo evento

  for (let index = 0; index < events.eventos.length; index++) {
    let evento = events.eventos[index]

    let card = document.createElement('div')
    let cardContent = `
       <div class="card mb-3" style="max-width: 540px;">
         <div class="row g-0">
           <div class="col-md-4">
             <img src="${evento.imagen}" class="img-fluid rounded-start" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title"> ${evento.nombre} </h5>
               <p class="card-text">${evento.descripcion}</p>
               <p class="card-text"><small class="text-body-secondary">${evento.ubicacion}</small></p>
               <p class="card-text"><small class="text-body-secondary">${evento.fecha}</small></p>
             </div>
           </div>
         </div>
       </div>
       `
    card.innerHTML = cardContent

    if (index >= referencia) {
      div1.appendChild(card)
    } else {
      div2.appendChild(card)
    }

  }

})