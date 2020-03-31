const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID

router.post('/authenticate', (req,res) => {
    const pseudo = req.body.pseudo
    const mdp = req.body.mdp
    const result = db.users.filter( (user) => user.pseudo == pseudo && user.mdp == mdp)
    if(result.length == 0) { 
        res.sendStatus(404)
    } else {
        res.status(200).json(result[0])
    }
})

router.get('/', (req, res) => res.status(200).json(users))

const db = {
    users : [
        { id : 1, pseudo : 'michel', mdp : 'michelmdp', mail : 'michel@gmail.com' },
        { id : 2, pseudo : 'lucas', mdp : 'lucasmdp', mail : 'lucas@gmail.com' }
    ]
}

const users = {
    1: { id : 1, pseudo : 'michel', mdp : 'michelmdp', mail : 'michel@gmail.com' },
    2: { id : 2, pseudo : 'lucas', mdp : 'lucasmdp', mail : 'lucas@gmail.com' }
}

module.exports = router