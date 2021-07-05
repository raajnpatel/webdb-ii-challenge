
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars').del()
        .then(function () {
            // Inserts seed entries
            return knex('cars').insert([
                {
                    "VIN": "86516546543",
                    "make": "BMW",
                    "model": "M5",
                    "mileage": 24000,
                    "transmission": "Manual",
                    "status": "Brand New"
                },
                {
                    "VIN": "654sdf654sdf",
                    "make": "Audi",
                    "model": "S7",
                    "mileage": 8000,
                    "transmission": "Auto",
                    "status": "Used"
                },
                {
                    "VIN": "874wer654hfd",
                    "make": "Tesla",
                    "model": "CyberTruck",
                    "mileage": 24,
                    "transmission": "Auto",
                    "status": "Clean"
                },
                {
                    "VIN": "erg54srg65414",
                    "make": "Alfa Romeo",
                    "model": "4C",
                    "mileage": 10,
                    "transmission": "Manual",
                    "status": "Brand New"
                },
            ]);
        });
};
