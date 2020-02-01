function solve(input) {
    let nbh = new Map();
    let keys = input.shift().split(', ')

    keys.forEach(key => {
        nbh.set(key, [])
    });

    input.forEach(element => {
        let token = element.split(' - ')

        if (nbh.has(token[0])) {
        let el = nbh.get(token[0]);
        el.push(token[1]);
        nbh.set(token[0], el)
        }
    });

    let sorted = Array.from(nbh.entries())
    .sort((a, b) =>b[1].length - a[1].length );

    sorted.forEach(entry => {
        console.log(`${entry[0]}: ${entry[1].length}`)
        entry[1].forEach(inh => console.log(`--${inh}`))
    });
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])