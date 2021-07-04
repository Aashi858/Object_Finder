status = "";
name_objects = "";
objects = [];
canvas = "";
function preload(){}
function setup(){
    canvas = createCanvas(400,400);
    canvas.position(550,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400);
    if(status != ""){
        objectDetector.detect(video,got_results);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = " Object Detected";
            percentage = floor(objects[i].confidence * 100);
            fill(33, 101, 228);
            text(objects[i].label + " " + percentage + "%", objects[i].x , objects[i].y + 10 );
            noFill()
            stroke(33, 101, 228);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            if(name_objects = objects[i].label){
                document.getElementById("detected").innerHTML = name_objects + " is detected";
                canvasLiveView.stop();
                objectDetector.detect(got_results);
                var synth = window.speechSynthesis;
                speak_data = name_objects + " is detected" ;
                var utterThis = new SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis);
            }
        }
    }
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",model_loaded);
    document.getElementById("status").innerHTML = " : Detecting Object";
    name_objects = document.getElementById("object_name").value;
}
function model_loaded(){
    console.log("Model Loaded !");
    status = true;
}
function got_results(error,results){
    if(error){
        console.error("error");
    }
    else{
        console.log(results);
        objects = results;
    }
}