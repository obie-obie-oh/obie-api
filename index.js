const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./config/router')
require('dotenv').load();

const app = express();
app.set('port', (process.env.PORT || 6969));

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

router(app);

const server = app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

// app.use('/api', require('./config/api'))
// app.use('/messages', require('config/messages'))

module.exports = app;