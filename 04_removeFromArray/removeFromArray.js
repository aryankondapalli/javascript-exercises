const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];

    for(const item of array){
        if (!args.includes(item)) {
          newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
