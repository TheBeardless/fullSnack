import { $where } from "../../../server/src/models/SnackModel";

const form = `
<form id='form-snack'>
<h1>Snack form</h1>
  <div class="form-group">
  <div class="form-group">
    <label for="snackId">Snack Id</label>
    <input type="text" class="form-control" id="snackId" placeholder="Enter snack Id" name="snackId">
  </div>
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter snack name" name="name">
  </div>
  <div class="form-group">
    <label for="color">Snack Rating (out of 10)</label>
    <input type="text" class="form-control" id="color" placeholder="Enter snack rating out of 10" name="color">
  </div>
  <select class="form-select" aria-label="Default select example">
    <option selected>Do you like this snack?</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
</select>
  <button type="button" id="create-snack"  class="btn btn-primary">Create Snack</button>
  <button  type="button" id="update-snack"  class="btn btn-primary">Update Snack</button>
  <button  type="button" id="delete-snack"  class="btn btn-primary">Delete Snack</button>
  </form>
`;

const snackForm = () => {
  $(document).on("submit", "form#form-snack", (e) => {
    e.preventDefault();
    console.log($("#name").val());
    console.log("Data Entered");
  });
  return form;
};

export default snackForm;
