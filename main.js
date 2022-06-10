moustache_x=0;
moustache_y=0;
function preload() {    
    moustache = loadImage('https://i.postimg.cc/DZx6B0y7/png-clipart-moustache-moustache-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(video, 0, 0, 300, 300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(moustache, moustache_x, moustache_y, 60, 45);
}

function take_snapshot() {
    save('myFilterPicture.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x: "+ results[0].pose.nose.x);
        moustache_x = results[0].pose.nose.x-30;
        console.log("nose y: " +  results[0].pose.nose.y);
        moustache_y = results[0].pose.nose.y;

    }
}

