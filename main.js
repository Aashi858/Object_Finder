status = "";
name_objects = "";
function preload(){}
function setup(){
    canvas = createCanvas(400,400);
    canvas.position(550,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400);
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",model_loaded);
    document.getElementById("status").innerHTML = " : Dtecting Object";
    name_objects = document.getElementById("object_name").value;
}
function model_loaded(){
    console.log("Model Loaded !");
    status = true;
}