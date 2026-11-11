const db = require("../models");

async function connectDatabase() {
    await db.sequelize.authenticate();
    console.log("Database connected successfully.");

    await db.sequelize.sync();
    console.log("Database synchronized successfully.");
}

module.exports = connectDatabase;