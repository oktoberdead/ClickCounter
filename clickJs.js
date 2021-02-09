
    let but = document.getElementById("button");
    let cnt = document.getElementById("count");
    let dim = document.getElementById("dimmer");

    but.style.left = (window.innerWidth-200)/2 + "px";
    but.style.top = (window.innerHeight-75)/2 + "px";
    

    cnt.style.left = (window.innerWidth-60)/2 + "px";
    cnt.style.top = (window.innerHeight+75)/2 +  "px";
  
   let clicks = 0; 
   
   let canStart = 1;
   let isStarted = 0;
   
   but.onclick = function(){
       if(canStart && !isStarted){
           canStart = 0;
           isStarted = 1;
           clicks++;
           but.style.background = "lime";
           setTimeout(function (){
           
           isStarted = 0;
           but.style.background = "red";
              setTimeout (function (){
                  canStart = 1;
                  clicks = 0;
                  cnt.innerHTML = "";
                  cnt.innerHTML = "0";
                  but.style.background = "lightblue";
              }, 1500);
           }, 5000);
       } else if(isStarted && !canStart ) clicks++;
       
       cnt.innerHTML = "";
       cnt.innerHTML = clicks;
       
   } 
   
but.onmousedown = function(){
	if(canStart || isStarted)
	dim.style.opacity = 0.3;
}

but.onmouseup = function(){
	
	dim.style.opacity = 0;
}


