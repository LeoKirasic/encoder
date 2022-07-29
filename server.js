const express = require('express');
const app = express();
const port = 3001
const login = require('./login');
const auth = require('./middleware/authorization');
const cors = require('cors');
const encoder = require('./encoder');

app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('express here')
})
app.post('/login', login);

app.post('/encoder', auth, (req, res) => {
    const str  = req.body.text;
    const result = encoder(str);

    res.json(result);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
