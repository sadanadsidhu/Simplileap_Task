const dealsController = require("../controllers/dealsController.js");
const dealsrouter = require("express").Router();

//userrouter
dealsrouter.get("/listofdeals", dealsController.getAllDeals);

module.exports = dealsrouter;
