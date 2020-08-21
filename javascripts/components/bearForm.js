import {bearCards} from './river.js'

let bearArray = []

const buildABear = () => {
    $('#bearButton').on('click', () => {
      bearArray.push({name: bearName.value, image: bearImage.value})
      bearCards(bearArray);
      console.log(bearArray);
    })
  }

const bearForm = () => {
    $('#bearForm').html(
        `<form>
    <div class="form-group">
      <label for="bearName">Bear Name</label>
      <input type="text" class="form-control" id="bearName" aria-describedby="emailHelp" placeholder="Enter Bear Name">
    </div>
    <div class="form-group">
      <label for="bearImage">Bear Image</label>
      <input type="text" class="form-control" id="bearImage" placeholder="Enter Bear Image URL">
    </div>
    <input type="button" class="btn btn-primary" value="Submit" id="bearButton"></input>
  </form>`
    )
}

export {bearForm, buildABear};