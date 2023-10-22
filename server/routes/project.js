const router = require('express').Router();
const projectController = require('../controllers/ProjectController');
const {authMiddleware, verifyAdmin} = require('../middleware')

router.post('/', authMiddleware, projectController.create);
router.get('/get/:id', authMiddleware, projectController.getProject);
router.get('/', authMiddleware, projectController.show);
router.get('/edit/:id', verifyAdmin, projectController.edit);
router.get('/all', verifyAdmin, projectController.index);

module.exports = router;