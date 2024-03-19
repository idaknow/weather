const express = require("express");
const app = express();
const PORT = 8080;

require("dotenv").config();

app.get("/weather", async (req, res) => {
  // try {
  const apiKey = process.env.API_KEY; // Future work: check that env vars are set
  const { lon, lat, units, useCache } = req.query;

  try {
    // docs: https://openweathermap.org/current
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=${units}`,
      { cache: useCache ? "default" : "no-cache" }
    );

    const weatherJson = await weather.json();
    console.log("request !!!");
    res.json({ cod: weather.cod, ...weatherJson }); // send code back with response object
  } catch (error) {
    // Future work: capture the error somewhere like sentry or datadog and return a cleaner version
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
