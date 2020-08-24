function name(arr, arr2) {
    arr.forEach((element) => {
        let inckudes = arr2.includes(element);

        if (inckudes) {
            console.log(element)
        }
    });
}
name(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Peter', 10, 'hey', 4, 'hello', '2'])