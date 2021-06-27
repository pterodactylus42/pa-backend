//import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const pupils = await req.context.models.Pupil.findAll();
  return res.send(pupils);
});

router.get('/:pupilId', async (req, res) => {
  const pupil = await req.context.models.Pupil.findByPk(
    req.params.pupilId,
  );
  return res.send(pupil);
});

router.post('/', async (req, res) => {
  const pupil = await req.context.models.Pupil.create({
    firstname: req.body.firstname,
    firstname: req.body.lastname,
    });
  return res.send(pupil);
});

router.delete('/:pupilId', async (req, res) => {
  const result = await req.context.models.Pupil.destroy({
    where: { id: req.params.pupilId },
  });

  return res.send(true);
});

export default router;
