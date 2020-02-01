function solve(arr) {

    //  let arrOutput = [] ;
    //  for (let element of arr) {
    //      if (!arrOutput.includes(element)) {
    //          arrOutput.push(element)
    //      }
    // }
    //  console.log(arrOutput.join(' '));

//}

// -----------------------------

    let result = arr.filter(geDistinctElement);
    
    function geDistinctElement(element, index, arr) {
        return arr.indexOf(element) === index
        
    }
    console.log(result.join(' '));
}
                solve(
                    [7, 8, 9, 7, 2, 3,
                        4, 1, 2]);