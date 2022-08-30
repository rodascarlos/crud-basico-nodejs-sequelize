const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');

router.get('/', (req,res) => {
    res.send("Prueba nueva ruta");
});

//CREATE
router.post('/',(req, res) => {
    Post.create({
        title: req.body.title,
        body: req.body.body
    }).then(post => {
        res.json(post);
    })
})
//READ

//UPDATE

//DELETE

module.exports = router;