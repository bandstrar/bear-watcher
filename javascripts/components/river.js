let bearArray = []

const buildABear = () => {
    $('#bearButton').on('click', () => {
      bearArray.push({name: bearName.value, image: bearImage.value});
      $('#bearCards').empty();
      bearCards();
    })
  }

const bearCards = () => {
bearArray.forEach((bear, i) => {
  $('#bearCards').append(
    `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${bear.image}" alt="A Bear">
        <div class="card-body">
        <p class="card-text">${bear.name}</p>
        <div id="attempt-date--${i}"></div>
        <button class="attempt--${i}"><i class="fas fa-fish"></i></button>
        <button class="success--${i}"><i class="fas fa-check"></i></button>
      </div>
    </div>`
  )
  attemptCheck(i);
})
}

const attemptCheck = (i) => {
  $(`.attempt--${i}`).on('click', () => {
    $(`#attempt-date--${i}`).append(
      Date()
    )
  })
}



export {buildABear}