function solve(objInput, cmdInput) {

    // let obj = JSON.parse(objInput)
    let a = {
        ...objInput
    }

    console.log(a)
    console.log(cmdInput)
}

solve({
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)