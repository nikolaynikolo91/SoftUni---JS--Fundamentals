function bombNumbers(sequence, bombInfo) {

    const bombNumber = bombInfo[0];
    const bombPower = bombInfo[1];

    const bombIndex = sequence.indexOf(bombNumber); //3

    while (bombIndex !== - 1) {

        sequence.splice(bombIndex + 1, bombPower); //remove right range number

        let startIndex = bombIndex - bombPower;

        if (startIndex >= 0) {

            sequence.splice(bombIndex - bombPower), bombPower + 1; //remove left range number
        }

        console.log(sequence.reduce((a, b) => a + b, 0))

    }
}
bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9], // 1, 2, 9
    [4, 2])

   //ne reshena