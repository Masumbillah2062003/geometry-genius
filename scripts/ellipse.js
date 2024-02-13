document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipseA = defalultFuntionById('ellipse-a');
    const ellipseB = defalultFuntionById('ellipse-b');

    const area = 3.1416 * ellipseA * ellipseB;

    defaultResutbyId('ellipse-area-span', area);
    defaultResutbyId('area-result', area)
});