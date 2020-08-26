function solve(name, area, population, country, postCode) {

    const city = {
        name,
        area,
        population,
        country,
        postCode
    };
    const props = Object.keys(city);
    props.forEach(function (el) {
        console.log(`${el} -> ${city[el]}`)
    });


}
solve('Sofia', 492, 1238438, 'Bulgaria', 1000);