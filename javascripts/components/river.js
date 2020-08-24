let bearArray = []

const buildABear = () => {
    $('#bearButton').on('click', () => {
      bearArray.push({name: bearName.value, image: bearImage.value});
      bearCards();
    })
  }

const bearCards = () => {
  const lastBear = (bearArray.length - 1)
bearArray.forEach((bear, i) => {
  if (i === lastBear) {
  $('#bearCards').append(
    `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${bear.image}" alt="A Bear">
        <div class="card-body">
        <p class="card-text">${bear.name}</p>
        <div id="attempt-date--${i}"></div>
        <button class="attempt--${i}"><i class="fas fa-fish"></i></button>
        <button class="success--${i}"><i class="fas fa-check"></i></button>
        <p class="running-tally">Caught fish:<div id="running-tally--${i}"></div></p>
      </div>
    </div>`
  )
  attemptCheck(i);
  successCheck(i);
  }
})
}

const attemptCheck = (i) => {
  $(`.attempt--${i}`).on('click', () => {
    $(`#attempt-date--${i}`).append(
      `<p>Attempted to catch fish on ${Date()}</p>`
    )
  })
}

const successCheck = (i) => {
  let runningTotal = 0

  $(`.success--${i}`).on('click', () => {
    $(`#attempt-date--${i}`).append(
      `<p>Successfully caught fish on ${Date()}</p>`
    )
    runningTotal++
    $(`#running-tally--${i}`).html(
      `${runningTotal}`
    )
  })
}



export {buildABear}