const express = require('express');
const cors = require('cors');
const webRoute = require('./routes/web');
const sequelize = require('./util/database');
const app = express();

const PORT = 3000;

app.use(cors());
app.use('/shop', webRoute);
//connections
(async function () {
    try {
        const result = await sequelize.sync();
        app.listen(PORT, (err) => {
            if (!err) {
                console.log(`server running on http://localhost:${PORT}`);
            } else {
                console.log(err);
            }
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
