let txt = "MartinAeiNoelRicsi12";

//1. feladat
console.log("1. feladat")
console.log(txt.slice(0,5));

console.log();

//2.feladat
console.log("2. feladat")
console.log(txt.slice(2,8));

console.log();

//3.feladat
console.log("3. feladat")
console.log(txt.slice(4,txt.length));

console.log();

//4.feladat
console.log("4. feladat")
console.log(txt.slice(4,10));

console.log();

//5.feladat
console.log("5. feladat")
console.log(txt.toUpperCase());

txt = "MartinAdeNoelRicsi12";
console.log();

//6.feladat
let newTxt = "";
for (let i = 0; i< txt.length; i++) 
{
    if (i % 2 == 0)
        newTxt += txt[i].toUpperCase();
    else
        newTxt += txt[i].toLowerCase();
}
console.log("6. feladat")
console.log(newTxt);


console.log("");

//7.feladat
console.log("7. feladat")
console.log(txt.replaceAll("e","E"));

console.log();

//8.feladat
console.log("8. feladat")
console.log(txt.split("e"));