const Router= require('express');
const router=Router();
const {home, getAllUsers, postUser, putUser, deleteUser} =require('../Controllers/htmlMethods');


router.get('/', home);
router.get('/api/users',getAllUsers);
router.post('/post', postUser);
router.put('/api/user/update/:_id', putUser)
router.delete('/api/user/delete/:_id', deleteUser)


module.exports= router;