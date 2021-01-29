const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (request, response) =>
  response.send("This is the backend server")
);

app.listen(port, () =>
  console.log(`fruit app listening at http://localhost:${port}`)
);
