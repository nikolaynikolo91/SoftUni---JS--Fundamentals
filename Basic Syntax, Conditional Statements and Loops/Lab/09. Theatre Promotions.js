function solve (day, age)   {
if (day == `Weekday` ) {
    if (age>=0 && age <=18) {
        let money = 12;
        console.log(money +`$`);
    }
    else if (age>18 && age <=64) {
        let money = 18;
        console.log(money +`$`);
    }
    else if (age>64 && age <=122) {
        let money = 12;
        console.log(money +`$`);
    }
    else {
        console.log(`Error!`);
        
    }
}
else if (day == `Weekend`) {
    if (age>=0 && age <=18) {
        let money = 15;
        console.log(money +`$`);
    }
    else if (age>18 && age <=64) {
        let money = 20;
        console.log(money +`$`);
    }
    else if (age>64 && age <=122) {
        let money = 15;
        console.log(money +`$`);
    }
    else {
        console.log(`Error!`);
        
    }
}
else if (day == `Holiday`) {
    if (age>=0 && age <=18) {
        let money = 5;
        console.log(money +`$`);
    }
    else if (age>18 && age <=64) {
        let money = 12;
        console.log(money +`$`);
    }
    else if (age>64 && age <=122) {
        let money = 10;
        console.log(money +`$`);
    }
    else {
        console.log(`Error!`);
        
    }
}



}
solve (`Weekday`, 42)