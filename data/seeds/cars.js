
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
                }
            ]);
        });
};
