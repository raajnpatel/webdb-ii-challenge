
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars').del()
        .then(function () {
            // Inserts seed entries
            return knex('cars').insert([
                {
                    "VIN": 86516546543,
                    "Make": "BMW",
                    "Model": "M5",
                    "Mileage": 24000
                }
            ]);
        });
};
