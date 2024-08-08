const express = require('express');
const router = express.Router();
const { 
    getSingleUser,
    createUser,
    loginUserCtrl,    
    handleRefreshToken,
    logoutUser,
    deleteUser,
    addMovies,
    updateMovies,
    deleteMovies
} = require('../controller/userCtrl');

const {authMiddleWare} = require('../middlewares/authMiddleWare');
const { validateUser, validateLocation, validateDate } = require('../utils/validator');

router.post('/register',validateUser,createUser);//register user
router.post('/login',validateUser,loginUserCtrl);//login user
router.get('/refresh',authMiddleWare,handleRefreshToken);//tokenrf
router.get('/logout',authMiddleWare,logoutUser); //logout
router.get('/:id',authMiddleWare,getSingleUser);//getsingleuserdetails
router.delete('/:id',authMiddleWare,deleteUser);//deleteuser
//movie routes
router.post('/:id/movies',authMiddleWare,addMovies);//addmovies
router.put('/:id/movies',authMiddleWare,updateMovies);//updatemovies
router.delete('/:id/movies',authMiddleWare,deleteMovies);//deletemovies
module.exports = router;
 