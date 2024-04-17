const db = require("./../index.js");

const modify_note = async (req, res) => {
  try {
    const tran_id = req.body.id;
    const filter = { user_id: tran_id };
    console.log(req.body.note);
    const note_to_save = {
      $set: {
        note: req.body.note,
      },
    };
    const result = await db
      .db("BankingDB")
      .collection("transaction")
      .updateOne(filter, note_to_save);
    res.status(200).json({ message: "Data(notes) stored successfully" });
  } catch (error) {
    console.error("Error in modify_fileds.js:", error);
    res.status(500).json({ error: "Failed to change notes." });
  }
};

module.exports = {
  modify_note,
};
