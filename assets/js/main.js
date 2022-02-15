//Lev1_1_array sort//
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
]
console.log(languages.sort());

//Lev1_2//
let languages2 = languages.reverse();
console.log(languages2);

//Lev2_2//
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000]
console.log(numArray2.sort((a, b) => a - b));

//Lev1_13//
let mytxt1 = [`Hello`, `World`]
let mytxt2 = [`Anass`, `Elaine`, `Eric`, `Georg`]
let mytxt3 = [`Superman`,
    `Wonderwoman`, `Hulk`,
    `Batman`,
    `Spiderman`
]

let join1 = mytxt1.join();
let join2 = mytxt1.join(``);
let join3 = mytxt1.join(` `);
let join4 = mytxt1.join(`+`);

let join5 = mytxt2.join();
let join6 = mytxt2.join(``);
let join7 = mytxt2.join(` `);
let join8 = mytxt2.join(`+`);

let join9 = mytxt3.join();
let join10 = mytxt3.join(``);
let join11 = mytxt3.join(` `);
let join12 = mytxt3.join(`+`);
console.log(join12);

//Lev3_1//
let ser = 'Sergio';
let han = 'Hannah';
let reg = 'Regallager';
let rel = 'Reliefpfeiler';
let ren = 'Rentner';
let sell = 'Ella mag alle Bohnen';
let shan = 'han nesaH has ennaH';

let res1 = ser.split('').reverse().join('');
let res2 = han.split('').reverse().join('');
let res3 = reg.split('').reverse().join('');
let res4 = rel.split('').reverse().join('');
let res5 = ren.split('').reverse().join('');
console.log(res1);

let result1 = sell.split('').reverse().join('');
let result2 = shan.split('').reverse().join('');
console.log(result1);

//Lev1_1//
let out = document.getElementById(`output`)

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]
console.log(getraenke.sort());
getraenke.forEach(g => out.innerHTML += ` ${g}`);
getraenke.forEach(g => console.log(g));

//Lev1_2//
let upperDrinks = getraenke.map(g => {
    return g.toLocaleUpperCase()
})
console.log(upperDrinks);

//Lev1_3//
let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
]
console.log(array.sort());
let mult = array.map(zahl => zahl * 2);
console.log(mult.sort());

//Lev1_5//
let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
]
console.log(checkNumber.length)

checkNumber.forEach((elt, index) => {
    if (elt % 3 == 0) {
        checkNumber[index] = elt + 100
    }
    return elt;
})
console.log(checkNumber.sort());