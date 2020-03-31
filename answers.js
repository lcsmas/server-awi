const router = require('express').Router()
const ObjectID = require('mongodb').ObjectID

router.get('/', (req, res) => {res.status(200).json(answers)});
router.post('/', (req,res) => {
    const id = ObjectID();
    const { content, owner, isAnon } = req.body
    answers = {
        ...answers, 
        [id] : {
            id,
            content,
            owner,
            isAnon,
            nbLikes: 0
        }
    }
    res.status(201).json(id) 
});

let answers = {
    1: {
        id: 1,
        content: 'Ignore le',
        owner: 1,
        isAnon: false,
        nbLikes: 10
    },
    2: {
        id: 2,
        content: 'Donnes lui une pièce',
        owner: 2,
        isAnon: false,
        nbLikes: 3
    },
    3: {
        id: 3,
        content: 'Remets le à sa place',
        owner: 1,
        isAnon: true,
        nbLikes: 0
    },
    4: {
        id: 4,
        content: 'Ne fais rien et va t\'en',
        owner: 2,
        isAnon: false,
        nbLikes: 5
    }
}

module.exports = router