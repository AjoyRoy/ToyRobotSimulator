var fs = require('fs');
var config_data = require('./ConfigData.json');


function placecommand(x,y,f) {

    console.log("Inside placecommand");
    var jsondataf = fs.readFileSync('./datafile.json');
    var jdataf = JSON.parse(jsondataf);   
    
           
    if(f === "EAST" || f === "WEST" || f === "NORTH" || f === "SOUTH") {
        jdataf.X = x;
        jdataf.Y = y;
        jdataf.F = f;
       }  
    
    var writedata7 = JSON.stringify(jdataf, null, 2);
    fs.writeFileSync('./datafile.json', writedata7, function(err) {
        if(err) return console.log(err);
        
    });
    console.log("Updated Place command successfully");  
    
    
}

function GetPlaceCommandExecuted(){
    var jsonconfig = fs.readFileSync('./ConfigData.json');
    var strconfig = JSON.parse(jsonconfig);

    if(strconfig.isPlaceCommandExecuted === false) {
        return false;
    }
    else {
        return true;
    }
    
}

function SetPlaceCommandExecuted(val){

    var jsonconfig1 = fs.readFileSync('./ConfigData.json');
    var strconfig1 = JSON.parse(jsonconfig1);
    strconfig1.isPlaceCommandExecuted = val;

    var writedata1 = JSON.stringify(strconfig1, null, 2);
    fs.writeFileSync('./ConfigData.json', writedata1, function(err) {
        if(err) return console.log(err);        
    });
    
}

function GetValidCommand(){

    var jsonconfig2 = fs.readFileSync('./ConfigData.json');
    var strconfig2 = JSON.parse(jsonconfig2);

    if(strconfig2.isValidCommand === false) {
        return false;
    }
    else {
        return true;
    }
    
}

function SetValidCommand(val1){

    var jsonconfig3 = fs.readFileSync('./ConfigData.json');
    var strconfig3 = JSON.parse(jsonconfig3);
    strconfig3.isValidCommand = val1;

    var writedata3 = JSON.stringify(strconfig3, null, 2);
    fs.writeFileSync('./ConfigData.json', writedata3, function(err) {
        if(err) return console.log(err);        
    });  
    
}



// NOT Implemented - PLACE HOLDER for more modular approach
function movecommand(){

    return true;
    
}

// NOT Implemented - PLACE HOLDER for more modular approach

function leftcommand(){

    return true;
    
}
// NOT Implemented - PLACE HOLDER for more modular approach

function rightcommand(){

    return true;
}

module.exports.placecommand = placecommand;
module.exports.GetPlaceCommandExecuted = GetPlaceCommandExecuted;
module.exports.SetPlaceCommandExecuted = SetPlaceCommandExecuted;
module.exports.GetValidCommand = GetValidCommand;
module.exports.SetValidCommand = SetValidCommand;

