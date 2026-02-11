const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;

const SignupModel = require("./models/SignupModel.js");
const HoldingsModel = require("./models/HoldingsModel");
const PositionsModel = require("./models/PositionsModel");
const OrdersModel = require("./models/OrdersModel");
const WatchlistModel = require("./models/WatchlistModel");
const AnalyticsModel = require("./models/AnalyticsModel.js")
const wrapAsync = require("./utils/wrapAsync.js");

const app = express();

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

// 1. Tell Express to trust Render's proxy (CRITICAL for sessions to work on Render)
app.set("trust proxy", 1);

app.use(
  cors({
    origin: ["https://zerodha-clone-plum.vercel.app", "https://zerodha-clone-ql66.vercel.app"],
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(url);
}

//mongo session store
const store = MongoStore.create({
  mongoUrl: url,
  crypto: {
    secret: process.env.SESSION_SECRET,
  },
  touchAfter: 24 * 3600,
});

//express session
const sessionOp = {
  store, //mongo session store
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: "none", 
    maxAge: 7 * 24 * 60 * 60 * 1000, //one week
  },
};

app.use(session(sessionOp));

//middleware for login or sign if user login they won't be able to login
const loginPrevent = (req, res, next) => {
  if (req.session.userId) {
    return res.status(403).json({ message: "You are already logged in." });
  }
  next();
};

//signup
app.post(
  "/signup",
  loginPrevent,
  wrapAsync(async (req, res) => {
    const { username, age, email, password } = req.body;

    if (age < 18 || age > 120) {
      return res
        .status(400)
        .json({ message: "Please enter a valid age between 18 and 120." });
    }

    let existingUser = await SignupModel.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existingUser) {
      const message =
        existingUser.email === email
          ? "Email already registered"
          : "Username already taken";
      return res.status(400).send({ message });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let userInfo = new SignupModel({
      username: username,
      age: age,
      email: email,
      password: hashedPassword,
    });

    await userInfo.save();

    res.status(201).send({ message: "Success!" });
  }),
);

//update
app.put(
  "/update/:id",
  wrapAsync(async (req, res) => {
    const { age, email, username } = req.body;
    const { id } = req.params;

    if (age < 18 || age > 120) {
      return res
        .status(400)
        .json({ message: "Please enter a valid age between 18 and 120." });
    }

    let existingUser = await SignupModel.findOne({
      _id: { $ne: id },
      $or: [{ email: email }, { username: username }],
    });

    if (existingUser) {
      const message =
        existingUser.email === email
          ? "Email already registered"
          : "Username already taken";
      return res.status(400).send({ message });
    }

    const updatedUser = await SignupModel.findByIdAndUpdate(id, req.body);

    res.status(201).json({ message: "Success!" });
  }),
);

app.delete(
  "/delete/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;

    const deletedUser = await SignupModel.deleteOne({ _id: id });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ message: "Session clear failed" });

      res.clearCookie("connect.sid");
      return res.status(200).json({ message: "Account deleted successfully" });
    });
  }),
);

//login
app.post(
  "/login",
  loginPrevent,
  wrapAsync(async (req, res) => {
    const { username, password } = req.body;

    const user = await SignupModel.findOne({ username });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        req.session.userId = user._id;
        const { password, ...userWithoutPassword } = user.toObject();
        res.send({ message: "Login successful", user: userWithoutPassword });
      } else {
        res.status(401).send({ message: "Incorrect password" });
      }
    } else {
      res.status(404).send({ message: "User not registered" });
    }
  }),
);

//Route to check if user is logged in
app.get(
  "/fetchuser",
  wrapAsync(async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not logged in" });
    }
    const user = await SignupModel.findById(req.session.userId).select(
      "-password",
    );
    res.json(user);
  }),
);

//route to clear the session
app.get(
  "/logout",
  wrapAsync(async (req, res) => {
    if (!req.session) {
      return res.status(200).json({ message: "Already logged out" });
    }

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      const data = res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out successfully" });
    });
  }),
);

//holdings API
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

//Positions API
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


//Analytics API
app.get("/allAnalytic", async (req, res) => {  
  const allAnalytics = await AnalyticsModel.find({});
  res.json(allAnalytics);
})

//to save data into order
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    price: req.body.price,
    qty: req.body.qty,
    mode: req.body.mode,
  });
  await newOrder.save();

  res.send("Order saved!");
});

//order API
app.get("/order", async(req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
})

//watchlist API
app.get("/allwatchlist", async (req, res) => {
  let allWatchlistData = await WatchlistModel.find({});
  res.json(allWatchlistData);
});

//API to buy
app.get("/allwatchlist/:id", async (req, res) => {
  let id = req.params.id;
  let data = await WatchlistModel.findOne({ name: id });
  console.log("ID : ", id);
  res.send(data);
});



//Error Handling Middleware
app.use((err, req, res, next) => {

  if (res.headersSent) {
    return next(err); // If yes, let Express default handler handle it (prevents crash)
  }

  let { statusCode = 500, message = "Something went wrong!" } = err;

  //Validate statusCode is a number
  if (isNaN(Number(statusCode))) {
    statusCode = 500;
  }

  res.status(statusCode).json({ message });
});

app.listen(PORT, () => {
  console.log("app started");
});
