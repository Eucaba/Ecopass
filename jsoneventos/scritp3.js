/*const jsonEvents = `{
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
        "imagen": "./images/1.Recompensa.jpg"
    },
    {
        "id": 3,
        "nombre": "Visita a Museo de Arte",
        "fecha": "2023-06-21",
        "hora": "11:00",
        "descripcion": "Explora el mundo del arte en nuestro museo local. Una recompensa por tu asistencia a la charla sobre sostenibilidad.",
        "ubicacion": "Museo de Arte",
        "imagen": "./images/1.Recompensa.jpg"
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
}`*/
  document.addEventListener("DOMContentLoaded", function () {

    
  const div1 = document.getElementById("newestevents")

  ///utilizamos el fetch (función) para pedir la información a la url
  fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events')
    .then((res) => res.json())   
    .then (events => {    
  
  //proporcionamos el JSON pegándolo directamente
  //const events = JSON.parse(jsonEvents)
  //parseamos el JSON a un array de eventos
    console.log(events)
  
  //puntos de anclaje de los elementos que se aurogenerarán para mostrar los eventos

  let referencia = events.length - 2
  //punto de corte para diferenciar eventos antiguos o actuales y nuevos
  //la PK tiene AI, por lo que los 2 últimos elementos del array siempre serán evento actual y próximo evento
  //importante: para que funcione, los próximos eventos se añaden 1 cada vez (si cargamos todos los eventos del año a la vez, esta lógica no sirve)
  //Cuando se realiza el actual pasa a previous, el siguiente a actual, y se añade el siguiente próximo evento

  for (let index = 0; index < events.length; index++) {
    let evento = events[index]

    let card = document.createElement('div')
    card.classList.add("card-events")
    let cardContent = `
       <div class="card mb-3 card-events" style="max-width: 540px;">
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
      
    } 
    
  }  

})

})

document.addEventListener("DOMContentLoaded", function(){
  fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events')
    .then((res) => res.json())   
    .then (events => {    
  const div2 = document.getElementById("previousevents")
  let referencia = events.length - 2

  //crear lista no ordenada
  
  const slickTrack = document.getElementById("slick-track")
  console.log(slickTrack)

  for (let index = 0; index < referencia; index++) {
    let evento = events[index]
    let card = document.createElement('div')
    let divslick = document.createElement('div')
    divslick.classList.add('slick')
    
    let divcard=`
    
      <div class="centro">
          <picture>
              <img src="${evento.imagen}" alt="">
          </picture>
          <h4>${evento.nombre}</h4>
      </div>
    </div>
    `
    divslick.innerHTML = card
    divslick.innerHTML = divcard
    slickTrack.appendChild(divslick)
  }  

  const slick = document.getElementsByClassName("slick")
  console.log(slick)
  const slickW = slick[0].offsetWidth
  console.log(slickW)

  const botonPrev = document.getElementById("prev")
  const botonNext = document.getElementById("next")
  const track = document.getElementById("slick-track")
  const list = document.getElementById("list")

  botonPrev.onclick = () => moveBy(1);
  botonNext.onclick = () => moveBy(2);

  function moveBy(value) {
    const trackW = track.offsetWidth;
    const listW = list.offsetWidth
    let leftPosition = parseFloat(track.style.left) || 0
  
    if (value === 2){
      leftPosition = Math.min(leftPosition + slickW, 0)
    }else if (value === 1){
      leftPosition = Math.max(leftPosition - slickW, -(trackW - listW))
    }
    
    track.style.left = `${leftPosition}px`
  }


})
})


