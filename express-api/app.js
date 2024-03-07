const express = require("./node_modules/express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
