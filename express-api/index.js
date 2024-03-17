const app = require("./app.js");
const mongodb = require("./node_modules/mongodb");
//const transactionDAO = require("./dao/transactionDAO.js");

const MongoClient = mongodb.MongoClien;

const mongo_username = process.env.C1_Mongodb_username;
const mongo_password = process.env.C1_Mongodb_password_2;
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.6ibfiyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const port = 5000;

MongoClient.connect(uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParse: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
