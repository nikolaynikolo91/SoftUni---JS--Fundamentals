function solve([sizeOfaSize, numberSheetPaper, singleSheetCover]) {

    let boxVolume = Number(sizeOfaSize * sizeOfaSize * 6);
    let coverArea = 0;

    for (let i = 1; i <= Number(numberSheetPaper); i++) {
        if (i % 3 === 0) {
            coverArea = coverArea + (0.25 * Number(singleSheetCover));
        }
        else {
            coverArea += Number(singleSheetCover);
        }

    }
    let total = (coverArea * 100 )/ boxVolume;

    console.log(`You can cover ${total.toFixed(2)}% of the box.`)

}
solve([2.5, 32, 4.25])