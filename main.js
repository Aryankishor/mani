noseX=0;
noseY=0
leftWristX=0;
rightWristX=0;
differnce=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,100);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw()
{
    background("#969A97");
    fill("#800080");
    stroke("#800080");
   text("aryan",noseX,noseY, differnce);
   document.getElementById("square_sides").innerHTML="width and height of a square will be=" + differnce +  " px ";
   
}
function modelLoaded()
{
    console.log("posenet is intialized!");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+ noseX + ", noseY= "+ noseY);
        
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        differnce=floor(leftWristX-rightWristX);
    }

}
