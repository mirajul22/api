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

const register = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    if (!name || !password || !email) {
      throw new Error("please enter all fields");
    }

    const resData = new Model({
      name,
      password,
      email,
    });
    console.log("register pass =>", resData);
    const registerData = resData.save();
    res.send(JSON.stringify({ ...registerData }));
    res.end();
  } catch (err) {
    res.send(err.message);
    res.end();
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const loginData = await Model.findOne(
    {
      email: email || "",
      password: password || "",
    },
    "-password"
  );
  res.send(JSON.stringify(loginData));
  res.end();
};

module.exports = { mult, single, Store, register, login };
