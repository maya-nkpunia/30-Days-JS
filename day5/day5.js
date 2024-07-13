// Basic Node.js template

const express = require("express");
const app = express();
const port = 3000;
const indexRouter = require("./routes/index");

app.get('/', indexRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});