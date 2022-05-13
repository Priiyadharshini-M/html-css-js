const express = require('express');
const app = express();

app.use(express.json())

const users = {
    1: { name: 'Stark', practice: "LAMP" },
    2: { name: 'Natasha', practice: "BFS" },
    3: { name: 'Wanda', practice: "DOTNET" }
}

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:userId', (req, res) => {

    if (!users[req.params.userId])
        return res.send("Can't find the data")

    return res.send(users[req.params.userId])
})

app.post('/users/:userId', (req, res) => {
    req.body.id = req.params.userId;
    if (req.body.name && req.body.practice) {
        const { name, practice } = req.body
        users[req.params.userId] = { name, practice }
        res.send(`Successfully created user with ID: ${req.params.userId}`)
    } else {
        res.send('Can\'t create user')
    }
})

app.put('/users/:userId', (req, res) => {
    req.body.id = req.params.userId;
    if (users[req.body.id]) {
        let user = users[req.body.id]
        user.name = req.body.name || user.name
        user.practice = req.body.practice || user.practice
        res.send(user)
    } else {
        res.send(`Can\'t find the user with ID ${req.params.userId}`)
    }
})

app.delete('/users/:userId', (req, res) => {
    req.body.id = req.params.userId;
    if (users[req.body.id]) {
        delete users[req.body.id]
        res.send(`Deleted user with ID ${req.params.userId}`)
    } else {
        res.send(`Can\'t find the user with ID ${req.params.userId}`)
    }
})

app.listen(9000, () => {
    console.log("Server is running at port 9000");
})