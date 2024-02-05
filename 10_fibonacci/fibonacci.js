const fibonacci = function(num) {
    num = Number(num);

    if (num < 0) {
        return 'OOPS';
    }
    
    let seq = [0, 1];
    for (let i = 2; i <= num; i++) {
        seq.push(seq[i-2] + seq[i-1]);
    }
    return seq[num];
};

// Do not edit below this line
module.exports = fibonacci;
