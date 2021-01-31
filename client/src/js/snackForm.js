import { $where } from "../../../server/src/models/SnackModel";

const form = `
<form id='form-snack'>
<h1>Snack form</h1>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter snack name" name="name">
  </div>
  <div class="form-group">
    <label for="color">Snack Rating</label>
    <input type="text" class="form-control" id="rating" placeholder="Enter snack rating out of 10" name="rating">
  </div>
  <button type="button" id="create-snack"  class="btn btn-primary">Create Snack</button>
  <button  type="button" id="update-snack"  class="btn btn-primary">Update Snack</button>
  <button  type="button" id="delete-snack"  class="btn btn-primary">Delete Snack</button>
  </form>
`;

const snackForm = () => {
  // Create - Event Listener
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
    window.alert("New product created");

    // TODO - install sweetAlert2
  });

  // finally, return the form
  return form;
};

export default snackForm;
