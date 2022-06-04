const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDb, getDb } = require('./db.js')
const app = express()

app.use(express.json());
let db

app.get('/user', (req, res) => {
    let users = []
    db.collection('user')
        .find()
        .sort({ name: 1 })
        .forEach(user => users.push(user))
        .then(() => {
            res.status(200).json(users)
        })
        .catch(() => {
            res.status(500).json({ error: 'Couldn\'t not find the documents' })
        })
})

app.get('/user/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('user')
            .findOne({ _id: ObjectId(req.params.id) })
            .then((data) => {
                res.status(200).json(data)
            })
            .catch((err) => {
                res.status(500).json({ error: 'Couldn\'t not find the user' })
            })
    }
    else {
        res.status(500).json({ error: 'Invalid Document Id' })
    }
})

app.post('/user', (req, res) => {
    const data = req.body;
    db.collection('user')
        .insertOne(data)
        .then((sts) => {
            res.status(200).json(sts)
        })
        .catch((err) => {
            res.status(500).json({ error: 'Couldn\'t not create the user' })
        })
})

app.delete('/user/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('user')
            .deleteOne({ id: req.params.id })
            .then((sts) => {
                res.status(200).json(sts)
            })
            .catch((err) => {
                res.status(500)._writevjson({ error: 'Couldn\'t not delete the user' })
            })
    }
    else {
        res.status(500).json({ error: 'Invalid Document Id' })
    }

})

app.patch('/user/:id', (req, res) => {
    const updatedData = req.body;
    if (ObjectId.isValid(req.params.id)) {
        db.collection('user')
            .updateOne({ _id: ObjectId(req.params.id) }, { $set: updatedData })
            .then((sts) => {
                res.status(200).json(sts)
            })
            .catch((err) => {
                res.status(500).json({ error: 'Couldn\'t not update/find the user' })
            })
    }
    else {
        res.status(500).json({ error: 'Invalid Document Id' })
    }
})

connectToDb((err) => {
    if (!err) {
        app.listen(5000, () => {
            console.log("Server listening at port 5000");
        })
        db = getDb()
    }
})
