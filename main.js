canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");

car1_x=300;
car1_y=480;
car1_width=100;
car1_height=120;

car2_x=420;
car2_y=480;
car2_width=100;
car2_height=120;

car1_background="car1.png";
car2_background="car2.png";
canvas_background="racing_track.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = canvas_background;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_background;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_background;
    
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}



function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
       car1_up();
            console.log("up")
    }

    if(keyPressed == '40')
    {
       car1_down();
            console.log("down")
    }

    if(keyPressed == '37')
    {
       car1_left();
            console.log("left")
    }

    if(keyPressed == '39')
    {
       car1_right();
            console.log("right")
    }
    if(keyPressed == '65')
    {
        car2_left();
        console.log("a")
    }

    if(keyPressed == '68')
    {
        car2_right();
        console.log("d")
    }

    if(keyPressed == '83')
    {
        car2_down();
        console.log("s")
    }

    if(keyPressed == '87')
    {
        car2_up();
        console.log("w")
    }
}

function car1_right()
{
    if(car1_x <=700)
    {
      car1_x = car1_x + 10;
      uploadbackground();
      uploadcar1();
      uploadcar2();

    }
}

function car1_left()
{
    if(car1_x >=0)
    {
      car1_x = car1_x - 10;
      uploadbackground();
      uploadcar1();
      uploadcar2();

    }
}

function car1_up()
{
    if(car1_y >=0)
    {
      car1_y = car1_y - 10;
      uploadbackground();
      uploadcar1();
      uploadcar2();

    }
}

function car1_down()
{
    if(car1_y <=500)
    {
      car1_y = car1_y + 10;
      uploadbackground();
      uploadcar1();
      uploadcar2();

    }
}

function car2_right()
{
    if(car2_x <=700)
    {
      car2_x = car2_x + 10;
      uploadbackground();
      uploadcar1();
      uploadcar2();

    }
}

function car2_left()
{
    if(car2_x >=0)
    {
      car2_x = car2_x - 10;
      uploadbackground();
      uploadcar1();
      uploadcar2();

    }
}

function car2_up()
{
    if(car2_y >=0)
    {
      car2_y = car2_y - 10;
      uploadbackground();
      uploadcar1();
      uploadcar2();

    }
}

function car2_down()
{
    if(car2_y <=500)
    {
      car2_y = car2_y + 10;
      uploadbackground();
      uploadcar1();
      uploadcar2();

    }
}