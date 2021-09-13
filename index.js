const express = require('express');
const app = express();
const { readFile } = require('fs').promises;
const jsonList = require("./codes.json");


app.get('/codes.json', async (request, response) => {
    response.json(jsonList);
    next();
});

app.get('/', async (request, response) => {
    response.send("enter the Country code");
});

app.get('/:id', async (request, response) => {
    var countryCode = request.params.id ;
    try {
        response.send( await readFile(`./svg/${countryCode}.svg`,"utf-8" ));
    } catch (error) {
        response.send(" invalid Country code");
        console.log(error)
    }
});


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App available on http://localhost:${port}`))
