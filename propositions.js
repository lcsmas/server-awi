const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID

let propositions = {
    1: {
        id: 1,
        title: 'Comment réagir à un SDF qui me siffle ?',
        content: `Hier soir un SDF m'a sifflé en rentrant de soirée,
        comment, répondez vous à ce genre d'harcèlement ?`,
        isAnon: false,
        nbLikes: 5,
        owner: 1,
        tags: [1, 2],
        answers: [1, 2]
    },
    2: {
        id: 2,
        title: 'Vous desservez votre cause',
        content: `J'ai été victime de cette remarque lors du rassemblement Femen du 10 octobre, quels sont vos arguments dans ce genre de situation ?`,
        isAnon: false,
        nbLikes: 10,
        owner: 2,
        tags: [2],
        answers: [3, 4]
    },
    3: {
        id: 3,
        title: "C'est de l'humour / du second degré / Vous n'avez pas d'humour",
        content: "Bonjour à tous, il m'arrive souvent d'avoir ce genre de remarques, comment gérez-vous ?",
        isAnon: false,
        nbLikes: 18,
        owner: 1,
        tags: [],
        answers: []
    },
    4: {
        id: 4,
        title: "Vous voyez le mal / du sexisme partout !",
        content: "J'ai été victime de cette remarque sexiste de mon beau père avant hier lors d'un repas de famille, quelle honte !",
        isAnon: false,
        nbLikes: 47,
        owner: 2,
        tags: [],
        answers: []
    }
}

router.get('/', (req, res) => {
    const result = propositions;
    if (!result) {
        res.sendStatus(404)
    } else {
        res.status(200).json(result)
    }
})

router.put('/:id/answers', (req, res) => {
    const { id } = req.params;
    const { answer } = req.body;
    propositions[id].answers.push(answer);
    res.sendStatus(204);
})

router.post('/', (req, res) => {
    const { title, content, isAnon, owner, tags } = req.body;
    const id = ObjectID();
    propositions = {
        ...propositions, [id]: {
            id,
            title,
            content,
            isAnon,
            owner,
            nbLikes: 0,
            tags: tags,
            answers: []
        }
    }
    res.status(201).json({id: id})
})

module.exports = router