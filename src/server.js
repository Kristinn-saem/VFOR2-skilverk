const express = require('express');
const path = require('path'); 

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Matseðill' });
});
app.get('/gullfoss', (req, res) => {
    res.render('info', { title: 'Gullfoss' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});