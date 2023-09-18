fetch('https://018123df-1a58-480a-a0b1-74bef2cb6e76.mock.pstmn.io/api/events?tipo=evento%20actual&categoria=recompensa')
.then((res) => res.json())
.then(eventos => {

const evento = eventos[0]

let titleanddate = document.createElement('div')
let titleContentHTML = `<h1>${evento.nombre} ${evento.fecha}</h1>`
titleanddate.innerHTML = titleContentHTML
document.getElementById('titlesection').appendChild(titleanddate)

let info = document.createElement('div')
let infoContentHTML = `<p>Fecha: ${evento.fecha}</p>
    <p>Hora: ${evento.hora}</p>
    <p>Ubicación: ${evento.ubicacion}</p>`
info.innerHTML = infoContentHTML
document.getElementById('rewarddetails').appendChild(info)

let teaser = document.createElement('div')
let teaserContentHTML =`<p>${evento.descripcion}</p>`
teaser.innerHTML = teaserContentHTML
document.getElementById('rewarddescription').appendChild(teaser)

let image = document.createElement('div')
let imageContentHTML =`<img src="${evento.imagen}" alt="">`
image.innerHTML = imageContentHTML
document.getElementById('rewardfoto').appendChild(image)

})