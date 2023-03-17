const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newArr.map(function (item) {
    return item * 2;
});

newArr.filter(function (item) { 
    return item % 2 === 0;
});

function poshPeople(names){
    names.forEach (function (name){
        if (name.includes(p)){
            return `Hi ${name}, you are simply Posh!`
        } else{
            return `Sorry, chop L`
        }
    })
}

console.log(poshPeople("ajala"))
console.log(poshPeople("toyinishere"))
console.log(poshPeople("Niyi Olumie is Folarin"))
console.log(poshPeople("aysq"))
