const router = require('express').Router()
const { Game, User, Review } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        })

        const games = gameData.map((game) => game.get({ plain: true }))

        res.render('homepage', {
            games, 
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/game/:id', async (req, res) => {
    try {
        const gameData = await Game.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        })

        const game = gameData.get({ plain: true })

        res.render('game', {
            ...game, 
            logged_id: req.session.logged_id
        })
    } catch (err) {
        res.status(500).json(err)
    }
})