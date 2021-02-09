	let date = new Date();
    let but = document.getElementById("button");
    let cnt = document.getElementById("count");
	let tim = document.getElementById("tm");
	let cps = document.getElementById("persec");

	let r, g, b, a;

	let timeLeft;

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

	let words = ["Yeah!", "Like that!", "Ooh!", "Jeez..", "Come on!", "Fantastic!", "Cool!", "Nice!", "Woah!", "Much fast!","Very speed!", "So quick!"];

    but.style.left = (window.innerWidth-300)/2 + "px";
    but.style.top = (window.innerHeight-60)/2 + "px";
    

    cnt.style.left = (window.innerWidth-60)/2 + "px";
    cnt.style.top = (window.innerHeight+62)/2 +  "px";

    tim.style.left = (window.innerWidth-25)/2 + "px";
    tim.style.top = (window.innerHeight-102)/2 +  "px";

    cps.style.left = (window.innerWidth-100)/2 + "px";
    cps.style.top = (window.innerHeight+126)/2 +  "px";    
  
   let clicks = 0; 
   
   let canStart = 1;
   let isStarted = 0;
   
   but.onclick = function(){
       if(canStart && !isStarted){
 			a = 1;
 			r = 0; b = 0; g = 255;
           canStart = 0;
           isStarted = 1;
           timeLeft = 50;
           clicks++;
           timer();
           but.innerHTML = words[rand(0, 11)];
           but.style.background = "rgba(" + r + "," + g + "," + b + "," + a + ")";
           setTimeout(function (){
           
           isStarted = 0;
           tim.innerHTML = "";
            a = 1;
 			r = 255; b = 0; g = 0;
           but.style.background = "rgba(" + r + "," + g + "," + b + "," + a + ")";
           but.innerHTML = "Wait a bit";
              setTimeout (function (){
                  canStart = 1;
                  clicks = 0;
                  cnt.innerHTML = "";
                  cnt.innerHTML = "0";
                   	a = 1;
 					r = 173; g = 216; b = 230; 
                  but.style.background = "rgba(" + r + "," + g + "," + b + "," + a + ")";
                  but.innerHTML = "Click me!";
              }, 1500);
           }, 5000);
       } else if(isStarted && !canStart ){
        but.innerHTML = words[rand(0, 9)];
        clicks++;
       }
       cnt.innerHTML = "";
       cnt.innerHTML = clicks;
       
   } 
   
but.onmousedown = function(){
	if(canStart || isStarted)
		a = 0.5;
		 but.style.background = "rgba(" + r + "," + g + "," + b + "," + a + ")";

}

but.onmouseup = function(){
		
		a = 1;
		 but.style.background = "rgba(" + r + "," + g + "," + b + "," + a + ")";

}


function timer(){
	if(isStarted){
		timeLeft--;
		tim.innerHTML = timeLeft/10;
		cps.innerHTML = "Per second: " + (clicks/(5-timeLeft/10)).toFixed(1);
		setTimeout(timer, 100);
	}
}
