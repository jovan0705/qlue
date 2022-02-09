function algorithmic (int) {
    let result = []
    for (let i = 0; i <= int; i++) {
        if (result.length > 0) {
            result.push(0)
        } else {
            result.push(1)
        } 
    }   
    for (let i = 1; i < int; i++){
        for (let j = i; j <= int; j++) {
            result[j] += result[j - i];
        }
    }
    return result[int]
}

let int = 6
console.log(algorithmic(int))