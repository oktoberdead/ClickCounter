
    let but = document.getElementById("button");
    let cnt = document.getElementById("count");
	let tim = document.getElementById("tm");
	let cps = document.getElementById("persec");
	let resT = document.getElementById("resTable");
	let r, g, b, a;

	let timeLeft;
	let clickspersec;
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

	let words = ["Yeah!", "Like that!", "Ooh!", "Jeez..", "Come on!", "Fantastic!", "Cool!", "Nice!", "Woah!", "Much fast!","Very speed!", "So quick!"];

    but.style.left = (window.innerWidth-300)/2 + "px";
    but.style.top = (window.innerHeight-160)/2 + "px";
    

    cnt.style.left = (window.innerWidth-60)/2 + "px";
    cnt.style.top = (window.innerHeight-38)/2 +  "px";

    tim.style.left = (window.innerWidth-25)/2 + "px";
    tim.style.top = (window.innerHeight-202)/2 +  "px";

    cps.style.left = (window.innerWidth-140)/2 + "px";
    cps.style.top = (window.innerHeight+27)/2 +  "px";    


    resT.style.left = (window.innerWidth-140)/2 + "px";
    resT.style.top = (window.innerHeight+70)/2 +  "px";    
  
   let clicks = 0; 
   
   let canStart = 1;
   let isStarted = 0;
   
   let res = [];
   let temp;
   let n = 0;
   for(let i = 0; i < 15; i++){
   	temp = document.createElement("div");
   	if(i%3!=0){
   	 temp.id = "result" + n;
   	 res[n] = temp;
   	 n++;
   	} else temp.innerHTML = i/3 + 1;
   	temp.style.border = "1px solid gray";
   	resT.append(temp);

   }







   but.onclick = function(){
       if(canStart && !isStarted){
       	clickspersec = 0;
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
           tim.innerHTML = "0";
            a = 1;
 			r = 255; b = 0; g = 0;
           but.style.background = "rgba(" + r + "," + g + "," + b + "," + a + ")";
           but.innerHTML = "Wait a bit..";
           clickspersec = (clicks/5).toFixed(1);
			cps.innerHTML = "Per second: " + clickspersec;
			for(let i = 9; i > 1; i--){
	res[i].innerHTML = res[i-2].innerHTML;

}
res[0].innerHTML = clicks;
res[1].innerHTML = clickspersec;
if(clicks > 76) alert("You freaking donkey, don't you dare!");

              setTimeout (function (){
              	tim.innerHTML = "?";



                  canStart = 1;
                  clicks = 0;
                  cnt.innerHTML = "";
                  cnt.innerHTML = "0";
                  cps.innerHTML = "Per second: ?";
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
		clickspersec = (clicks/(5-timeLeft/10)).toFixed(1)
		cps.innerHTML = "Per second: " + clickspersec;
		setTimeout(timer, 100);
	}
}
