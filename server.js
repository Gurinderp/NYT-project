const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => console.log("Connected to DB"))
	.catch((err) => console.log(err));
