function solve(input) {
    let criptedObj = {};

    let text = input.slice();

    cmd = text.shift().split(':')

    while (cmd[0] !== 'end') {
        let artist = cmd[0];
        let song = cmd[1];

        let artistRegExp = /^([A-Z][a-z]+[ ]?['[a-z]+[ \']?[a-z]+[ \']?[a-z]+)$/;
        let songRegExp = /^([A-Z]+[ ]?[A-Z]+[ ]?[A-Z]+)$/;

        let artixtValid = artistRegExp.test(artist);
        let songValid = songRegExp.test(song)

        if (artixtValid && songValid) {
            let arrOfArtist = artist.match(artistRegExp);
            let arrOfSong = song.match(songRegExp);
            let arrArtist = arrOfArtist.slice(1);
            let arrSong = arrOfSong.slice(1);

            let key = 0;

            for (let el of arrArtist) {
                let splited = el.split('')
                let cripted = splited.reduce((accumulator, currentValue, inx, arr) => {

                    let code = currentValue.charCodeAt(0);
                    key = arr.length
                    let newCode = code + key;
        
                    if (code === 32) {
                        accumulator = accumulator + ' ';
                    } else if (code === 39) {
                        accumulator = accumulator.concat("'");
                    } else if (code >= 97 && code <= 122) {
                        newCode = code + key;
                        if (newCode > 122) {
                            newCode = newCode - 26;
                        }
                        accumulator = accumulator.concat(String.fromCharCode(newCode));
        
                    } else if (code >= 65 && code <= 90) {
                        newCode = code + key;
                        if (newCode > 90) {
                            newCode = newCode - 26;
                        }
                        accumulator = accumulator.concat(String.fromCharCode(newCode));
                    }
        
                    return accumulator
                }, '')
                criptedObj.name = cripted;
            }
            for (let el of arrSong) {
                let splited = el.split('')
                let cripted = splited.reduce((accumulator, currentValue, inx, arr) => {

                    let code = currentValue.charCodeAt(0);
                    let newCode = code + key;
        
                    if (code === 32) {
                        accumulator = accumulator + ' ';
                    } else if (code === 39) {
                        accumulator = accumulator.concat("'");
                    } else if (code >= 97 && code <= 122) {
                        newCode = code + key;
                        if (newCode > 122) {
                            newCode = newCode - 26;
                        }
                        accumulator = accumulator.concat(String.fromCharCode(newCode));
        
                    } else if (code >= 65 && code <= 90) {
                        newCode = code + key;
                        if (newCode > 90) {
                            newCode = newCode - 26;
                        }
                        accumulator = accumulator.concat(String.fromCharCode(newCode));
                    }
        
                    return accumulator
                }, '')
                criptedObj.song = cripted;
            }



console.log(`Successful encryption: ${criptedObj.name}@${criptedObj.song}`)
            //console.log(criptedObj)
            //console.log(arrOfArtist[0])
            // console.log(arrOfSong[0])
        } else (
            console.log('Invalid input!')
        )



        cmd = text.shift().split(':')
    }


}
solve([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    "Guns n'roses:NOVEMBER RAIN",
    'Christina Aguilera: HuRt',
    'end'
  ]

)
//z'daeqe@ZAHQYNQD DMUZ