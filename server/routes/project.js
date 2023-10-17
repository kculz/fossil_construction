const router = require('express').Router();
const projectController = require('../controllers/ProjectController');
const {authMiddleware} = require('../middleware')

router.post('/', authMiddleware, projectController.create);
router.get('/', authMiddleware, projectController.show);

module.exports = router;