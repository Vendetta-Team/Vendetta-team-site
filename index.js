const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "index.html");
});

const listener = app.listen(80, () => {
    console.log("localhost:" + listener.address().port);
});
