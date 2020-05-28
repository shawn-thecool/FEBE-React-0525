const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
/**
 * constatns
 */
const PORT = 4000;
/**
 * middlewares
 */
app.use(logger("dev"));
app.use(cors());
/**
 * routers
 */
app.get("/", (req, res) => res.json({ msg: 'hello' }));
/**
 * server
 */
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
