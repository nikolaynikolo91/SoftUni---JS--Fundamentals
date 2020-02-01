function solve(arr) {

    let heroes = []
    for (const cmd of arr) {
        let tokens = cmd.split(' / ')
        let heroesName = tokens[0];
        let heroesLevel = Number(tokens[1]);
        let weapons = tokens[2];
        let heroesWeapons = weapons.split(', ');

        let hero = {
            hero: heroesName,
            level: heroesLevel,
            weapon: heroesWeapons.sort()
        };

        heroes.push(hero)

    }

    heroes.sort(function (a, b) {
        return a.level - b.level;
    });

    for (let employee of heroes) {
        console.log(`Hero: ${employee.hero}`)
        console.log(`level => ${employee.level}`)
        console.log(`items => ${employee.weapon.join(', ')}`)

    }


}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])