const heroes = ['Hulk', 'Thor', 'Captain America', 'Spider-Man'];

console.warn('For');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}


console.warn('For in');
for (const i in heroes) {
    console.log(heroes[i]);
}


console.warn('For on');
for (const heroe of heroes) {
    console.log(heroe);
}