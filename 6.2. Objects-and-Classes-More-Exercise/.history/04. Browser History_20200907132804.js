function browserHistory(objInput, cmdInput) {
    let myObjHistory = {
        ...objInput
    };


    for (const cmd of cmdInput) {
        console.log(cmd)
    }


    console.log(myObjHistory['Open Tabs'])
}

browserHistory({
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)