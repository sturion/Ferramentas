function meterToFootCalc () {   
    var meter = document.getElementById('meterConv').value;
    var footaux = meter/0.3048;
    var foot = Math.trunc(footaux)
    document.getElementById('footConv').value = foot;

    var inchaux = (meter%0.3048)/0.0254;
    var inch = inchaux.toFixed(0);
    document.getElementById('inchConv').value = inch;

    console.log(foot,inch)
} 