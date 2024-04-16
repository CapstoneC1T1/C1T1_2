const express = require("./node_modules/express");
const cors = require("./node_modules/cors");
//const transactions = require("./api/transactions.route.js");
const bodyParser = require("./node_modules/body-parser");
const router = express.Router();
const category_ctrl = require("./controllers/transactions_ctrl.js");
const get_data = require("./controllers/get_data_ctrl.js");

const app = express();

app.use(cors());
//be able to send and receive json
//app.use(express.json());
app.use(bodyParser.json());

/*
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});
*/

//app.use("/api/v1", transactions);
//app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use("/api/v1/transactions", category_ctrl.tran_category);
app.use('/api/v1/data', get_data.get_tran_data);
/**
app.use("/api/v1/transactions", (req, res) => {
console.log("body: " + JSON.stringify(req.body));
}

);
**/
/**
app.use("/api/v1/", (req, res) => {
  res.send("hey");
});
**/


//export default app;
module.exports = app;
