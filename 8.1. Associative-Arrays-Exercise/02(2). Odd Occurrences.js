function solve(input) {
    let tracker = new Map();
    
    input
    .split(' ')
    .map((word) => word.toLowerCase())
    .forEach(word => {
        if (!tracker.has(word)) {
            tracker.set(word, 0);
        }
        tracker.set(word, tracker.get(word) + 1)
    });

    console.log(Array.from(tracker.keys())
    .filter((key) => tracker.get(key) % 2 === 1)
    .join(' '))
    
    
    
    
    }
    
    solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');