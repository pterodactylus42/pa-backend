import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
  console.log('got a register request for ' + req.body.username);

  const isUserRegistered = await req.context.models.User.findOne({
    where: {
        username: req.body.username,
      }
  });

  if(!!isUserRegistered) {
    console.log('user ' + isUserRegistered.username + ' already registered.');
    return res.status(400).send('user ' + isUserRegistered.username + ' already registered.');
  }

  const user = await req.context.models.User.create({
    username: req.body.username,
    password: req.body.password,
    });
  return res.status(200).send(req.body.username);
  //return res.send(user);
});

export default router;
