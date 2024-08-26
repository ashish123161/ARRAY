// let marks = [97,94,55,76,67];

// console.log(marks);

// let heroes = ["ironman","thor","hulk","saktiman","spiderman","antman"] ;


// for (let i = 0; i < heroes . length; i++) {

//     console.log(heroes[i]);
// }


// let cities = ["delhi","pune","mumbai","hyderbad","gaurgaon"];

// for (let city of cities){
//     console.log(city.toUpperCase());
// }


// let marks = [56,67,78,89,67,54,34];

// let sum = 0;

// for (let val of marks) {
//    sum+= val;

// }
// let avg = sum / marks
// console.log(sum);
// let items = [250, 645, 500, 700, 190, 50,];
// for (let i = 0; i< items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -=offer;
// }
// console.log(items);

// let items =[250, 500, 300, 200, 350];

// let i = 0;

// for (let val of items){
//     console.log('value at index ${i} = ${val}');
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log('value after offer = ${items[i]}');
//     i++;
// }


// let fooditems =["potato","apple","litchi","banana"];
// console.log(fooditems);
// let deleteditem = fooditems.pop();

// console.log(fooditems);
// console.log("deleted",deleteditem);


// let fooditems =["potato","apple","litchi","banana"];
// console.log(fooditems);
// console.log(fooditems.toString());

// let marvelheroes = ["thor","spiderman","ironman"];
// let dcheroes =["superman","batman"];

// let heroes = marvelheroes.concat(dcheroes);
// console.log(heroes);


// marvelheroes.unshift("ashish");

// let marvelheroes = ["thor","spiderman","ironman","antman"];
// console.log(marvelheroes);
// console.log(marvelheroes.slice());

//  let arr = [1, 2, 4, 5, 6, 7, 8];

// arr.splice(2, 2, 101, 103, 106);

// arr.splice(2, 2, 101);

// let company = ["bloomberg","microsoft","uber","google","ibm","netflix"];
// company.shift();

// company.splice(2, 1, "ola");


// company.push("amazon");


// function myfunction(msg){
 
//     console.log(msg);
// }


// myfunction("i love js");


// function sum (x,y){
//     s = x + y;
//     console.log("before return");
//     return s;
// }

// let val = sum(3, 4);
// console.log(val);


// ARROW Function

// function sum (a ,b){
//     return a + b;
// }

// const arrowsum = (a ,b ) =>{
//     console.log(a+b);
// };



// function mul (a, b ){
//     return a * b;
// }


// const arrowmul = (a, b) =>{
//     return a*b
// };





// const printhello  = () =>{
//     console.log("hello world");
// };

// function countvowels(str){
//     let count = 0;
//     for(const char of str){
//         if (char==="a"||  char ==="e"|| char ==="i"|| char ==="o"|| char ==="u")
//             {
//             count++;
//         }
//     }


// console.log(count);
// }



// let arr = ["pune","delhi","mumbai","bangolero"];

// arr.forEach(function printval (val, idx, arr){
//     console.log(val.toUpperCase(),idx,arr);
// })


// let nums = [2, 3, 4, 5, 6];

// let newarr = nums.map((val) => {
//     return val*val;
// });

// console.log(newarr);

// nums.forEach((num) => {
//     console.log(num *num);
// });



// let arr = [ 1, 2, 3, 4, 5, 6, 9 ];

// let evenarr = arr.filter((val) => {
//     return val % 2 ===0;
// });

// console.log(evenarr);

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });


// console.log(output)



// const output = arr.reduce((res, curr) => {
//     return res > curr ? res : curr;
// });


// console.log(output);

// let marks = [97, 87, 76, 56, 78,99, 93];

// let topper = marks.filter((val) => {
//     return val >90;

// });

// console.log(topper);

let n = prompt("enter a number : ");

let arr = [];
for (let i=1; i<=n; i++ ){
    arr[i-1] = i;
}

console.log(arr);
let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("sum ",sum);

let fact = arr.reduce((res, curr) => {
    return res * curr;
});

console.log(fact);