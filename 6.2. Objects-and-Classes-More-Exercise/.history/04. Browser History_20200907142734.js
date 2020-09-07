function browserHistory(objInput, cmdInput) {
    let myObjHistory = Object.assign({}, objInput)

    let cleanObj = {
        "Open Tabs": [],
        "Recently Closed": [],
        "Browser Logs": []
    }

    function removeItemFromArr(arr, item) {
        if (arr.includes(item)) {
            let index = arr.indexOf(item);
            console.log(index)
            arr.splice(index, 1)
        }
        return arr
    }

    for (const cmd of cmdInput) {
        if (cmd === 'Clear History and Cache') {
            myObjHistory = Object.assign(myObjHistory, cleanObj)
        } else {
            let [action, tab] = cmd.split(' ');
            switch (action) {
                case 'Open':
                    myObjHistory['Open Tabs'].push(tab);
                    myObjHistory['Browser Logs'].push(tab);
                    break;
                case 'Close':
                    myObjHistory['Open Tabs'] = removeItemFromArr(myObjHistory['Open Tabs'], tab);
                    myObjHistory['Browser Logs'].push(tab);
                    break;

                default:
                    break;
            }
            // console.log(cmd)
            // console.log(action)
            // console.log(tab)
        }
        //   console.log(action)
    }


    console.log(`${myObjHistory['Browser Name']}`)
    console.log(`Open Tabs: ${(myObjHistory['Open Tabs']).join(', ')}`)
    console.log(`Recently Closed: ${(myObjHistory['Recently Closed']).join(', ')}`)
    console.log(`Browser Logs: ${(myObjHistory['Browser Logs']).join(', ')}`)
}

// browserHistory({
//         "Browser Name": "Mozilla Firefox",
//         "Open Tabs": ["YouTube"],
//         "Recently Closed": ["Gmail", "Dropbox"],
//         "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
//     },
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// )

browserHistory({
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"])