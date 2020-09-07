function solve(input) {

    let movies = [];

    for (const iterator of input) {
        let tokens = iterator.split(' ')

        if (tokens[0] === 'addMovie') {
            let filmName = tokens.slice(1).join(' ');
            movies.push({ name: filmName });
        }
        else if (tokens.includes('directedBy')) {

            let directedByIndex = tokens.indexOf('directedBy');
            let filmName = tokens.slice(0, directedByIndex).join(' ');

            const film = movies.find((o) => o.name === filmName);

            if (film) {
                let directorName = tokens.slice(directedByIndex + 1).join(' ');
                film.director = directorName;
            }
        }
        else if (tokens.includes('onDate')){
            let onDateIndex = tokens.indexOf('onDate');
            let filmName = tokens.slice(0, onDateIndex).join(' ');

            const film = movies.find((o) => o.name === filmName);

            if (film){
                let date = tokens.slice(onDateIndex + 1).join('')
                film.date = date;
            }   
        }
    }
   // console.log(movies)
    const filteredMovies =movies.filter((movie) => Object.keys(movie).length === 3);

   // console.log(filteredMovies)
    //console.log(movies)
    for (const film of filteredMovies) {
       console.log(JSON.stringify(film));
        
  }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford',
    'Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])