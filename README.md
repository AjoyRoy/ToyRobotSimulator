# ToyRobotSimulator
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units

The app has been developed using Node Express & REST API framework. 
Code has been tested by POSTMAN.

HTTP Get methods have been used so that the app can be run in the browser.

Output is delivered in JSON data.

How to run/test app.

PLACE: http://localhost:3000/api/place/0/1/NORTH  (API for PLACE command) (0 indicates x-dimension, and 1 indicates y-dimension and NORTH is facing.Facing is case-sensitive)
MOVE: http://localhost:3000/api/move  (API for MOVE command)
LEFT: http://localhost:3000/api/left  (API for LEFT command)
RIGHT: http://localhost:3000/api/right (API for RIGHT command)
REPORT: http://localhost:3000/api/report  (API for REPORT command)

Find all the test scenarios/cases published on Postman
https://documenter.getpostman.com/view/2452270/RzZ9HKLZ



