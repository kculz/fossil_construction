const router = require('express').Router();
const projectController = require('../controllers/ProjectController');
const {authMiddleware, verifyAdmin} = require('../middleware')

router.post('/', authMiddleware, projectController.create);
router.get('/get/:id', authMiddleware, projectController.getProject);
router.get('/', authMiddleware, projectController.show);
router.put('/edit/:id', authMiddleware, projectController.edit);
router.get('/all', authMiddleware, projectController.index);

module.exports = router;