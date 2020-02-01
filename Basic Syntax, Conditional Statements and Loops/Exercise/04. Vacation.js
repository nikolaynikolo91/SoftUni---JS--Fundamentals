function vacantion(groupOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0;

    switch (typeOfGroup) {
        case `Students`:
            switch (dayOfWeek) {
                case `Friday`:
                    price += groupOfPeople * 8.45;
                    break;
                case `Saturday`:
                    price += groupOfPeople * 9.80;
                    break;
                case `Sunday`:
                    price += groupOfPeople * 10.46;
                    break;
            }
            if (groupOfPeople >= 30) {
                price *= 0.85;

            }
            console.log(`Total price: ${price.toFixed(2)}`);
            break;

        case `Business`:
            if (groupOfPeople >= 100) {
                groupOfPeople -= 10;
            }
            switch (dayOfWeek) {
                case `Friday`:
                    price += groupOfPeople * 10.90;
                    break;
                case `Saturday`:
                    price += groupOfPeople * 15.60;
                    break;
                case `Sunday`:
                    price += groupOfPeople * 16;
                    break;
            }
            console.log(`Total price: ${price.toFixed(2)}`);
            break;

        case `Regular`:
            switch (dayOfWeek) {
                case `Friday`:
                    price += groupOfPeople * 15;
                    break;
                case `Saturday`:
                    price += groupOfPeople * 20;
                    break;
                case `Sunday`:
                    price += groupOfPeople * 22.50;
                    break;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                price *= 0.95;
            }

            console.log(`Total price: ${price.toFixed(2)}`);
            break;

    }


}



vacantion(40, `Regular`, `Saturday`)


//30,     Total price: {price}
//Students
//Sunday