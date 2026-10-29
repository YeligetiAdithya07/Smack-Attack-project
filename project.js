document.body.style.justifyContent="center";
document.body.style.display="flex";
document.body.style.gap="10px";
let img1="https://i.pinimg.com/originals/b1/ae/ab/b1aeab2635cb89b90499477b7e0d2ad7.jpg";
document.body.style.backgroundImage=`url(${img1})`;
document.body.style.backgroundSize="cover";
let card=document.createElement("div");
card.style.display="flex";
card.style.flexDirection="column"
card.style.justifyContent="center";
card.style.alignItems="center";
card.style.border="2px solid";
card.style.backgroundColor="rgb(221, 245, 227)";
card.style.borderRadius="15%";
card.style.height="auto";
card.style.width="600px";
document.body.append(card);

let titletag=document.createElement("h1");
titletag.innerText="SMACK ATTACK";
titletag.style.color="rgb(72,161,116)";
titletag.style.marginBottom="0px";
card.appendChild(titletag);

let score =0;


let scoreh=document.createElement("h2");
scoreh.innerText="score: "+score;
scoreh.style.display="";
scoreh.style.marginBottom="0px";
card.appendChild(scoreh);

let timeh =document.createElement("h2");
timeh.innerText="Time: 30s";
timeh.style.marginBottom="0px";
card.appendChild(timeh);

let startbtn=document.createElement("button");
startbtn.style.borderRadius="3%";
startbtn.style.border="1px";
startbtn.style.backgroundColor="rgb(72, 161, 116)"
startbtn.style.height="50px";
startbtn.style.width="250px";
startbtn.innerText="START GAME";
startbtn.style.fontWeight="700";
startbtn.style.fontSize="20px";
startbtn.style.color="white";
startbtn.style.marginTop="0px";
card.appendChild(startbtn);

let mdiv=document.createElement("div");
mdiv.style.display="grid";
mdiv.style.gridTemplateColumns="repeat(3,1fr)";
// mdiv.style.gridTemplateRows="repeat(3,1fr)";
mdiv.style.marginTop="30px";
mdiv.style.padding="10px";
mdiv.style.marginBottom="30px";
// mdiv.style.border="2px solid";
mdiv.style.borderRadius="15%";
mdiv.style.height="400px";
mdiv.style.width="400px";
mdiv.style.gap="5px";
card.appendChild(mdiv);

let div=[];
for(let i=0;i<=8;i++){
    div[i]=document.createElement("div");
    div[i].style.border="4px solid rgb(185, 130, 75)";
    div[i].style.height="120px";
    div[i].style.width="120px";
    div[i].style.borderRadius="50%";
    div[i].style.backgroundColor="rgb(96, 55, 25)"
    div[i].className="hole";
    // div[i].style.marginLeft="10px";
    // div[i].style.marginTop="10px";
    // div[i].style.padding="10px";
    mdiv.appendChild(div[i]);
}
 
let img =document.createElement("img");
img.style.width="100%";
img.style.height="100%";
img.style.borderRadius="50%"
img.src="https://cdn.pixabay.com/photo/2023/10/18/10/28/mole-8323641_1280.jpg";

let holes=document.querySelectorAll(".hole");  
let rI=0;


let gameRunning=false;
let timeleft =30;
let timer;
let moletime;
// if(gameRunning === false){
//     return;
// }


// timer 
function starttimer(){
     timer=setInterval(()=>{
        timeleft--;
        timeh.innerText="Time: " + timeleft + "s";
        if(timeleft<=0){
            clearInterval(timer);
            gameRunning=false;
            startbtn.innerText="Play again";
            alert("Game Over! your score: "+ score);
        }
     },1000);
}


startbtn.onclick=()=>{
    if(gameRunning){
        return;
    }

    gameRunning=true;
    timeleft=30;
    timeh.innerText="Time: 30s";
    score=0;
    scoreh.innerText="score: "+score;
    startbtn.innerText="Game running";

    starttimer();

    moletime=setInterval(()=>{
        if(!gameRunning){
            return;
        }
        rI =Math.floor(Math.random()*holes.length);
        holes[rI].appendChild(img);
    },1000);
};
// click for hole
  holes.forEach((hole,index)=>{
    hole.onclick=function(){

        if(!gameRunning){
            return;
        }
    if(index === rI && hole.contains(img)){   //
        score++;
        scoreh.innerText="score: "+score;

        rI =Math.floor(Math.random()*holes.length);
        holes[rI].appendChild(img);
    }
};

 });




