function preload() {
mustache = loadImage("https://i.postimg.cc/85jTMYSy/mustache.png");
}

noseX = 0
noseY = 0
function setup() {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function take_a_snapshot() {
    save('YouWithAMustache.png');
}

function modelLoaded() {
    console.log("The PoseNet has loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
    console.log(results) ;   
    console.log("X = " + results[0].pose.nose.x);
    console.log("Y = " + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x-20;
    noseY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 45,45);
}