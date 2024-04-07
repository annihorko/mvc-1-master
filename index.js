const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
require('dotenv').config();

const app = express();

app.use('',require('./routes/products'));

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));