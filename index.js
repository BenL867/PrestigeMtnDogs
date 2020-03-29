const express = require('express');
const bodyParser = require("body-parser");
const app = express()
const port = process.env.PORT || 3000
const urlencodedParser = bodyParser.urlencoded({extended: false})
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  })