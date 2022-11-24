function add(num1, num2){
    return num1+num2;
}

 
// 
const add2= function add23(num1, num2){
    return num1+num2;
}

const add3= function(num1,num2){
    return num1+num2;
}
// 
const add4 = (num1, num2) => num1+num2;

const add5 =(num22, num33)=> num22+num33;

const sum44=add5(123,456)
console.log(sum44);

const add6= num=>num*5;
const sum6=add6(6);

const add7 = (num1,num2) =>{
    result= num1+num2;
    difference=num1-num2;
    multi=result*difference;
    total=multi/5;
    return total;
} 
const sum7=add7(6,5);
console.log(sum7)

const sum = add(12,31);
const sum2 = add2(12,14);
const sum3 = add3(12,24);
const sum4 = add4(12, 15);
// console.log(sum, sum2,sum3, sum4,sum6);

//...
const num2=[2, 34, 45 ,67 ,445,455 ];
const max=Math.max(...num2);

const num3=[...num2,77]
num2.push(55)
console.log(...num2)
console.log(...num3)
