$(document).ready(function() {

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.strokeStyle = "blue";

    let img = new Image();
    img.src = "logo.png";
    img.onload = () => {
        ctx.drawImage(img,100,150);
        // setInterval(render,1000/60);
        // let data = ctx.getImageData();
    }
    let intervalid;
    let x = 0;
    let y = 0;
    let boxW = 100;
    let boxH = 150;
    console.log("hai " + window.innerWidth+ "   " + window.innerHeight);
    let canvasWidth = canvas.width;
    let canvasHeight =  canvas.height;
    let vx = 1;
    let vy = 1;

    // requestAnimationFrame(render);

    $(window).bind("resize", function(){
        var w = $(window).width();
        var h = $(window).height();
    
        $("#canvas").css("width", w + "px");
        $("#canvas").css("height", h + "px"); 
    });

    $("#canvas")[0].webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); //Chrome
    // $("#canvas")[0].mozRequestFullScreen(); //Firefox

    function render(){
        // console.log("BUITCH");
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        ctx.strokeRect(0,0,canvasWidth,canvasHeight);
        // ctx.fillRect(x,y,boxW,boxH);
        ctx.drawImage(img,x,y,boxW,boxH);
        x+=vx;
        y+=vy;

        console.log("x = " + x);
        console.log("y = " + y);

        if(x+boxW >= canvasWidth || x <=0){
            vx*=-1;
        }
        if(y+boxH >= canvasHeight || y <=0){
            vy*=-1;
        }


    }
    
    var mousetimeout;
    var screensaver_active = false;
    var idletime = 5;
    
    function show_screensaver(){
        // console.log("hai");
        $('#screensaver').fadeIn();
        $('#canvas').fadeIn( ()=> {
            console.log("tesksjfoijadf");
            intervalid = setInterval(render,1000/60);
        }); 
        screensaver_active = true;
        screensaver_animation();
    }
    
    function stop_screensaver(){
        $('#screensaver').fadeOut();
        $('#canvas').fadeOut( ()=>{
            clearInterval(intervalid);
        }); 
        screensaver_active = false;
    }
    
    $(document).click(function(){
        clearTimeout(mousetimeout);
        
        if (screensaver_active) {
            stop_screensaver();
        }
    
        mousetimeout = setTimeout(function(){
            show_screensaver();
        }, 500 * idletime); // 5 secs			
    });
    
    $(document).mousemove(function(){
        clearTimeout(mousetimeout); 

        if (screensaver_active) {
            stop_screensaver();
        }
    
        mousetimeout = setTimeout(function(){
            show_screensaver();
        }, 1000 * idletime); // 5 secs			
    });
    
    function screensaver_animation(){
        if (screensaver_active) {
            $('#screensaver').animate(screensaver_animation);
            // setInterval(render,1000/60);
            // requestAnimationFrame(render);
        }
    }

});

