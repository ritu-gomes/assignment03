//problem 01

function feetToMile(feet){
    if(feet<0){
        var warning = "the length can not be negative";
        return warning;
    }
    else{
        var miles = feet*(1/5280);
        return miles.toFixed(9);
    }
}


//problem 02

function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0){
        return "amount can not be nagetive";
    }
    var table_require = table*3;
    var bed_require = bed*5;
    var totalWoodRequired = chair + table_require + bed_require;
    return totalWoodRequired + " cubic-ft";
}

//problem 03

function brickCalculator(stairs){
    if(stairs<0){
        return "invalid input"
    }
    else if(stairs<=10){
        return stairs*15000;
    }
    else if(stairs<=20){
        var underTen = 10*15000;
        var aboveTen = (stairs-10)*12000;
        return underTen+aboveTen;
    }
    else{
        var underTen = 10*15000;
        var underTwenty = 10*12000;
        var aboveTwenty = (stairs-20)*10000;
        return underTen+underTwenty+aboveTwenty;
    }
}

// problem 04

function tinyFriend(frnd){
    if(frnd.length == 0){
        return "the array is empty";
    }
    else{
        var smallName = frnd[0];
        var smallNames = [];
        for(var i=1; i<frnd.length; i++){
            if(frnd[i].length<smallName.length){
                smallName=frnd[i];
            }
        }
        for(var i=0; i<frnd.length; i++){
            if(frnd[i].length==smallName.length){
                smallNames.push(frnd[i]);
            }
        }
        if(smallNames.length<=1){return smallName;}
        else{return smallNames;}
        
    }
    
}







