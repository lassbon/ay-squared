const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newArr.map(function (item) {
    return item * 2;
});

newArr.filter(function (item) { 
    return item % 2 === 0;
});