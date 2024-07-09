require("dotenv").config();
let bodyParser = require("body-parser");

let express = require("express");
let app = express();
let books = ["hi", "hello", "hi"];
let time = new Date().toString();
absolutePath = __dirname + "/views/index.html";
app.get("/", function (req, res) {
    res.sendFile(absolutePath);
});
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", function (req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ message: "HELLO JSON" });
    } else {
        res.json({ message: "Hello json" });
    }
});

app.get(
    "/now",
    function (req, res, next) {
        req.time = new Date().toString();
        next();
    },
    function (req, res) {
        res.send({ time: req.time });
    },
);

app.get("/:word/echo", (req, res) => {
    const word = req.params.word;
    if (word == "books") {
        res.json({ book: books });
    } else if (word == "time") {
        res.json({ currentTime: time });
    } else {
        res.json({ echo: word });
    }
});

app.get("/name", (req, res) => {
    const first = req.query.first;
    const last = req.query.last;
    res.json({ name: `${first} ${last}` });
});
app.use(bodyParser.urlencoded({ extended: false }));
module.exports = app;

app.post("/name", (req, res) => {
    let nameOf = req.body.first + " " + req.body.last;
    res.json({ name: nameOf });
});
