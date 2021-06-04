'use strict';

// 1.	Написать функцию, которая будет определять тип переменной, подающейся на вход

const typeOf = function (item) {
    if (typeof item === 'function') {
        return 'object';
    }
    if (item === null) {
        return 'null';
    } else {
        return typeof item;
    }
};

// 2.	Дан массив [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0]. 
//     Требуется написать функции сортировки массива по возрастанию и убыванию с сохранением повторяющихся элементов,
//     сортировки + удаление повторяющихся элементов, поиск наименьшего элемента, поиск наибольшего элемента 

const arr = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];

// Сортировка по возрастанию

const sortAscending = (arr) => arr.sort((a,b) => a-b);

// Сортировка по убыванию

const sortDescending = (arr) => arr.sort((a,b) => b-a);

// Сортировка по возрастанию + удаление повторяющихся элементов.

const sortAscending2 = (arr) => [...new Set(arr)].sort((a,b) => a-b);

// Сортировка по убыванию + удаление повторяющихся элементов.

const sortDescending2 = (arr) => [...new Set(arr)].sort((a,b) => b-a);

// Нахождение максимального элемента в массиве.

const findMaxElem = function (arr) {
    let max = arr[0];
    arr.forEach(function (item) {
        if (max < item){
            max = item;
        }
    });
    return max;
};

// Нахождение минимального элемента в массиве.

const findMinElem = function (arr) {
    let min = arr[0];
    arr.forEach(function (item) {
        if (min > item){
            min = item;
        }
    });
    return min;
};

// 3. Дан массив [{name: “overflow”, value: “hidden”}, {name: “cursor”, value: “pointer”}]
//     Требуется написать такую функцию, чтобы на выходе получился объект {overflow: “hidden”, cursor: “pointer”}

const mass = [{name: "overflow", value: "hidden"}, {name: "cursor", value: "pointer"}];

const getObj = function (arr) {
    const obj = {};
    arr.forEach((item) => {
        obj[item.name] = item.value; 
    });
    return obj;
};