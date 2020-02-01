function solve(input) {

    let text = input.slice(1);
   // let rgx = /^(.+)>([\d]+)\|([a-z]+)\|([A-Z]+)\|([^<>]+)<\1$/;
    let rgx = /^(.+(?!\<\>))>([\d]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1$/

    for (let line of text) {

        if (rgx.test(line)) {
            let machArr = line.match(rgx)
            let output = machArr.slice(2,6);

            console.log(`Password: ${output.join('')}`)

        } else {
            console.log("Try another password!");
        }
    }
}

solve([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
])