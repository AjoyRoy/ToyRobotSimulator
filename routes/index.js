//const Joi = require('joi');
var express = require('express');
var router = express.Router();

var controller = require('../controller.js');

/* GET home page. */
router.get('/api/help', controller.help);
 
/* Display List of available Robots. */
router.get('/api/robots', controller.robot_list);  

/* Choose Robot name using GET method */
router.get('/api/myrobot/:roboname', controller.select_my_robot);
 
/* PLACE command */
router.get('/api/place/:xval/:yval/:fval', controller.place_command);
 
 /* MOVE command */
router.get('/api/move', controller.move_command);  
  

/* LEFT command */
router.get('/api/left', controller.left_command);
  

/* RIGHT command */
router.get('/api/right', controller.right_command);

/* REPORT command */
router.get('/api/report', controller.report_command);
 
 
  
module.exports = router;
