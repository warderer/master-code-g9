// ** EXPORTS.UP **
// Aquí colocaremos toda la lógica de creación de tablas, actualización y campos.
// Todas mis "consultas" que voy a ejecutar para manipular mi base de datos.
exports.up = function (knex) {
    return knex.schema.hasTable("homes").then(function (exists) {
        if (!exists) {
            //Si la tabla que voy a crear NO existe, entonces la creo
            return knex.schema.createTable("homes", function(table) {
                table.increments("house_id").primary(); //increments es el equivalente del tipo "serial", hace que se autoincremente
                table.string("title").notNullable(); //notNullable hace que mi campo sea obligatorio (no puede quedar nulo)
                table.text("description");
                table.integer("guests");
                table.text("address");
                table.boolean("active").notNullable().defaultTo(true); //defaultTo(valor) asigna un valor por defecto si no se especifica
                table.timestamp("created_at").defaultTo(knex.fn.now()); //knex.fn.now me devuelve la fecha y hora actual.
            });
        }
    });
};

// ** EXPORTS.DOWN **
// Aquí colocamos la lógica que nos permitirá deshacer los cambios realizados arriba (exports.up)
exports.down = function (knex) {
    return knex.schema.hasTable("homes").then(function (exists) {
        if (exists) {
            return knex.schema.dropTable("homes");
        }
    });
};

// Todo lo que colocamos arriba, no se ejecuta de golpe, knex lo va a ejecutar (up o down)
// dependiendo de que comando usemos en nuestra terminal.

// ** CORRER MIGRACIONES (UP) **
// 1) Si quiero correr la última migración sobre UP creada, ejecuto: knex migrate:latest
// 2) Si quiero correr una migración en específico, ejecuto: knex migrate:up nombremigración.js (ej: 20211215022257_homes.js)

// ** DESHACER MIGRACIONES (DOWN) **
// Si quiero deshacer los cambios de esta migración (down):
// 1) Rollback de la última migración: knex migrate:rollback latest
// 2) Se puede hacer un rollback general con: knex migrate:rollback (usese con precaucución)
// 3) Se puede hacer un rollback de una migración en concreto: knex migrate:down nombremigración.js (ej: 20211215022257_homes.js)

