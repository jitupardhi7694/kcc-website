const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 5000;

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout/main_layout');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ limit: '60mb', extended: false }));

// router file use start

app.use('/', require('./routes/homeRoute'));

// router file use end

app.listen(port, async (err) => {
    if (err) throw err;
    else {
        await console.log(`server running on port http://localhost:${port}`);
    }
});
