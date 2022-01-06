function setup()
{
    canvas= createCanvas(550,550);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(550, 500);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log('poseNet is initialized');
    
}

function draw()
{
    background('#e6e6fa');
    text('Block_o_Bean',50,400);
    fill('#d8bfd8');
}