const form = `
<form id='form-snack'>
<h1>Snack form</h1>
  <div class="form-group">
  <div class="form-group">
  <label for="snackId">Snack Id (For update/delete)</label>
  <input type="text" class="form-control" id="snackId" placeholder="Enter snack ID" name="snackId">
</div>
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter snack name" name="name">
  </div>
  <div class="form-group">
    <label for="color">Snack Rating</label>
    <input type="text" class="form-control" id="rating" placeholder="Enter snack rating out of 10" name="rating">
  </div>
  <button type="button" id="create-snack"  class="btn btn-primary">Create Snack</button>
  <button  type="button" id="update-snack"  class="btn btn-warning">Update Snack</button>
  <button  type="button" id="delete-snack"  class="btn btn-danger">Delete Snack</button>
  </form>
`;

const snackForm = () => {
  ///////////// CREATE - Event Listener ///////////
  $(document).on("click", "#create-snack", async (e) => {
    e.preventDefault();
    console.log($("#name").val());
    console.log($("#rating").val());

    // extract form info
    const requestBody = {
      name: $("#name").val(),
      rating: $("#rating").val(),
    };
    console.log("requestBody: ", requestBody);

    // POST request
    const response = await $.ajax({
      type: "POST",
      url: "http://localhost:3000/snacks/new",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    console.log("response", response);
    window.alert("New snack created");

    // TODO - install sweetAlert2
  });

  ////////// UPDATE - Event Listener ////////////////
  // TODO - hide snack ID, on button click popup with ID input box, return ID for API.
  $(document).on("click", "#update-snack", async (e) => {
    e.preventDefault();
    console.log($("#name").val());
    console.log($("#rating").val());

    // extract form info
    const requestBody = {
      name: $("#name").val(),
      rating: $("#rating").val(),
    };
    console.log("requestBody: ", requestBody);

    // PATCH request
    const response = await $.ajax({
      type: "PATCH",
      url: `http://localhost:3000/snacks/update/${$("#snackId").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    console.log("response", response);
    window.alert(`${requestBody.name} updated!`);
  });

  ////////// DELETE - Event Listener ////////////////
  // TODO - hide snack ID, on button click popup with ID input box, return ID for API.

  $(document).on("click", "#delete-snack", async (e) => {
    e.preventDefault();
    console.log($("#name").val());
    console.log($("#rating").val());

    // extract form info
    const requestBody = {
      name: $("#name").val(),
      rating: $("#rating").val(),
    };
    console.log("requestBody: ", requestBody);

    // PATCH request
    const response = await $.ajax({
      type: "DELETE",
      url: `http://localhost:3000/snacks/delete/${$("#snackId").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    console.log("response", response);
    window.alert(`${requestBody.name} deleted!`);
  });

  // finally, return the form
  return form;
};

export default snackForm;
