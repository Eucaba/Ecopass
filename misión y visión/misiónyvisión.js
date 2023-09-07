window.addEventListener("DOMContentLoaded", function () {
    const jsonMisionvision = `{
      "textos": [
        {
          "id": 1,
          "título": "Misión: Promover la Cultura y la Conciencia Ecológica en los Jóvenes",
          "info": "Nuestra misión en la Iniciativa para Jóvenes: Acceso a la Cultura y Conciencia Ecológica es brindar a los adolescentes entre 14 y 18 años la oportunidad de experimentar y cultivar su sensibilidad cultural y su conciencia ecológica. Buscamos crear un espacio donde los jóvenes puedan participar en actividades culturales enriquecedoras de manera gratuita, al tiempo que fomentamos una comprensión más profunda y respetuosa hacia el entorno que nos rodea. A través de una amplia gama de eventos y experiencias, aspiramos a cultivar la creatividad, el pensamiento crítico y la colaboración entre los jóvenes, al mismo tiempo que los inspiramos a desempeñar un papel activo en la preservación de nuestro planeta. Creemos que al empoderar a los jóvenes con acceso a la cultura y alentando la conciencia ecológica desde una edad temprana, estamos forjando líderes conscientes y responsables que darán forma a un futuro más sostenible y armonioso "
      },
      {
          "id": 2,
          "título": "Visión: Inspirando Jóvenes Ciudadanos del Mundo",
          "info": "Nuestra visión es crear un movimiento juvenil que trascienda las fronteras y las limitaciones, nutriendo a jóvenes ciudadanos del mundo que están profundamente arraigados en su propia cultura y sensibles a la diversidad cultural de los demás. Visualizamos una generación de jóvenes empoderados que se sienten conectados con el patrimonio cultural y natural de su entorno, al tiempo que reconocen su papel como guardianes de un planeta compartido. Imaginamos un futuro en el que los jóvenes, a través de su participación en nuestras actividades, desarrollen una comprensión intrínseca de la importancia de la cultura y la sostenibilidad. Esta comprensión no solo enriquecerá sus vidas personales, sino que también inspirará a otros y sentará las bases para una sociedad más consciente y armoniosa en las décadas venideras. En última instancia, nuestra visión es ver a estos jóvenes crecer y convertirse en líderes que promuevan la cultura, la conciencia ecológica y el entendimiento global en sus comunidades y más allá. Estamos comprometidos a ser catalizadores de este proceso, brindando oportunidades que nutran su crecimiento personal y contribuyan positivamente a la sociedad en su conjunto."
      }
    ]
  }`
    //incorporamos el JSON directamente
    const misionvision = JSON.parse(jsonMisionvision)
    console.log(misionvision)
    //lo parseamos a un array
    const div = document.getElementById("info")
    //punto de anclaje para añadir las cajitas de las preguntas/respuestas

    for (let index = 0; index < misionvision.textos.length; index++) {

        let texto = misionvision.textos[index]

        let box = document.createElement('div')
        let boxContent = `
            <div class="box">
            <p class="infotitle">${texto.título}</p>
            <p class="info">${texto.info}</p>
            </div>
            `
        box.innerHTML = boxContent
        div.appendChild(box)
        let divider = document.createElement('div')
        divider.className = 'divider'
        div.appendChild(divider)

    }
    //hacemos un bucle que recorre el array y va creando las cajas con las preguntas y respuestas


})