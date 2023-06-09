const express = require('express')
const cors = require('cors')

const app = express()

const allChef = require('./chef.json')

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running')
})
app.get('/allChef', (req, res) => {
    res.send(allChef)
})

app.get('/allChef/:id', (req, res) => {
    const id = req.params.id;
    const chef = allChef.find((chef) => chef.id === id);
    res.send(chef);
});

app.listen(port, () => {
    console.log(`FoodBuZZ server is running on port ${port}`)
})