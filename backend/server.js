const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000



const app = express();

app.use('/api/blogs', require('./routes/blogRoutes'))


app.listen(port, () =>console.log(`server started on port ${port}`))