function solve(arr1, arr2) {

    let availableProducts = restock(arr1, {});
    let afterDelivery = restock(arr2, availableProducts);

    for(let product of Object.keys(afterDelivery)) {
    console.log(`${product} -> ${afterDelivery[product]}`)
    }

    function restock(arr, obj) {
        for (let i = 0; i < arr.length; i += 2) {

            const products = arr[i];
            const quantity = Number(arr[i + 1]);

            if (!obj.hasOwnProperty(products)) {
                obj[products] = quantity;
            }
            else {
                obj[products] += quantity;
            }
        }
        return obj;
    }

}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'])