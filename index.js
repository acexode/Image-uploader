const express = require('express'),
    path = require('path'),
    exphbs = require('express-handlebars'),
    formidable = require('formidable'),
    bParser = require('body-parser'),
    app = express();


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')))

app.use(bParser.json())
app.use(bParser.urlencoded({ extended: false }))

app.use('/', require('./routes/index'))
const port = 3000
app.listen(port, () => {
    console.log('listening on port ' + port)
})