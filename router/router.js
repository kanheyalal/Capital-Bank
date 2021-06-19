const express = require("express");

const router = express.Router();

require("../db/conn");
const User = require("../model/User");
const History = require("../model/History");

router.post("/senddata", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      money: req.body.money,
      account: req.body.account,
    });
    const data = await user.save();
    res.send(data);
  } catch (err) {
    res.send("something went wrong error");
  }
});

router.post("/sendhistory", async (req, res) => {
  try {
    const { sender, reciever, amount, date, time } = req.body;
    const history = new History({
      sender: sender,
      reciever: reciever,
      amount: amount,
      date: date,
      time: time,
    });
    const data = await history.save();
    res.send(data);
  } catch (err) {
    res.send("something went wrong error");
  }
});

router.get("/getHistory", async (req, res) => {
  try {
    const data = await History.find();
    res.send(data);
  } catch (err) {
    res.send("something went wrong error");
  }
});

router.get("/getData", async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    console.log("something went wrong error");
  }
});

router.get("/getData/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await User.findById({ _id: userId });
    res.send(data);
  } catch (err) {
    console.log("something went wrong error");
  }
});

router.get("/getname/:userId", async (req, res) => {
  try {
    console.log("sending data");
    const userId = req.params.userId;
    const data = await User.find({}, { name: 1 });
    res.send(data);
  } catch (err) {
    console.log("something went wrong error");
  }
});

router.patch("/updateMoney/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await User.findByIdAndUpdate(
      userId,
      { $set: { money: req.body.updatedMoney } },
      { new: true }
    );
    res.send(data);
  } catch (err) {
    console.log("something went wrong error");
  }
});

module.exports = router;
