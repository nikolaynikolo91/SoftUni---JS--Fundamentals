function solve (arr) {
    
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    
    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        let [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name,age));
        
    }

    for (const iterator of cats) {
        iterator.meow();
    }
}

solve(['Mellow 2','Tom 5']
)
