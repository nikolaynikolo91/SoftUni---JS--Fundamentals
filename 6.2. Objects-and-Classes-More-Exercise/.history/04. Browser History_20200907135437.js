function browserHistory(objInput, cmdInput) {
    let myObjHistory = Object.assign({}, objInput)


    for (const cmd of cmdInput) {
        if (cmd === 'Clear History and Cache') {


        } else {
            let [action, tab] = cmd.split(' ');
            switch (action) {
                case 'Open':
                    myObjHistory['Open Tabs'].push(tab)
                    break;
                case 'Close':

                    break;

                default:
                    break;
            }
            console.log(cmd)
            console.log(action)
            console.log(tab)
        }
        //   console.log(action)
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