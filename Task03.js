'use strict';

// Необходимо написать функцию, которая принимает 2 параметра n и m
// И возвращает массив с високосными годами в диапазоне между n и m
// Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.


const addYears = (n, m) => {
    const arrYears = [];
    let leapYear = y => ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0);

    if (m > n) {
        for( let i = n; i <= m; i++) {
            if (leapYear(i)) {
                arrYears.push(i)};
        }
    } else{
        for( let i = m; i <= n; i++) {
            if (leapYear(i)) {
                arrYears.push(i)};
        }
    }
        // console.log(arrYears)
        return arrYears;
    }

addYears(2048, 1992); 