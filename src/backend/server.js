const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const env = require("dotenv").config({ path: "../../.env" });
const Saved_Jobs = require("./models/Saved_jobs");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = process.env.DATABASE_STRING;

// connects our back end code with the database
mongoose.connect(dbRoute, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getData", (req, res) => {
  Saved_Jobs.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Saved_Jobs.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.post("/putData", (req, res) => {
  let obj = new Saved_Jobs();
  const { data } = req.body;

  if (!data) {
    return res.json({
      success: false,
      error: "INVALID INPUTS",
    });
  }

  obj.data = data;

  obj.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const session = require("express-session");
// const cors = require("cors");
// const path = require("path");
// const env = require("dotenv").config({ path: "./.env" });
// const saved_jobs = require("./models/saved_jobs");

// mongoose.connect(process.env.DATABASE_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// let database = mongoose.connection;

// //check connection
// database.once("open", () => {
//   console.log("Connected to mongoDB");
// });

// //check for DB errors
// database.on("error", (err) => {
//   console.log(err);
// });

// // Express Session Middleware
// app.use(session({ secret: "keyboard cat", rolling: false, cookie: { sameSite: false, secure: false, maxAge: 4 * 60 * 60 * 1000 }, resave: false, saveUninitialized: false }));

// // public folder
// app.use(express.static(path.join(__dirname, "public")));

// app.route("/getData").get(function (req, res) {
//   saved_jobs.find({}, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log(result);
//       res.send(result);
//     }
//   });
// });

// app.listen(5000, () => console.log(`Node server listening on port ${5000}!`));
