function solve(input) {

    let limit = Number(input.slice(0, 1).shift());
    let text = input.slice(1)
    let data = {};

    for (let el of text) {
        let line = el.split('=')
        // console.log(line)

        switch (line[0]) {
            case 'Add':
                if (!data.hasOwnProperty(line[1])) {
                    data[line[1]] = {
                        sent: Number(line[2]),
                        recived: Number(line[3])
                    }
                }
                break;
            case 'Message':

                if (data[line[1]] && data[line[2]]) {
                    data[line[1]].sent++;
                    data[line[2]].recived++;

                    if (data[line[1]].sent + data[line[1]].recived === limit) {
                        delete data[line[1]];
                        console.log(`${line[1]} reached the capacity!`)
                    }
                    if (data[line[2]].sent + data[line[2]].recived === limit) {
                        delete data[line[2]];
                        console.log(`${line[2]} reached the capacity!`)
                    }
                }

                break;
            case 'Empty':
                if (line[1] === 'All') {
                    data = {};
                } else {
                    delete data[line[1]]
                }
                break;
            default:
                break;
        }
        if (line[0] === 'Statistics') {
            break;
        }
    }

    let arr = Object.entries(data);
    let comparator = ((a, b) =>
        b[1].recived - a[1].recived || a[0].localeCompare(b[0]));
    arr = arr.sort(comparator)

    console.log(`Users count: ${arr.length}`);
    arr.forEach(el => {
        console.log(`${el[0]} - ${el[1].sent + el[1].recived}`)
    });

}

solve([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
]
)