const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const messageRoute = require("./routes/message.routes");

app.use(cors());
app.use(express.json());
app.use("/users", userRoute);
app.use("/messages", messageRoute);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

