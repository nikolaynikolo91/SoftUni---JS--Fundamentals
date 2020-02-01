function taskPlaner([arr]) {

    let tasks = arr[0].split(' ').map(Number);
    let allComands = arr.slice(1);
    let dropedCounter = 0;
    let compleCounter = 0;
    let incompleteCounter = 0;


    for (let i = 0; i < allComands.length; i++) {
        let comandsArr = allComands[i].split(' ');

        let [comand, index, time] = [comandsArr[0], comandsArr[1], comandsArr[2]];

        if (comand === 'Complete') {
            tasks.splice(Number(index), 1, 0)
        }
        else if (comand === 'Change') {
         
            tasks.splice(Number(index), 1, Number(time))
          
        }
        else if (comand === 'Drop') {
            tasks.splice(Number(index), 1, -1)

        }
        else if (comand === 'Count') {
            if (index === 'Dropped') {
                tasks.forEach((el, index, ) => {
                    if (el < 0) {
                        dropedCounter++;
                    }
                });
                console.log(dropedCounter)

            }
            else if (index === 'Completed') {
                tasks.forEach((el, index, ) => {
                    if (el === 0) {
                        compleCounter++;
                    }
                });
                console.log(compleCounter)

            }
            else if (index === 'Incomplete') {
                tasks.forEach((el, index, ) => {
                    if (el >= 1 && el <= 5 ) {
                        incompleteCounter++;
                    }
                });
                console.log(incompleteCounter)
            }
        }
        else if (comand === 'End') {

            let output = [];
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i] >=1 && tasks[i] <=5) {
                    output.push(tasks[i])
                }

            }


            console.log(output.join(' '))
            break;
        }
    }

}


taskPlaner(['1 2 3 -18 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 0 1',
    'Count Incomplete',
    'End'])
