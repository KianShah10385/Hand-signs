Webcam.set({
    width:350,
    height:345,
    image_format: 'png',
    png_quality:85
});

camera = document.getElementById("camera");

Webcam.attach ('#camera');

function take_snapshot()
{
    Webcam.snap(function(dtat_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src"'+data_uri+'"/>';
    })
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/l_m3FCS-e/model.json',modelLoaded);
function modelLoaded()