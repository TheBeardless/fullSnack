const form = `
<form id="new-user">
  <h1>Registration form</h1>
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Please enter username" class="form-control">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Please enter password" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;

const registerForm = () => {
  $(document).on("submit", "#new-user", async (event) => {
    // console.log(`Event: = ${JSON.stringify(event)}`);
    console.log("Event: ", event);
    event.preventDefault();

    const requestBody = {
      username: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };
    // console.log(`Form data: ${formData}`);
    console.log("RequestBody: ", requestBody);
    const response = await $.ajax({
      type: "POST",
      url: "http://localhost:3000/users/register",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    console.log("response", response);
  });

  return form;
};

export default registerForm;
