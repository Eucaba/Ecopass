window.addEventListener("DOMContentLoaded", function () {
    const jsonTérminosycond = `{
      "textos": [
        {
          "id": 1,
          "título": "1.1 - Bienvenido/a a la plataforma de la Iniciativa para Jóvenes: Acceso a la Cultura y Sensibilidad Ecológica.",
          "info": "1.2 - Antes de empezar a utilizar nuestros servicios, te pedimos que leas detenidamente estas Condiciones de Uso, ya que establecen los términos y condiciones bajo los cuales podrás acceder y participar en nuestras actividades. Al registrarte y utilizar nuestros servicios, aceptas cumplir con estas condiciones. Si no estás de acuerdo con alguna parte de estas condiciones, te recomendamos que no utilices nuestros servicios."
       },
       {
          "id": 2,
          "título": "2.1 - Para ser elegible para participar en nuestras actividades, debes tener entre 14 y 18 años. Los participantes menores de 16 años deberán contar con la autorización de un tutor legal para unirse a nuestras actividades.",
          "info": "2.2 - Para registrarte en nuestra plataforma, deberás proporcionar información precisa y veraz, incluido el número de DNI u otro documento de identificación válido que demuestre tu edad."
       },
       {
            "id": 3,
            "título": "3.1 - Tu seguridad es nuestra prioridad. Por lo tanto, para participar en actividades presenciales, deberás presentar tu DNI en la entrada del evento para confirmar tu edad.",
            "info": "3.2 - La veracidad de la información proporcionada durante el proceso de registro es crucial para garantizar la seguridad de todos los participantes y la adecuación de las actividades a la edad correspondiente."
        },
        {
            "id": 4,
            "título": "4.1 - Todas nuestras actividades son gratuitas para los participantes.",
            "info": "4.2 - Las bonificaciones que ofrecemos, como entradas gratuitas a eventos o descuentos, están basadas en las bases de participación y no implican ningún pago."
        },
        {
            "id": 5,
            "título": "5.1 - Visión: Inspirando Jóvenes Ciudadanos del MundEres responsable de cualquier actividad que ocurra bajo tu cuenta y de mantener la confidencialidad de tu información de acceso.No debes compartir tus credenciales de acceso ni permitir que otros utilicen tu cuenta.",
            "info": "5.2 - Te comprometes a utilizar la plataforma y participar en las actividades de manera respetuosa y considerada hacia los demás participantes y el personal organizador."
        },
        {
            "id": 6,
            "título": "6.1 - Todo el contenido proporcionado en nuestra plataforma, incluidas las FAQ, textos, imágenes y logotipos, están protegidos por derechos de propiedad intelectual y pertenecen a la Iniciativa para Jóvenes.No se permite la reproducción, distribución o modificación del contenido sin previa autorización por escrito.",
            "info": "6.2 - Al publicar contenido o fotos en la web, automáticamente autorizas a su utilización por parte de EcoPass para usos relacionados con la presente iniciativa."
        },
        {
            "id": 7,
            "título": "7.1 - Valoramos tus propuestas y comentarios para mejorar nuestras actividades. Puedes enviarnos tus sugerencias a X",
            "info": "7.2 - Al enviar propuestas, aceptas que la Iniciativa para Jóvenes puede utilizar y adaptar tus ideas para futuras actividades, sin generar ninguna obligación hacia ti."
        },
        {
            "id": 8,
            "título": "8.1 - Nos reservamos el derecho de modificar estas Condiciones de Uso en cualquier momento. Te notificaremos sobre cambios significativos antes de que entren en vigor.",
            "info": "8.2 - Si no cumples con estas condiciones, nos reservamos el derecho de suspender o terminar tu acceso a nuestras actividades y plataforma."
        },
        {
            "id": 9,
            "título": "Te agradecemos por unirte a la Iniciativa para Jóvenes: Acceso a la Cultura y Sensibilidad Ecológica. Esperamos que esta experiencia sea enriquecedora y contribuya a tu desarrollo personal y social. ",
            "info": "Si tienes alguna pregunta o comentario sobre estas Condiciones de Uso, no dudes en ponerte en contacto con nosotros a través de la sección correspondiente en nuestra plataforma."
        }
    ]
  }`
    //incorporamos el JSON directamente
    const terminosycond = JSON.parse(jsonTérminosycond)
    console.log(terminosycond)
    //lo parseamos a un array
    const div = document.getElementById("terminosycondiciones")
    //punto de anclaje para añadir las cajitas de las preguntas/respuestas

    for (let index = 0; index < terminosycond.textos.length; index++) {

        let texto = terminosycond.textos[index]

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
    //hacemos un bucle que recorre el array y va creando las cajas con las cláusulas


})