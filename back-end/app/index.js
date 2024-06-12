const express = require("express");
const cors = require("cors");

const router = require("./routes");

const app = express();
app.use(cors());
const port = 3001;

app.use(router);

app.listen(port, () => console.log(`Magic happens on port ${port}`));

// catch all route
app.use((req, res, next) => {
  res.status(404).send("Sorry, we could not find that!");
});
