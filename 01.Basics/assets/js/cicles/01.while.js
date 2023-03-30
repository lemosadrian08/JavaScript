
const cartBrands = ['Ford', 'Mazda', 'Honda', 'Toyota'];


console.warn('While');
let i = 0

/* while (i < cartBrands.length) {
    console.log(cartBrands[i]);
    i++;
} */

// undefined
// nul
// false

/* while (cartBrands[i]) {
    console.log(cartBrands[i]);
    i++;
} */

/* while (cartBrands[i]) {
    if( i===2 ){
        break
    }

    console.log(cartBrands[i]);
    i++;
} */

while (cartBrands[i]) {
    if( i===0 ){
        i++;
        continue;
    }

    console.log(cartBrands[i]);
    i++;
}

/* In a do while cicle, the cicle always run at least one time 
And if it dosen't do anything it return undefined
*/
console.warn('Do While');
let j =10

do {
    console.log(cartBrands[j]);
    j++;
} while (cartBrands[j]);

