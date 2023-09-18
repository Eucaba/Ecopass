document.addEventListener("DOMContentLoaded", function () {

  const div1 = document.getElementById("newestevents")
  const div12 = document.getElementById("upcomingevent")

  ///utilizamos el fetch (función) para pedir la información a la url
  fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events?categoria=recompensa')
    .then((res) => res.json())
    .then(events => {

      //proporcionamos el JSON pegándolo directamente
      //const events = JSON.parse(jsonEvents)
      //parseamos el JSON a un array de eventos 

      //recorrer el array y generar las tarjetas
      for (let index = 0; index < events.length; index++) {
        let evento = events[index]

        let card = document.createElement('div')
        card.classList.add("card-events")

        //se agrega el evento actual al div correspondiente
        if (evento.tipo == "evento actual") {
          let cardContent = `
        <a href="./recompensa.html">
          <div class="card mb-3 card-events" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${evento.imagen}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"><strong> ${evento.nombre} </strong></h5>
                <p class="card-text">${evento.descripcion}</p>
                <p class="card-text"><small class="text-body-secondary">${evento.ubicacion}</small></p>
                <p class="card-text"><small class="text-body-secondary">${evento.fecha}</small></p>
              </div>
            </div>
          </div>
        </div>
       </a>
       `
          card.innerHTML = cardContent
          div1.appendChild(card)
        }

        if (evento.tipo == "evento proximo") {
          let cardContent = `
        <div class="card mb-3 card-events" style="max-width: 540px;">
         <div class="row g-0">
           <div class="col-md-4">
             <img src="${evento.imagen}" class="img-fluid rounded-start" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title"><strong> ${evento.nombre} </strong></h5>
               <p class="card-text">${evento.descripcion}</p>
               <p class="card-text"><small class="text-body-secondary">${evento.ubicacion}</small></p>
               <p class="card-text"><small class="text-body-secondary">${evento.fecha}</small></p>
             </div>
           </div>
         </div>
       </div>
       `
          card.innerHTML = cardContent
          div12.appendChild(card)
        }
      }
    })

})

document.addEventListener("DOMContentLoaded", function () {

  const div1 = document.getElementById("newestevents")
  const div12 = document.getElementById("upcomingevent")

  ///utilizamos el fetch (función) para pedir la información a la url
  fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events')
    .then((res) => res.json())
    .then(events => {

      //carrousel
      const div2 = document.getElementById("previousevents")

      //crear lista no ordenada

      const slickTrack = document.getElementById("slick-track")

      for (let index = 0; index < events.length; index++) {
        let evento = events[index]
        let card = document.createElement('div')
        let divslick = document.createElement('div')
        divslick.classList.add('slick')
        //se genera cada tarjeta
        let divcard = `
    
      <div class="centro">
          <picture>
              <img src="${evento.imagen}" alt="">
          </picture>
          <h4><strong>${evento.nombre}</strong></h4>
      </div>
    </div>
    `
        divslick.innerHTML = card
        divslick.innerHTML = divcard

        if (evento.tipo == "evento anterior") {
          slickTrack.appendChild(divslick)
        }
      }

      const slick = document.getElementsByClassName("slick")
      const slickW = slick[0].offsetWidth

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

        if (value === 2) {
          leftPosition = Math.min(leftPosition + slickW, 0)
        } else if (value === 1) {
          leftPosition = Math.max(leftPosition - slickW, -(trackW - listW))
        }

        track.style.left = `${leftPosition}px`
      }
    })
})