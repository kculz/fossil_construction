const router = require('express').Router();
const serviceController = require('../controllers/ServiceController')
const {authMiddleware} = require('../middleware')

router.get('/', serviceController.index);
router.get('/:id', serviceController.show);
router.post('/create', serviceController.create);
router.delete('/delete/:id', serviceController.remove);
router.put('/edit/:id', serviceController.edit);

module.exports = router;