const db = require("../models");

//create main Model
const Deals = db.deals;

//2. get all deals list

const getAllDeals = async (req, res) => {
  let allDeals = await Deals.findAll();
  res.status(200).send(allDeals);
};

module.exports = { getAllDeals };
