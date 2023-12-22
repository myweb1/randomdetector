var videocarga = false
var resultadodecimal = 0
function setup() {
    canvas = createCanvas(640, 480);
    video = createCapture(VIDEO); canvas.center()
    video.hide();
    identificadordeimg3000 = ml5.objectDetector("cocossd", oki)
}
function oki() {
    console.log("okey xd")
    videocarga = true
}
function draw() {
    image(video, 0, 0, 640, 480);
    identificadordeimg3000.detect(video, queso)
}

function queso(error, resultados) {
    if (!error && resultados[0]) {
        console.log(resultados)
        document.getElementById("obj").innerHTML = resultados[0].label
        resultadodecimal = Math.round( resultados [0].confidence * 100) 
        document.getElementById("pres").innerHTML = resultadodecimal
    }
}