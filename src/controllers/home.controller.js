const data = require("../Data.json");
const Model = require("../models/Home.model");

const mult = async (req, res) => {
  res.send(JSON.stringify(data));
  res.end();
};

const single = async (req, res) => {
  const id = Number(req.params.id);
  const single = data.find((e) => e.id === id);
  res.send(JSON.stringify(single));
  res.end();
};

const Store = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  const saveData = new Model(
    {
      name,
      email,
      phone,
      subject,
      message,
    },
    "-__v"
  );
  const RealData = await saveData.save();
  res.send(JSON.stringify(RealData));
  res.end();
};

module.exports = { mult, single, Store };
