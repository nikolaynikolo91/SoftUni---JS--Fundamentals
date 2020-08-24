function rotate(arr, number) {
    let output = arr.slice();

    
        for (let i = 0; i < number; i++) {
            let firstElement = output.shift();
            output.push(firstElement);

        }
   
    console.log(output.join(' '))
}

rotate([51, 47, 32, 61, 21], 2)