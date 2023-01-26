requeri("express-async-errors");


const express = require("express");

const routes = require("./Routes");

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {

});

const PORT = 1919;
app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
