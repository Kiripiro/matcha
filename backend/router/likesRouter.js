const express = require('express');
const LikesController = require('../controllers/likesController');
const router = express.Router();

router.get('/author/:id', async (req, res) => {
    try {
        await LikesController.getAllByAuthorId(req, res);
    } catch (error) {
        console.error(error);
    }
});

router.get('/recipient/:id', async (req, res) => {
    try {
        await LikesController.getAllByRecipientId(req, res);
    } catch (error) {
        console.error(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        await LikesController.getLikeById(req, res);
    } catch (error) {
        console.error(error);
    }
});

router.get('/:authorId/:recipientId', async (req, res) => {
    try {
        await LikesController.getCheckLike(req, res);
    } catch (error) {
        console.error(error);
    }
});

router.post('/create', async (req, res) => {
    try {
        await LikesController.createLike(req, res);
    } catch (error) {
        console.error(error);
    }
});

router.post('/delete', async (req, res) => {
    try {
        await LikesController.deleteLike(req, res);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;