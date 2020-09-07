function solve(input) {
    let tracker = {};

    input.slice(0, 1)[0].split(' ')
        .forEach(element => {
            tracker[element] = 0
        });

    input.slice(1).forEach((element) => {
            if (tracker.hasOwnProperty(element)) {
                tracker[element] += 1;
            }
        });

    Object.keys(tracker)
        .sort((a, b) => tracker[b] - tracker[a])
        .forEach((key) => {
            console.log(`${key} - ${tracker[key]}`)
        });
}


solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to'
    , 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])