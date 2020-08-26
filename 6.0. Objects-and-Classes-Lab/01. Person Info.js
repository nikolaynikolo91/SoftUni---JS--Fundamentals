function personalInfo(firstName, lastName, age) {
    const person = {
        firstName,
        lastName,
        age
    };


    let entries = Object.entries(person);

    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
personalInfo('Nikolay', 'Nikolov', 28);



