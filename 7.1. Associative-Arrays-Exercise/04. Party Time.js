function solve(input) {
    let partyList = {
        vip: [],
        regular:[]
    };

    let indexOfParty = input.indexOf('PARTY');
    let guestList = input.slice(0, indexOfParty)
    let peopleCames = input.slice(indexOfParty + 1)

    for (let guest of guestList) {
        if (Number.isInteger((+guest[0]))) {
            partyList.vip.push(guest);
        } else {
            partyList.regular.push(guest);
        }

    }
    for (let guest of peopleCames) {
        if (partyList.vip.includes(guest)) {
            let guestIndex = partyList.vip.indexOf(guest);
            partyList.vip.splice(guestIndex, 1);

        } else if (partyList.regular.includes(guest)) {
            let regularIndex = partyList.regular.indexOf(guest);
            partyList.regular.splice(regularIndex, 1)
        }
    }

    console.log(partyList.vip.length + partyList.regular.length);
    partyList.vip.forEach((guest) => console.log(guest));
    partyList.regular.forEach((guest) => console.log(guest));
    
}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])