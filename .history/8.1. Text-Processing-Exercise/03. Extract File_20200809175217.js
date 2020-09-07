function solve (path) {

   let indexTo = path.lastIndexOf('\\');
    let fullName =path.substr(indexTo + 1);
    let indexOfPoint =fullName.lastIndexOf('.');
    let fileName = fullName.substr(0, indexOfPoint);
    let fileExtend =fullName.substr(indexOfPoint +1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtend}`)

}
solve ('C:\\Internal\\training-internal\\Template.http.pptx')