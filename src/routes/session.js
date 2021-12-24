import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  console.log(req);
  const user = req.body.username;
  return res.send(user);
});

export default router;
