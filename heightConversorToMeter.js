function footToMeterCalc() {

    var n1 = document.getElementById('footConv').value;
    var n2 = document.getElementById('inchConv').value;
    var meterValue = (n1*0.3048)+(n2*0.0254)
    document.getElementById('meterConv').value = meterValue.toFixed(2);



}