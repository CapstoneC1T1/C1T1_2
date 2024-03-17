const tran_model = require("./../models/transaction_schema.js");

const tran_category = async (req, res) => {
  try {
    const data = req.body;
	
	const new_data = new tran_model({category: data.category});
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
