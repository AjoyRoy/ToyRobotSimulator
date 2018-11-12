# ToyRobotSimulator
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units

The app has been developed in Node Express framework using RESTful API. 
Code has been tested by POSTMAN.

All the commands have been implemented by HTTP Get method so that the app can be run in the browser.

Output is delivered in JSON format.

How to run/test app.

PLACE: http://localhost:3000/api/place/0/0/NORTH  (First 0 indicates x-dimension, and 2nd 0 indicates y-dimension and NORTH is facing.Facing is case-sensitive)
MOVE: http://localhost:3000/api/move
LEFT: http://localhost:3000/api/left
RIGHT: http://localhost:3000/api/right
REPORT: http://localhost:3000/api/report



