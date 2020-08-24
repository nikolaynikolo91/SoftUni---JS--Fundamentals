function isPrime(num) {
    let result = function (num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    console.log(result(num))
}

isPrime(4)