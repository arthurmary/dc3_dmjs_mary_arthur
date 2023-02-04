function uniqueOccurences(painting) {
    for (let a = 0; a < painting.length; a++) {
        for (let b = a + 1; b < painting.length; b++) {
            if (painting[a] === painting[b]) {
                return false;
            }
        }
    }
    return true;
}

let number = [55, 6, 10, 55, 98 ,67, 67];

console.log(uniqueOccurences(number));