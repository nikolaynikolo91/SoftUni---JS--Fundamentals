function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let outprint = parseFloat(number.toFixed(precision));
    console.log(outprint);
}