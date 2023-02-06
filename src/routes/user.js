import { Router } from'express';
import { signUp, logIn, getHome, logOut } from '../controller/user.js'
import passport from 'passport';
import { isLoggedIn } from '../middlewares/authenticate.js';

const passportOptions = { badRequestMessage: 'Error en el body' };

const routerUser = Router();

routerUser.post('/signUp', signUp);

routerUser.post('/logIn', passport.authenticate( 'logIn', passportOptions), logIn);

routerUser.get('/home', isLoggedIn, getHome);

routerUser.get('/logout', logOut);

export default routerUser;

