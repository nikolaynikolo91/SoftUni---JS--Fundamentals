function solve(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (num < 1 || num > 7) {
        console.log('Invalid day!')
    }
    else {
        console.log(days[num - 1])
    }
}
solve(3)