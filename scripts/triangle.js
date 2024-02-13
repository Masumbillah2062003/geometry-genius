document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBase = triangleBaseInput.value;
    //console.log( typeof triangleBase); //typeof string;
    const base = parseFloat(triangleBase); //now typeof number;
    // console.log(base)

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeight = triangleHeightInput.value;
    const height = parseFloat(triangleHeight);
    // console.log(height);


    const area = 0.5 * base * height;
    
    const areaP = document.getElementById('area-span');
    areaP.innerHTML = area;
    const areaResut = document.getElementById('area-result');
    areaResut.innerHTML = area;
})