console.log('Hello duniya');
// let can be used only in the given scope whereas var is a global variable.
// we can redeclare a variable using var
// let a=56;
// let b=true;
// let c='vinita';
// var e=5;
// var e=6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(e);

// PRIMITIVE DATATYPES-inbuilt datatypes
// String,number,boolean,undefined,null 
let f;
console.log(f);     /*undefined value since variable is declared but no value exist*/

// DYNAMIC TYPING-same variable can be num,string,bool
let lastName = 'menaria';
console.log(lastName);

lastName = 4;
console.log(lastName)

lastName = true;
console.log(lastName)

// REFERENCE TYPE -object,array,functions
let person = {
    firstName: 'muskan',
    age: 20,
};
console.log(person.firstName)
console.log(person['age'])

// difference between primitive and reference: in primitive copy is created whereas in reference type it points to the same address

// arithmetic
// let a=2;
// let b=4;
// let c=a+b;
// let d=a**b; 
// console.log(c);
// console.log(d);

// PRE-POST INCREMENT/DECREMENT
let x = 5;
let y = 10;
let ans1 = (++x) * (--y);
console.log(ans1);
let ans2 = (x++) * (--y);
console.log(ans2)
let ans3 = (x++) * (y--);
console.log(ans3)
let ans4 = (++x) * (y--);
console.log(ans4)

// ARRAYS
let names = ['vinita', 'shikha', 'neha'];
console.log(names[1])

// EQUALITY- loose and strict equality(== and ===)
//  in strict equality value and datatype both should be same 
let num = 1;
let str = '1';
console.log(num == str);
console.log(num === str);

// TERNARY OPERATOR
// condition?true:false 
let age = 20;
let status = (age > 18) ? 'adult' : 'minor';
console.log(status)

// Logical operator-AND,OR,NOT 
// falsy values-false,null,undefined,o,'',NaN 

let ans = (false || 5 || 1);  //since 5 is a truthy value so or operator does not check further(short circuiting)
console.log(ans)

// BITWISE OPERATOCR- & and |
let a = 2;
let b = 3;
let result1 = (a & b);
let result2 = (a | b);
console.log(result1)
console.log(result2)

// CONTROL STATEMENTS

// 1.is-elseif-else 
let marks = 54;
if (marks >= 90) {
    console.log('A');
}
else if (marks > 60 && marks < 90) {
    console.log('B');
}
else {
    console.log('F')
}

// 2.SWITCH 
let n = 2;
switch (n) {
    case 1: console.log('A')
        break;

    case 2: console.log('B')
        break;

    case 3: console.log('C')
        break;

    default: console.log('D')

}

// LOOPS
// for (let i = 0; i <10; i++) {
//    console.log(i);

// }

// let i=0;
// while(i<10)
// {
//     console.log(i)
//     i++;
// }
let i = 0;
do {
    console.log(i)
    i++;
} while (i < 10);







