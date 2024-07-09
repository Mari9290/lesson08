'use strict';

// Функция принимает один обязательный параметр это количество элементов в массиве 
// И возвращает массив со случайными числами от одного до 100 включительно;

const addRandomArr = (quan) => {
    let randomArr = [];
    for( let i = 0; i < quan; i++) {
        randomArr.push(Math.floor(Math.random() * 100));
    }
    return randomArr;
}

addRandomArr(5);
