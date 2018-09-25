function* letterMaker() {
        yield 'a';
        yield 'b';
        yield 'c';
}

let letterGen = letterMaker();


console.log(letterGen.next().value)
console.log(letterGen.next().value)
console.log(letterGen.next().value)
console.log(letterGen.next().value)