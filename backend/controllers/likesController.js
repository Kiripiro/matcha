const BaseController = require('./baseController');
const LikesModel = require('../models/likesModel');
const UserController = require('../controllers/userController');
const BlocksController = require('../controllers/blocksController');

class LikesController extends BaseController {
    constructor() {
        super(LikesModel);
    }

    async getAllByAuthorId(req, res) {
        try {
            const authorId = this._checkPositiveInteger(req.params.id || '');
            if (authorId < 0) {
                res.status(400).json({ error: "Author id is incorrect" });
                return ;
            }
            const likes = await this.model.findMultiple(["author_id"], [authorId])
            if (!likes) {
                res.status(404).json({ error: 'Like not found' })
                return ;
            } else {
                var likesReturn = [];
                likes.find((row) => row).forEach(element => {
                    likesReturn.push(element);
                });
                res.json(likesReturn);
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllByRecipientId(req, res) {
        try {
            const recipientId = this._checkPositiveInteger(req.params.id || '');
            if (recipientId < 0) {
                res.status(400).json({ error: "Recipient id is incorrect" });
                return ;
            }
            const likes = await this.model.findMultiple(["recipient_id"], [recipientId])
            if (!likes) {
                res.status(404).json({ error: 'Like not found' })
                return ;
            } else {
                var likesReturn = [];
                likes.find((row) => row).forEach(element => {
                    likesReturn.push(element);
                });
                res.json(likesReturn);
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getLikeById(req, res) {
        try {
            const likeId = this._checkPositiveInteger(req.params.id || '');
            if (likeId < 0) {
                res.status(400).json({ error: 'Like id is incorrect' });
                return ;
            }
            const like = await this.model.findById(likeId);
            if (!like) {
                res.status(404).json({ error: 'Like not found' })
                return ;
            } else {
                res.json(like);
            }
            return ;
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getCheckLike(req, res) {
        try {
            const authorId = this._checkPositiveInteger(req.params.authorId || '');
            if (authorId < 0) {
                res.status(400).json({ error: 'Author id is incorrect' });
                return ;
            }
            const recipientId = this._checkPositiveInteger(req.params.recipientId || '');
            if (recipientId < 0) {
                res.status(400).json({ error: 'Recipient id is incorrect' });
                return ;
            }
            if (await this.model.check([authorId, recipientId])) {
                res.status(200).json({ exist: true });
                return ;
            } else {
                res.status(200).json({ exist: false });
                return ;
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async createLike(req, res) {
        try {
            const likeData = req.body;
            const authorId = this._checkPositiveInteger(likeData.author_id || '');
            if (authorId < 0) {
                res.status(400).json({ error: "Author id is incorrect" });
                return ;
            }
            const recipientId = this._checkPositiveInteger(likeData.recipient_id || '');
            if (recipientId < 0) {
                res.status(400).json({ error: "Recipient id is incorrect" });
                return ;
            }
            if (authorId == recipientId) {
                res.status(400).json({ error: "Author id  and recipient id is equal" });
                return ;
            }
            if (!await UserController.checkById(authorId)) {
                res.status(400).json({ error: "Author id doesn't exists" });
                return ;
            }
            if (!await UserController.checkById(recipientId)) {
                res.status(400).json({ error: "Recipient id doesn't exists" });
                return ;
            }
            const checkBlock = await BlocksController._checkBlock(authorId, recipientId);
            if (checkBlock == true) {
                res.status(400).json({ error: "Relationship is blocked" });
                return ;
            } else if (checkBlock != false) {
                console.log('error = ' + checkBlock);
                res.status(500).json({ error: 'Internal Server Error' });
                return ;
            }
            if (await this.model.check([authorId, recipientId])) {
                res.status(400).json({ error: "Like already exists" });
                return ;
            }
            const data = {
                "author_id": authorId,
                "recipient_id": recipientId
            };
            const likeId = await this.model.create(data);
            res.status(201).json({ message: 'Like created', likeId });
        } catch (error) {
            console.log('error = ' + error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteLike(req, res) {
        try {
            const likeData = req.body;
            const likeId = this._checkPositiveInteger(likeData.id || '');
            if (likeId < 0) {
                res.status(400).json({ error: "Like id is incorrect" });
                return ;
            }
            if (!await this.checkById(likeId)) {
                res.status(400).json({ error: "Like doesn't exists" });
                return ;
            }
            const likeIdReturn = await this.model.delete(likeId);
            res.status(201).json({ message: 'like deleted', likeIdReturn });
        } catch (error) {
            console.log('error = ' + error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new LikesController();