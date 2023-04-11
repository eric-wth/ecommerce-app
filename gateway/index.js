import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import proxy from 'express-http-proxy';

const app = express();

//CONFIGURATIONS
app.use(express.json({ extended: true }));
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/user', proxy('http://localhost:8001'));        //users
app.use('/', proxy('http://localhost:8002'));           //products
app.use('/shopping', proxy('http://localhost:8003'));  //shopping

const startServer = () => {
    const PORT = 8000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};
startServer();