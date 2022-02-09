function circleStar(int) {
    if (int % 2 === 0 && int % 3 === 0) {
        return 'CIRCLE STAR'
    } else if (int % 2 === 0) {
        return 'CIRCLE'
    } else if (int % 3 === 0) {
        return 'STAR'
    } else {
        return null
    }
}

console.log(circleStar(5))
console.log(circleStar(6))
console.log(circleStar(9))