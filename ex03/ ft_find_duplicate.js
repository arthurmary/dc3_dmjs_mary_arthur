function Identique(painting) {


    for (let a = 0; a < painting.length; a++) {
        for (let b = b + 1; b < painting.length; b++) {
            if (painting[a] === painting[b]) {
                return true;
            }
        }
    }
    return false;
}

let number = [1,3,5,10,4,8,15];

console.log(Identique(number));