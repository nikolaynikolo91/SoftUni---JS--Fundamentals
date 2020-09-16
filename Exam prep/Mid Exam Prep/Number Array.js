function arreyOfNumbers(arr) {

    let arrInput = arr.shift().split(' ').map(Number);
    let isEnd = false;
    for (const iterator of arr) {
        let command = iterator.split(' ');
        let firstWord = command.shift();
        let secondWord = command.shift();
        let output = [];



        if (isEnd) {
            break;
        }




        switch (firstWord) {
            case 'Switch':
                if (secondWord >= 0 && secondWord <= arrInput.length) {
                    arrInput[secondWord] = -arrInput[secondWord];
                }




                break;
            case 'Change':
                let value = command.shift();
                if (secondWord >= 0 && secondWord < arrInput.length) {
                    arrInput.splice(secondWord, 1, value);
                }

                break;
            case 'Sum':

                switch (secondWord) {
                    case 'Negative':

                        let sumNegative = 0;
                        arrInput.forEach(element => {
                            if (element < 0) {
                                sumNegative += Number(element);
                            }
                        });
                        console.log(sumNegative);

                        break;
                    case 'Positive':
                        let sumPositive = 0;
                        arrInput.forEach(element => {
                            if (element > 0) {
                                sumPositive += Number(element);
                            }
                        });
                        Console.log(sumPositive);

                        break;
                    case 'All':
                        let sumAll = 0;
                        arrInput.forEach(element => {
                            sumAll += Number(element);
                        });
                        console.log(sumAll)

                        break;




                }
            case 'End':
                isEnd = true;

                arrInput.forEach(element => {
                    if (element >= 0) {
                        output.push(element)
                    }

                });
                console.log(output.join(' '));
                break;


        }


    }
}






arreyOfNumbers(['1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End',])

arreyOfNumbers(['1 2 3 4 5',
    'Switch 4',
    'Change 0 -3',
    'Sum Negative',
    'End'])
