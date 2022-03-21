const express = require("express");
const app = express();
const um = require("./exemplo1");
const dois = require("./exemplo2");
require('dotenv').config();

const PORT = process.env.PORT;
app.listen(PORT, ()=>console.log(`Rodando na porta ${PORT} `));

app.use("/um", um);
app.use("/dois", dois);
app.use( (req, res) => res.send("Rota não mapeada"));