const router = require('express').Router();
router.get('/', (req, res) => {res.status(200).json(tags)});

const tags = {
    1: {
        id: 1,
        title: 'EnSoirée'
    },
    2: {
        id: 2,
        title: 'DansLaRue'
    },
    3: {
        id: 3,
        title: 'AuTravail'
    }
}

module.exports = router