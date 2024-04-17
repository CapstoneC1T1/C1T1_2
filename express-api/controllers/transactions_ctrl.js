const db = require("./../index.js");
//const tran_model = require("./../models/transaction_schema.js");

const tran_save = async (req, res) => {
  try {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const date = `${month}/${day}/${year}`;
    const time = `${hours}:${minutes}`;
    //find the maximum user_id
    let max_id;
    const result_sort = await db
      .db("BankingDB")
      .collection("transaction")
      .find({})
      .sort({ user_id: -1 })
      .limit(1)
      .toArray();
    /**
  function(err, docs) {
if (err) {
console.log('Error finding document:', err);
return;
}
console.log(docs[0].user_id);
if (docs[0] == null) max_id = 1;
else{
console.log('Document with maximum value:', docs[0]);
max_id = docs[0].user_id + 1;
}
console.log(max_id);
  });
  **/
    if (result_sort[0] == null) max_id = 1;
    else {
      max_id = result_sort[0].user_id + 1;
    }
    //console.log(result_sort, max_id);
    const data_json = req.body;
    //const data_json = JSON.parse(data);
    data_json.user_id = max_id;
    data_json.date = date;
    data_json.time = time;
    data_json.category = "default";
    data_json.note = "";
    //data_json = JSON.stringify(data_json);
    //console.log(data);
    //console.log("data: " + JSON.stringify(data));
    const result = await db
      .db("BankingDB")
      .collection("transaction")
      .insertOne(data_json);
    /**
      .insertOne(data, (err, data) => {
        if (err) return console.log("1" + err);
        console.log("2");
        res.send("seved to db: " + data);
      });
	  **/
    console.log(result);

    //const new_data = new tran_model(data);
    //console.log(data.category, new_data);
    //console.log("1");
    //await new_data.save();
    //await tran_model.create(data);

    res.status(200).json({ message: "Data stored successfully" });
  } catch (error) {
    console.error("Error storing data: ", error);
    res.status(500).json({ error: "Failed to store data" });
  }
};

const get_tran_list = async (req, res) => {
  try {
    const result_get_list = await db
      .db("BankingDB")
      .collection("transaction")
      .find()
      .sort({ user_id: -1 })
      .limit(10)
      .toArray();
    /**
.then(docs => {
res.json(docs);
console.log(docs);
});
**/
    //console.log(result_get_list);
    res.json(result_get_list);
  } catch (error) {
    console.log("get_tran_list in transactions_ctrl.js:", error);
    res.status(500).json({ error: "Failed to get the transaction list" });
  }
};
module.exports = {
  tran_save,

  get_tran_list,
};
