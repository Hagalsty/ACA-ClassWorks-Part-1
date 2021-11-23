const histogram = (arr, char) => {
    let res = '';

    arr.map( (el => {
        for (let i = 0; i < el; i++) {
            res += char
        }
        res +='\n'
    }))

    return res;
}

const histogram2 = (arr, char) => {
    let res = ''
    const max = Math.max(...arr);
    const indexOfMax = arr.indexOf(max);

    for (let j = max; j > 0; j--) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] >= j ) {
                res += char
            }
            else res += ' '
        }
        res += '\n';
    }

    return res;
}

console.log(histogram([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1], '#'))
console.log(histogram2([1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1], '#'))