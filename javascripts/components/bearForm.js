const bearForm = () => {
    $('#bearForm').html(
        `<form>
    <div class="form-group">
      <label for="bearName" class="form--text">Bear Name</label>
      <input type="text" class="form-control" id="bearName" aria-describedby="emailHelp" placeholder="Enter Bear Name">
    </div>
    <div class="form-group">
      <label for="bearImage" class="form--text">Bear Image</label>
      <input type="text" class="form-control" id="bearImage" placeholder="Enter Bear Image URL">
    </div>
    <input type="button" class="btn btn-dark" value="Submit" id="bearButton"></input>
  </form>`
    )
}

export {bearForm};