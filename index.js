const express = require('express');
const carsRouter = require('./cars/cars_router');

const server = express();

server.use(express.json());

server.use('/cars', carsRouter);

const port = 4444;
server.listen(port, () => console.log(`Server running on ${port}`));