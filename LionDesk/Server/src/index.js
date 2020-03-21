const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())

const routes = require('./routes/api/LionDeskRoutes')

app.set('json spaces', 2);

app.use(express.json());

app.use('/api', routes);

app.listen(3000, () => {
    console.log('listen on port 3000');
});