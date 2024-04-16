const db = require("./../index.js");

const get_tran_data = async (req, res) => {
  try {
  //console.log(req.body);
    const tran_id = req.body.id;
	//console.log(tran_id);
    const data = await db.db("BankingDB").collection("transactions").findOne({
      user_id: tran_id,
    });
	console.log(data);
	res.json(data);
	/**
    for await (const doc of data) {
      console.log(doc);
      res.json(doc);
    }
	**/
  } catch (error) {
    console.error("Error in get_data_ctrl.js file:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

module.exports = {
  get_tran_data,
};
