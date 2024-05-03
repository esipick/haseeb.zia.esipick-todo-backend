const express = require('express');
const router = require('./router/router');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('./swagger')
const cors = require('cors');

dotenv.config();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerJsDoc))

app.use('/', router);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    const response = {
        success: false,
        message: err.message || 'Internal Server Error'
    }
    if (app.get('env' === 'development')) {
        response.errorDetails = err
    }

    res.status(statusCode).json(response);
})

app.listen(process.env.port, () => {
    console.log('server runing in port '+process.env.port);
})