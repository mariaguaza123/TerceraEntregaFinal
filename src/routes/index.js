import { Router } from 'express';
import { signUp, logIn, getHome, logOut } from '../controllers/logIn.js'
import passport from 'passport';
import { isLoggedIn } from '../middleware/authenticate';

const passportOptions = { badRequestMessage: 'Error en el body' };

const routerMain = Router();

routerMain.post('/signUp', signUp);

routerMain.post('/logIn', passport.authenticate( 'logIn', passportOptions), logIn);

routerMain.get('/home', isLoggedIn, getHome);

routerMain.get('/logout', logOut);


export default routerMain;