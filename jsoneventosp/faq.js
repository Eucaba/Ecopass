window.addEventListener("DOMContentLoaded", function () {
    const jsonQuestions = `{
      "preguntas": [
        {
          "id": 1,
          "pregunta": "¿Cuál es la edad de participación en esta iniciativa?",
          "respuesta": "La edad de participación en nuestra iniciativa está comprendida entre los 14 y los 18 años. Esta decisión se ha tomado con el objetivo de promover la sensibilidad ecológica, fomentar la socialización entre jóvenes y facilitar el acceso a la cultura para adolescentes. Es importante destacar que aquellos menores de 16 años requerirán la autorización de un tutor legal para participar en nuestras actividades."
      },
      {
          "id": 2,
          "pregunta": "¿Cómo garantizan la seguridad y la edad de los participantes?",
          "respuesta": "La seguridad y la verificación de la edad de nuestros participantes son aspectos fundamentales en nuestra iniciativa. Para participar en cualquiera de nuestras actividades, es imprescindible estar registrado en nuestro sistema. Durante el proceso de registro, solicitamos la presentación del DNI u otro documento de identificación válido para corroborar la edad de los interesados. En el caso de actividades presenciales, siempre supervisadas por adultos, también será necesario presentar el DNI en la entrada del evento para asegurar que los participantes cumplen con los requisitos de edad."
      },
      {
          "id": 3,
          "pregunta": "¿Las actividades tienen algún coste?",
          "respuesta": "Todas nuestras actividades son totalmente gratuitas. Queremos que nuestros jóvenes puedan acceder a la cultura y disfrutar de experiencias enriquecedoras sin que ello implique un desembolso económico. Además, hemos establecido bases de participación que permiten a los jóvenes conseguir bonificaciones, como entradas gratuitas a eventos o descuentos, para facilitar aún más su acceso a la cultura."
      },
      {
          "id": 4,
          "pregunta": "¿Quién organiza esta iniciativa?",
          "respuesta": "Esta iniciativa está auspiciada por el ayuntamiento de Barcelona y la Diputación Provincial de Barcelona. Contamos con la colaboración de patrocinadores, tanto del ámbito privado como público, que comparten nuestro interés en promover el acceso a la cultura y fomentar la conciencia ecológica entre los jóvenes."
      },
      {
          "id": 5,
          "pregunta": "¿Cómo puedo apuntarme a las actividades?",
          "respuesta": "Para participar en nuestras actividades, es necesario ser un usuario registrado y cumplir con los requisitos de edad establecidos. Una vez registrado y logueado en nuestra web, podrás acceder al apartado Evento del Mes. Desde allí, simplemente haz clic en el botón ¡Apúntate! y reserva tu plaza para la actividad que desees. En el mismo apartado de la web, encontrarás las bases de participación específicas para cada evento o actividad, donde se detallan más información y posibles bonificaciones."
      },
      {
          "id": 6,
          "pregunta": "¿Puedo proponer nuevas actividades?",
          "respuesta": "¡Por supuesto! Valoramos enormemente las sugerencias y comentarios de nuestros jóvenes participantes. Si tienes alguna idea o propuesta de actividad, simplemente haz clic en Contacta con nosotros y envíanos todos tus comentarios y sugerencias. Estamos abiertos a nuevas iniciativas que enriquezcan nuestra oferta cultural y fomenten la conciencia ecológica."
      }
    ]
  }`
    //incorporamos el JSON directamente
    const questions = JSON.parse(jsonQuestions)
    console.log(questions)
    //lo parseamos a un array
    const div = document.getElementById("FAQ")
    //punto de anclaje para añadir las cajitas de las preguntas/respuestas

    for (let index = 0; index < questions.preguntas.length; index++) {

        let pregunta = questions.preguntas[index]

        let box = document.createElement('div')
        let boxContent = `
            <div class="box">
            <p class="question">${pregunta.pregunta}</p>
            <p class="answer">${pregunta.respuesta}</p>
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