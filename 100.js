Webcam.set({
width:400,
height:400,
image_format: 'png',
png_quality:80
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src='+data_uri+'"/>';

    });
}

console.log('ml5 ver', ml5.version);
classoifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-58OZ9UB-/model.json');
function modelLoaded() {
    console.log('model loaded');
}