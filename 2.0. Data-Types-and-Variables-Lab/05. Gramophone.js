function solve(bandName, albumName, songName) {
    let time = (String(albumName).length * String(bandName).length) * (String(songName).length) / 2
    let rotation = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotation} times.`)
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')