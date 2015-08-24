var spaceOutArguments = function(){
    var str = "";
    var argsArray = Array.prototype.slice.call(arguments);
    argsArray.forEach(function(arg){
        str += arg + " - ";
    });
    return str;
}

//console.log(spaceOutArguments("Hello", "Levi", "Hashem", "Truly", "Loves", "You"));
//logs Hello - Levi - Hashem - Truly - Loves - You -

var matchPairs = function(arrayOfNums, targetNum){
    var newArray = []; 
    for(var i = 0; i < arrayOfNums.length; i++){
        var diff = targetNum - arrayOfNums[i];
        if(newArray.indexOf(diff) > -1){
            return true;
        }else {
           newArray.push(arrayOfNums[i]); 
        }
    }
    return false;
}
var target = 99;

var array = [1, 3, 32, 11, 75, 14, 8, 9, 4, 88, 56, 43, 22];

var wontAddUp = [1, 2, 33, 44, 23, 77];
var wrongTarget = 1000;

console.log(matchPairs(array, target));//logs true
console.log(matchPairs(wontAddUp, wrongTarget));//logs false
//this should be linear time as it only has to loop through the array 1 time
//should be just O(n) in every case. I dont see O(1) as possible and I cant see O(n^2) needed.