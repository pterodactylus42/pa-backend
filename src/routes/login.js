import { Router } from 'express';
import user from '../models/user';

const router = Router();


router.post('/', async (req, res) => {
  // get user data from request
  console.log('got a login request for user ' + req.body.username);
  //console.log('identified by ' + req.body.password);

  // check if in database
  const loginUser = await req.context.models.User.findByLogin(req.body.username);
  if ( loginUser ) {
    // check password
    if ( loginUser.password === req.body.password ) {
        return res.status(200).send(loginUser.username);
      } else {
        return res.status(401).send('password incorrect for user ' + loginUser.username);        
      }
  } else {
    return res.status(401).send('unknown user ');        
  }
});

export default router;