const data = require("../Data.json");

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

module.exports = { mult, single };
