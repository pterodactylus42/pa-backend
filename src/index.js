import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { sequelize } from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

// * Routes * //

// app.use('/session', routes.session);
// app.use('/users', routes.user);
// app.use('/messages', routes.message);
app.use('/lessons', routes.lesson);

// * Start * //

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

// * Database Seeding * //

const createUsersWithMessages = async () => {
  // await models.User.create(
  //   {
  //     username: 'rwieruch',
  //     messages: [
  //       {
  //         text: 'Published the Road to learn React',
  //       },
  //     ],
  //   },
  //   {
  //     include: [models.Message],
  //   },
  // );

  // await models.User.create(
  //   {
  //     username: 'ddavids',
  //     messages: [
  //       {
  //         text: 'Happy to release ...',
  //       },
  //       {
  //         text: 'Published a complete ...',
  //       },
  //     ],
  //   },
  //   {
  //     include: [models.Message],
  //   },
  // );

  await models.Lesson.create(
    {
      name: 'guitar lesson',
      pupils: [
        {
          firstname: 'Happy to release ...',
          lastname: 'new',
        },
        {
          firstname: 'Published a complete ...',
          lastname: 'series',
        },
      ],
      date: '2021-01-01',
      venue: 'at home',
      frequency: 'unsteady',
      duration: '30',
    },
    {
      include: [models.Pupil],
    },
  );
};
