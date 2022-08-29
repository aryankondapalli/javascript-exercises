const sumAll = function(start,end) {
    if(start < 0 || end < 0){
        return "ERROR";
    }
    if(!(typeof start == 'number') || !(typeof end == 'number')){
        return "ERROR";
    }
    let total = 0;
    if(start > end){
        const temp = start;
        start = end;
        end = temp;
    }
    for(let x = start; x <= end; x++){
        total += x;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
