function solve(size) {
    let chestBoard = `<div class="chessboard">`;

    for (let i = 0; i < size; i++) {
        chestBoard += '\n' + `  <div>`;

        if (i % 2 == 0) {
            for (let y = 1; y <= size; y++) {

                if (y % 2 == 0) {
                    chestBoard += '\n' + '     <span class="white"></span>';
                } else {
                    chestBoard += '\n' + '     <span class="black"></span>';
                }
            }
        } else {
            for (let y = 1; y <= size; y++) {
                if (y % 2 == 1) {
                    chestBoard += '\n' + '     <span class="white"></span>';
                } else {
                    chestBoard += '\n' + '     <span class="black"></span>';
                }
            }
        }

        chestBoard += '\n' + '</div>';

    }

    chestBoard += '\n' + '</div>';
    console.log(chestBoard)
}

solve(4)