function defalultFuntionById(event){
    const baseInputFild = document.getElementById(event);
    const baseInput = baseInputFild.value;
    const num = parseFloat(baseInput);
    return num;
}


function defaultResutbyId(eventResult, arearesult){
    const defaultOutput = document.getElementById(eventResult);
    defaultOutput.innerText = arearesult;
}