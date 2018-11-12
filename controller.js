var fs = require('fs');

var data_update = require('./updatedata.js');

var data_model = require('./datafile.json');

var message = "This is not a valid command";
//var isPlaceCommandExecuted = false;
//var isValidCommand = false;
var myRobot = "";


exports.place_command = function(req, res, next) {
    
    var fvalue = req.params.fval;
    var xvalue = parseInt(req.params.xval);
    var yvalue = parseInt(req.params.yval);
    var fvalid = false;
    var xvalid = false;
    var yvalid = false;

    if(fvalue === "EAST" || fvalue === "WEST" || fvalue === "NORTH" || fvalue === "SOUTH") {
        fvalid = true;
    }
    if(xvalue === 0 || xvalue === 1 || xvalue === 2 || xvalue === 3 || xvalue === 4 || xvalue === 5) {
        xvalid = true;
    }
    if(yvalue === 0 || yvalue === 1 || yvalue === 2 || yvalue === 3 || yvalue === 4 || yvalue === 5) {
        yvalid = true;
    }
               
    if(fvalid === true && xvalid === true && yvalid === true) {
        data_update.placecommand(xvalue, yvalue, fvalue);
        data_update.SetPlaceCommandExecuted(true);
        //  isPlaceCommandExecuted = true;
        var jsondata1 = fs.readFileSync('./datafile.json');
        var jdata1 = JSON.parse(jsondata1);
        res.send(jdata1);
      }
      else {
          res.send(message);
          
      }   
        
};

exports.move_command = function(req, res, next) {
    var jsondata = fs.readFileSync('./datafile.json');
    var jdata = JSON.parse(jsondata);

    var x = jdata.X;
    var y = jdata.Y;
    var f = jdata.F;

     
 // if(isPlaceCommandExecuted) {
    if(data_update.GetPlaceCommandExecuted()) {
      
  // validate command
  if(f === "EAST") {
    if(x <= 4) {
        data_update.SetValidCommand(true);
    }
    
  }
  if(f === "NORTH") {
    if(y <= 4) {
        data_update.SetValidCommand(true);
    }
    
  } 
  if(f === "WEST") {
    if(x >= 1) {
        data_update.SetValidCommand(true);
    }
   } 
  if(f === "SOUTH") {
    if(y >= 2) {
        data_update.SetValidCommand(true);
    }   
    
  }    
        
}

 // if valid command then make a move

  var validMove = true;
  
  if(data_update.GetValidCommand()) {
        
     if(f === "EAST") {
      if(x <= 4) {
        jdata.X = x + 1;
      }
      if(x === 5) {
        validMove = false;
      }
    }

    if(f === "WEST") {
      if(x > 0 && x <= 5) {
        jdata.X = x - 1;
      }
      if(x === 0) {
        validMove = false;
      }      
    }

    if(f === "NORTH") {
      if(y <= 4) {
        jdata.Y = y + 1;
      }
      if(y === 5) {
        validMove = false;
      }
    }

    if(f === "SOUTH") {
      if(y > 0 && y <= 5) {
        jdata.Y = y - 1;
      }
      if(y === 0) {
        validMove = false;
      }
      
    }
      
    }
    
    
   if(data_update.GetPlaceCommandExecuted() === false || data_update.GetValidCommand() === false || validMove === false) {
    res.end(message);
  }
  else {
    var writedata12 = JSON.stringify(jdata, null, 2);
    fs.writeFileSync('./datafile.json', writedata12, function(err) {
        if(err) return console.log(err);        
    });

    res.send(jdata); 
  }
};

exports.left_command = function(req, res, next) {
    var jsondata = fs.readFileSync('./datafile.json');
    var jdata = JSON.parse(jsondata);

    if (data_update.GetPlaceCommandExecuted()) {
   
        //var x = jdata.X;
        //var y = jdata.Y;
        var fa = jdata.F;
      
        if(fa === "EAST") {
            jdata.F = "NORTH";    
        }
        if(fa === "WEST") {
            jdata.F = "SOUTH";    
        }
        if(fa === "NORTH") {
            jdata.F = "WEST";    
        }
        if(fa === "SOUTH") {
            jdata.F = "EAST";    
        }
      
            var writedata12 = JSON.stringify(jdata, null, 2);
            fs.writeFileSync('./datafile.json', writedata12, function(err) {
            if(err) return console.log(err);        
            });
        res.send(jdata);
      
        } 
        else {
            res.send(message);
        } 
      
      };

exports.right_command = function(req, res, next) {
    var jsondata = fs.readFileSync('./datafile.json');
    var jdata = JSON.parse(jsondata);

    if (data_update.GetPlaceCommandExecuted()) {
   
        //var x = jdata.X;
        //var y = jdata.Y;
        var fa = jdata.F;
      
        if(fa === "EAST") {
            jdata.F = "SOUTH";    
        }
        if(fa === "WEST") {
            jdata.F = "NORTH";    
        }
        if(fa === "NORTH") {
            jdata.F = "EAST";    
        }
        if(fa === "SOUTH") {
            jdata.F = "WEST";    
        }
      
            var writedata12 = JSON.stringify(jdata, null, 2);
            fs.writeFileSync('./datafile.json', writedata12, function(err) {
            if(err) return console.log(err);        
            });
        res.send(jdata);
      
        } 
        else {
            res.send(message);
        } 
    
    };

    exports.report_command = function(req, res, next) {
        var jsondata = fs.readFileSync('./datafile.json');
        var jdata = JSON.parse(jsondata);
        
        if(data_update.GetPlaceCommandExecuted()) {
        res.send(jdata);           
        
        }
        else {

            res.send("You need to make PLACE command first before you begin your move"); 

        }
    };

    exports.robot_list = function(req, res, next) {
        
        const robot = {

            name: [ "RobotA", "RobotB", "RobotC"]
              }
        
              res.send(robot);         
            
            };
    
     exports.select_my_robot = function(req, res, next) {
        
        myRobot = req.params.roboname;

       
       if (myRobot === "RobotA" || myRobot === "RobotB" || myRobot === "RobotC") {
      // Bad request 400
        res.send("You are going to control " +myRobot);

       }
      else {
          myRobot = "";
          res.status(400).send("This is not a valid Robot Name. Please call Get List of Robots for available names");
          }
   };

   exports.help = function(req, res, next) {
        
    res.render('index', { title: 'Toy Robot Simulation' });
};



