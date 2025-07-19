const express = require('express');
const app = express();
const requestRoutes = require('./routes/requestRoutes');

app.use(express.json());
app.use('/', requestRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

