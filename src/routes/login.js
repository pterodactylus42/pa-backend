import { Router } from 'express';
import user from '../models/user';

const router = Router();


router.post('/', async (req, res) => {
  // get user data from request
  console.log('got a login request for user ' + req.body.username);
  //console.log('identified by ' + req.body.password);

  // check if in database
  let loginUser = null;
  if(!!req.body.username) {
    console.log('i wonder if i can find ' + req.body.username + ' in the database... \n');
    loginUser = await req.context.models.User.findByLogin(req.body.username);
  }
  if ( !!loginUser ) {
    console.log('hey there, ' + req.body.username + '! Let\'s see if you entered your correct password...\n');
    // check password
    if ( loginUser.password === req.body.password ) {
      console.log('hi friend, come in :-)\n');
      const accessToken = req.context.jwt.sign({ username:loginUser.username }, req.context.accessTokenSecret);
        //return res.status(200).send(loginUser.username);
        res.json({
          accessToken
        });
      } else {
        console.log('bugger off, you nerd.\n');
        return res.status(401).send('password incorrect for user ' + loginUser.username + '\n');        
      }
  } else {
    return res.status(401).send('unknown user');        
  }
});

export default router;