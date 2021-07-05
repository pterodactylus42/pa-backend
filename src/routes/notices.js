//import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const notices = await req.context.models.Notice.findAll();
  return res.send(notices);
});

router.get('/:noticeId', async (req, res) => {
  const notice = await req.context.models.Notice.findByPk(
    req.params.noticeId,
  );
  return res.send(notice);
});

router.post('/', async (req, res) => {
  const notice = await req.context.models.Notice.create({
    content: req.body.noteString,
    lessonId: req.body.lessonId,
    });
  return res.send(notice);
});

router.delete('/:noticeId', async (req, res) => {
  const result = await req.context.models.Notice.destroy({
    where: { id: req.params.noticeId },
  });

  return res.send(true);
});

export default router;
