let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes."
let regex;
console.log(text)

function numberLength2Or3(text) 
{
    regex = /\b\d{2,3}\b/g;
    return text.match(regex);
}

function startsWithEven(text)
{
    regex = /\b\d[02468]\b/g;
    return text.match(regex);
}

function startsWithNumber(text)
{
    regex = /\b[0-9][a-z]\b/g;
    return text.match(regex);
}

function capitalized()
{
    regex = /\b[A-Z]\b/g;
    return text.match(regex);
}

function capitalizedLengthMin3()
{
    regex = /\b[A-Z]\w{3}\b/g;
    return text.match(regex);
}

function startsWithVowel()
{
    regex = /\b[aeiou]\b/g;
    return text.match(regex);
}

console.log(`numberLength2Or3: ${numberLength2Or3(text)}`);
console.log(`startsWithEven: ${startsWithEven(text)}`);
console.log(`startsWithNumber: ${startsWithNumber(text)}`);
console.log(`capitalized: ${capitalized(text)}`);
console.log(`capitalizedLengthMin3: ${capitalizedLengthMin3(text)}`);
console.log(`startsWithVowel: ${startsWithVowel(text)}`);


