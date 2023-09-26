const router = require('express').Router();
const userController = require('../controllers/UserController')

router.get('/:id', userController.show);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.delete('/delete/:id', userController.remove);
router.put('/edit/:id', userController.edit);

module.exports = router;