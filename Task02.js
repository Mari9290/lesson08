'use strict';

const newAddRandomArr = (quan, n, m) => {
    let randomArr = [];
    if (n > m) {
        for( let i = 0; i < quan; i++) {
            randomArr.push(Math.floor(Math.random() * (n - m + 1)) + m);
        }
    } else{
        for( let i = 0; i < quan; i++) {
            randomArr.push(Math.floor(Math.random() * (m - n + 1)) + n);
        }
    }
    return randomArr;
}

newAddRandomArr(5, 10, -20);

