const express = require("express");
const app = express();
const apiKey = "ZjwrjdVqbBteJiYyEUCQAWSlFfbaXVra";

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/style.css", (req, res) => res.sendFile(__dirname + "/style.css"));
app.get("/script.js", (req, res) => res.sendFile(__dirname + "/script.js"));

app.get("/stations", (req, res) => {
    fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/stations", {
        headers: { token: apiKey },
    })
        .then((response) => response.json())
        .then((data) => res.json(data))
        .catch((errpr) => res.status(500).json({ error: String(error) }));
});

app.listen(5000, () => console.log("Serwer dziala"));
