class Song {
    constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
    }


}

function solve(params) {

    let arr = params.slice(0);
    let songNumber = arr.shift();
    let arrClasses = [];

    for (let i = 0; i < songNumber; i++) {
        arrClasses.push(new Song(arr.shift()))
    }

    console.log(arrClasses)
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
])