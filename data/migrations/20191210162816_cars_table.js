
exports.up = function(knex) {
    return (
        knex.schema.createTable('cars', tbl => {
            tbl.increments();

            tbl.string('VIN');

            tbl.string('make')
                .notNullable();

            tbl.string('model')
                .notNullable();

            tbl.integer('mileage')
                .notNullable();

            tbl.string('transmission')
                .notNullable();

            tbl.string('status')
                .nullable();
        })
    );
};

exports.down = function(knex) {
    return (
        knex.schema.dropTableIfExists('cars')
    )
};
