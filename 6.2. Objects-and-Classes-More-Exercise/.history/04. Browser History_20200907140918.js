function browserHistory(objInput, cmdInput) {
    let myObjHistory = Object.assign({}, objInput)

    let cleanObj = {
        "Open Tabs": [],
        "Recently Closed": [],
        "Browser Logs": []
    }

    function removeItemFromArr(arr1, item1) {
        let item = 'Facebook';
        let arr = ["Facebook", "YouTube", "Google Translate"];

        

    }

    for (const cmd of cmdInput) {
        if (cmd === 'Clear History and Cache') {
            myObjHistory = Object.assign(myObjHistory, cleanObj)
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
    console.log(myObjHistory['Browser Name'])
}

browserHistory({
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)