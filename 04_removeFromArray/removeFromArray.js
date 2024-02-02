const removeFromArray = function(array) {
    let removed = [];
    outer: for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (array[i] === arguments[j]) continue outer;
        }
        removed.push(array[i]);
    }
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
