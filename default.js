function addNumber(num1, num2){

//option 1.
// if (num2==undefined) {
//     num2=0;
// }
//option 2
num2=num2 || 0;
const total = num1+num2;
return total;

}
const number= addNumber(102);
console.log(number);

const friend= 8;
const new1 = `<h3 class ="friend-name"> Friend-${friend}</h3> `;
console.log(new1);
const new2 = '<h3 class ="friend-name"> Friend-'+friend +'</h3>';
console.log(new2);

const multiLine= 'hi, i am  sumi \n'+
'and you \n'+
'what are you doing?';
console.log(multiLine);