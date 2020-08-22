let bearArray = []

const buildABear = () => {
    $('#bearButton').on('click', () => {
      bearArray.push({name: bearName.value, image: bearImage.value});
      $('#bearCards').empty();
      bearCards();
    })
  }

// const bearCards = (bear) => {
//   for (let i = 0; i < bear.length; i++) {
//     $('#bearCards').append(
//           `<div class="card" style="width: 18rem;">
//           <img class="card-img-top" src="${bear[i].image}" alt="A Bear">
//           <div class="card-body">
//             <p class="card-text">${bear[i].name}</p>
//           </div>
//         </div>`
//     )
//   }
// }

const bearCards = () => {
bearArray.forEach(bear => {
  $('#bearCards').append(
    `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${bear.image}" alt="A Bear">
        <div class="card-body">
        <p class="card-text">${bear.name}</p>
      </div>
    </div>`
  )
})
}

export {buildABear}