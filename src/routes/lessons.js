//import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const lessons = await req.context.models.Lesson.findAll();
  return res.send(lessons);
});

router.get('/:lessonId', async (req, res) => {
  const lesson = await req.context.models.Lesson.findByPk(
    req.params.lessonId,
  );
  return res.send(lesson);
});

router.post('/', async (req, res) => {
  // console.log(JSON.parse(req.body.pupils));
  const lesson = await req.context.models.Lesson.create({
    name: req.body.name,
    date: req.body.date,
    venue: req.body.venue,
    frequency: req.body.frequency,
    duration: req.body.duration,
    pupils: JSON.parse(req.body.pupils),
  },
  {
    include: [
      {model: req.context.models.Pupil},
    ],
  }
  );

  return res.send(lesson);

});

router.delete('/:lessonId', async (req, res) => {
  const result = await req.context.models.Lesson.destroy({
    where: { id: req.params.lessonId },
  });

  return res.send(true);
});

export default router;
