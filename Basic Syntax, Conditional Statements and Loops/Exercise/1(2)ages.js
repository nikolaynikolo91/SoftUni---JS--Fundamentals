function solve(age) {
    let a = "";
    if (age >= 66) {
        a = `elder`;
        console.log(a);
    }
    else if (age >= 20 && age <= 65) {
        a = `adult`;
        console.log(a);
    }
    else if (age >= 14 && age <= 19) {
        a = `teenager`;
        console.log(a);
    }
    else if (age >= 3 && age <= 13) {
        a = `child`;
        console.log(a);
    }
    else if (age >= 0 && age <= 2) {
        a = `baby`;
        console.log(a);

    }
}
