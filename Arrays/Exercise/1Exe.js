function name(arr) {
    sumOrig = 0;
    sumModi = 0;

    for (const item of arr) {
        sumOrig += +item;
        
    }
    arr.forEach(el, idx, arr => {
        if (el % 2 == 0) {
            el = Number(el + inx);
        }
        else {
            el = Number(el - inx);
        }
        sum += +el;

    });
    console.log(arr);
    console.log(sumOrig);
    console.log(sumModi);
}
name([5, 15, 23, 56, 35])