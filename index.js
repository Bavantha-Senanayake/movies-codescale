const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4500; // Port number when not available

const authRouter = require('./routes/authRoute');
const reviewRouter = require('./routes/reviewRoutes');

const bodyParser = require('body-parser');


dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user',authRouter);
app.use('/api/review',reviewRouter);





app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

