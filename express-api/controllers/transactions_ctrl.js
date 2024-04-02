const db = require("./../index.js");
const tran_model = require("./../models/transaction_schema.js");

const tran_category = async (req, res) => {
  try {
    const data = req.body;
	console.log(data);
    console.log("data: " + JSON.stringify(data));
    const result = await db.db("BankingDB")
      .collection("transactions")
	  .insertOne(data);
	  /**
      .insertOne(data, (err, data) => {
        if (err) return console.log("1" + err);
        console.log("2");
        res.send("seved to db: " + data);
      });
	  **/
	  console.log(result);

    const new_data = new tran_model(data);
	console.log(data.category, new_data);
	console.log("1");
    await new_data.save();
    //await tran_model.create(data);

    res.status(200).json({ message: "Data stored successfully" });
  } catch (error) {
    console.error("Error storing data: ", error);
    res.status(500).json({ error: "Failed to store data" });
  }
};

module.exports = {
  tran_category,
};
