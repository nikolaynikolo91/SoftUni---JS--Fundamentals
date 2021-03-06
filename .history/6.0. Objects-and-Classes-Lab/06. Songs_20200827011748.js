function solve(params) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let arr = params.slice(0);
    let songNumber = arr.shift();
    let arrClasses = [];

    for (let i = 0; i < songNumber; i++) {
        let [type, name, time] = arr.shift().split('_');
        arrClasses.push(new Song(type, name, time));
    }

    let typeList = arr.shift();

    if (typeList == 'all') {
        arrClasses.forEach((i) => console.log(i.name))
    } else {
        let filerArr = arrClasses.filter((x) => x.type == typeList);
        filerArr.forEach((i) => console.log(i.name))
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
])