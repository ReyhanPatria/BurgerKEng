$(document).ready(function() {

    let canvas = document.getElementById("canvas");
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;

    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "#000000b1";

    let img = document.getElementById("ss_logo");

    let intervalid;
    let x = 0;
    let y = 0;
    let boxW = 50;
    let boxH = 70;
    let vx = 1;
    let vy = 1;

    function render(){
        if (document.body.scrollWidth != canvas.width || document.body.scrollHeight != canvas.height) {
            canvas.width = document.body.scrollWidth;
            canvas.height = document.body.scrollHeight;
            x = 0;
            y = 0;
            vx = 1;
            vy = 1;
            ctx.fillStyle = "#000000b1";
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, x , y+window.scrollY, boxW, boxH);
        x+=vx;
        y+=vy;

        if(x+boxW >= window.innerWidth || x <=0){
            console.log("x = " + x);
            vx*=-1;
        }

        if(y+boxH >= window.innerHeight || y <=0){
            console.log("y = " + y);
            vy*=-1;
        }

    }
    
    var mousetimeout;
    var screensaver_active = false;
    var idletime = 5;
    
    function show_screensaver(){
        // $('#screensaver').fadeIn();
        $('#canvas').fadeIn( ()=> {
            intervalid = setInterval(render, 1000/60);
        }); 
        screensaver_active = true;
        screensaver_animation();
    }
    
    function stop_screensaver(){
        // $('#screensaver').fadeOut();
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
        }, 1000 * idletime); // 5 secs			
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
        }
    }

});

