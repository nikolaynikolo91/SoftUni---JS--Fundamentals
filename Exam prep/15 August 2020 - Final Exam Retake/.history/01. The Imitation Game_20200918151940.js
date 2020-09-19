function solve(input) {
    let myStr = input.slice(0, 1);

    for (const line of input.slice(1)) {
        let [cmd, index, value] = line.split('|');
        console.log(cmd)

    }
}

solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])