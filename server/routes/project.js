const router = require('express').Router();
const projectController = require('../controllers/ProjectController');
const {authMiddleware, verifyAdmin} = require('../middleware')

router.post('/', authMiddleware, projectController.create);
router.get('/', authMiddleware, projectController.show);
router.get('/all', verifyAdmin, projectController.index);

module.exports = router;