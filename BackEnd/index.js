const express = require("express");
const cors = require("cors");

const app = express();

var corOptions = {
  origin: "http://localhost:3000",
};

// middleware;
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const DealsRouter = require("./src/routes/dealsRouter.js");
app.use("/deals", DealsRouter);

// error
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  return res.status(err.statusCode).json({
    status: "Failed",
    statusCode: err.statusCode,
    message: err.message,
    stack: err.stack,
  });
});

const PORT = process.env.SERVER_PORT || 8082;
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
