function rectAngleBtn(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleBase = rectangleWidthInput.value;
    const width = parseFloat(rectangleBase);


    const rectangleHeightInput = document.getElementById('reactangle-height');
    const rectangleHeight = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeight);

    
    const area = width * height;

    const areaSpan = document.getElementById('rectangle-area-span');
    areaSpan.innerText = area;

    const areaResut = document.getElementById('area-result');
    areaResut.innerText = area;
}