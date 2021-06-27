# pupil admin backend

this is a fork of
https://github.com/rwieruch/node-express-postgresql-server
thanks so much for the best tutorial on api's i found :-)
(https://www.robinwieruch.de/postgres-express-setup-tutorial/)

## GET Routes

- visit http://localhost:3000
  - /lessons
  - /lessons/1
  - /pupils
  - /pupils/1

### CURL

- Create a lesson with:
  - `curl -X POST -H "Content-Type:application/json" http://localhost:3000/lessons -d '{"name":"helloWorldLesson", "date":"1970-01-01", "venue":"onTheGreen", "frequency":"weekly", "duration":"30"}'`

- Delete a lesson with:
  - `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/lessons/1`

