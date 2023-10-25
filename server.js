const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})


