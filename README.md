# pupil admin backend

this is a fork of
https://github.com/rwieruch/node-express-postgresql-server
thanks so much for the best tutorial on api's i found :-)
(https://www.robinwieruch.de/postgres-express-setup-tutorial/)

## prerequisites

make sure you have postgresql installed
enter the proper database connection settings in the .env file...

### Routes

- visit http://localhost:3000
  - GET /lessons
  - POST /lessons
  - GET /lessons/1
  - GET /pupils
  - GET /pupils/1
  - POST /pupils
  - POST /login
  - POST /notices

#### CURL

- Create a lesson with:
  - `curl -X POST -H "Content-Type:application/json" http://localhost:3000/lessons -d '{"name":"helloWorldLesson", "date":"1970-01-01", "venue":"onTheGreen", "frequency":"weekly", "duration":"30"}'`

- Delete a lesson with:
  - `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/lessons/1`

