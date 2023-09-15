

document.addEventListener("DOMContentLoaded", function () {
    const div1 = document.getElementById("newestevents")
    const div2 = document.getElementById("galery")
    

    ///utilizamos el fetch (función) para pedir la información a la url
    fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events')
        .then((res) => res.json())   
        .then (events => {    
    
    //proporcionamos el JSON pegándolo directamente
    //const events = JSON.parse(jsonEvents)
    //parseamos el JSON a un array de eventos 
    
    //recorrer el array y generar las tarjetas

        


    for (let index = 0; index < events.length; index++) {
        let id = 1
        let evento = events[index]
        if (evento.id == id) {

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
                    <h2 class="card-title"><strong> ${evento.nombre} </strong></h2>
                    <h3 class="card-text">${evento.ubicacion}</small></h3>
                    <h3 class="card-text">${evento.fecha}</small></h3>
                  </div>
                </div>
              </div>
            </div>
            `
          card.innerHTML = cardContent

          div1.appendChild(card)

          if (evento["imagenes-evento"]) {
            // Obtener el array de rutas de imágenes directamente
            const imagenesEvento = evento["imagenes-evento"];
            // Recorrer y mostrar cada imagen en la consola
            imagenesEvento.forEach(imagen => {
                console.log("Imagen del evento:", imagen);
                let cardGalery = document.createElement('div')
                cardGalery.classList.add("card-galery")
                let cardContentGalery = `
                <div class="card mb-3 card-events-galery" id="cardg" style="max-width: 540px;">
                  <div class="row g-0">
                    <div class="col-md-12", id="div-image">
                      <img src="${imagen}" class="image-galery" alt="...">
                    </div>
                  </div>
                </div>
                `
                cardGalery.innerHTML = cardContentGalery
                div2.appendChild(cardGalery);
            });
        }

        
        
        
        
        
                            
          
          
          
             
        } 

           
        
    
        
        //se agrega el evento actual al div correspondiente
        

    }  
    
    /*    
    
        if (evento.id == id) {
          div2.appendChild(card)
             
        } 
    
        
        
    
    
      }  */
  

    })
})