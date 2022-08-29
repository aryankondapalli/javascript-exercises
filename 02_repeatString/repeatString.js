const repeatString = function(str,num) {
    if(num < 0){
        return 'ERROR';
    }
    result = '';
    for(x = 0; x < num; x++){
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
