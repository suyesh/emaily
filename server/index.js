const express = require('express');

// require passport strategy
require('./services/passport');

// Instantiate app
const app = express();

// Require auth routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
