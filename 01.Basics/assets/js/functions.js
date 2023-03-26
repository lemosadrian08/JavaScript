function greet (name) {
    console.log(arguments);
    console.log('function', name);
};

const greet2 = function ( name ) {
    console.log('Anonymous function', name);
};

const greet3 = ( name ) => {
    console.log('Arrow function', name);
};

greet( 'adrian', true, 43 );
greet2( 'juan' );
greet3( 'pedro' );


/* 
Return
the functions allways return somthing
If the return word dosen't appear then the return is undefined
*/

const sumar = (a,b)=>{
    return a+b
}

console.log( sumar( 4, 5 ) );

const getRandom = () => Math.random()

console.log( getRandom() );



