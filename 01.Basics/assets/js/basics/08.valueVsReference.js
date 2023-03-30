/* 
Javascript has 5 data types that are passed by value: 
Boolean, null, undefined, String, and Number. We’ll call these primitive types.

Javascript has 3 data types that are passed by reference: 
Array, Function, and Object. These are all technically Objects, so we’ll refer to them collectively as Objects.
*/


let a = 10;
let b = a;
console.log('passed by value: number',{a, b});
a =100;
console.log('passed by value: number',{a, b});



let name1= 'juan';
let name2=name1;
console.log('passed by value: string',{name1,name2});
name1 ='pedro'
console.log('passed by value: string',{name1,name2});


let obj1={name:'juan'};
let obj2=obj1;
console.log('passed by reference: object',{obj1,obj2});
obj1.name='carlos'
console.log('passed by reference: object',{obj1,obj2});


const changeTheName = (person) =>{
    person.name='Tony'
    return person
};

let peter = {name:'August'};
let tony = changeTheName (peter);

console.log({peter, tony});


/* 
To keep the property vauluesand made a copy we use the spreed operator '...'
In object, functions, arrays
*/

let juan={name:'juan'};
let ana={...juan};
console.log('passed by reference: object',{ana,juan});
ana.name='ana'
console.log('passed by reference: object',{ana,juan});

const changeTheName2 = ({...person}) =>{
    person.name='fran'
    return person
};

let carlo = {name:'carlo'};
let fran = changeTheName2 (carlo);


console.log({carlo, fran});


let fruits = [ 'apple', 'bananas', 'kiwi' ];

let moreFruits = [...fruits]

moreFruits.push('peaches')

console.table({ fruits, moreFruits });