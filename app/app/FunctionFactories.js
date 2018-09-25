const addSuffix = (x) => {
    const concat = (y) => {
        return y + x ;
    }
    return concat;
}

// let add_ness = addSuffix("ness");
// console.log(add_ness)
// let h = add_ness("happi");
// console.log(h)

let add_ful = addSuffix("ful");
let f = add_ful("fruit");
console.log(f)

// math:

const product = x => y => y*x

let mult5 = product(5);
console.log(mult5(2))

let double = product(2);
console.log(double(11))