const express = require('express');
const Cars = require('./cars_model');

const router = express.Router();

router.get('/', (req, res) => {
    Cars.get()
        .then(cars => {
            res
                .status(200)
                .json(cars)
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Cars.getById(id)
        .then(car => {
            if(car) {
                res
                    .status(200)
                    .json(car)
            } else {
                res
                    .status(404)
                    .json({errorMessage: "Car with that ID does not exist."})
            }
        })
});

router.post('/', (req, res) => {
    const { VIN, make, model, mileage, transmission, status } = req.body;
    Cars.insert({ VIN, make, model, mileage, transmission, status })
        .then(car => {
            if(car) {
                res
                    .status(201)
                    .json(car)
            } else {
                res
                    .status(404)
                    .json({errorMessage: "Car with that ID does not exist."})
            }
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({error: "Error reaching the server. Please try again."})
        })
});

router.post('/', (req, res) => {
    const { vin, make, model, mileage } = req.body;
    Cars.insert({})
});

module.exports = router;