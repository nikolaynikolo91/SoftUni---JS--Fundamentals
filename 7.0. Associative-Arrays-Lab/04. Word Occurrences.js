function wordOccurrence(input) {
    let myMap = new Map();

    for (const word of input) {
        if (!myMap.has(word)) {
            myMap.set(word, 1)
        } else {
            let oldValue = myMap.get(word);
            let newValue = oldValue + 1;
            myMap.set(word, newValue)
        }
    }

    let sorted = Array.from(myMap).sort((a, b) => b[1] - a[1]);

    for (const item of sorted) {
        let word = item[0];
        let counter = item[1];
        console.log(`${word} -> ${counter} times`)
    }
}

wordOccurrence(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])