 class Cat {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
    }
}


function solve (arr) {
       arr.forEach(function(el){
       let [name, age] = el.split(' ');
       let cat = new Cat(name, age);
       console.log(cat.name)
       cat.meow();
    });
}

solve()