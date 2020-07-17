// feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile();
console.log(result);

// woodCalculator
function woodCalculator(chair, table, bed){
        var chaircount = chair * 1;
        var tablecount = table * 3;
        var bedcount = bed * 5;
        var totalwood = chaircount + tablecount + bedcount;
        return totalwood;
}

var result = woodCalculator();
console.log(result);

// brickCalculator

// tinyFriend
function tinyFriend(name){
    var tinyest = name[0];
    for(var i = 0; i < name.length; i++){
        var currentname = name[i];
        if(name[i] == 'string' && name[i].length < tinyest){
            tinyest = currentname;
        }
    }
    return tinyest;
}

var tinestname = tinyFriend(['boys', 'sakib', 'mim', 'billal'])
console.log(tinestname);

