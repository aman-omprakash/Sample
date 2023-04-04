const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
    return res.send("Hello World");
})

const port = 8000;

app.listen(port || 8000, () => {
    console.log("Server running on port:", port);
});