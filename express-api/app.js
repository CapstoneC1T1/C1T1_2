const express = require("./node_modules/express");
const cors = require("./node_modules/cors");
const transactions = require("./api/transactions.route.js");

const app = express();

app.use(cors());
//be able to send and receive json
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});


app.use("/api/v1/transactions", transactions);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//export default app;
module.exports = app;
