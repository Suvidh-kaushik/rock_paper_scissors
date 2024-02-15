let us=0;
let cs=0;

var compchoice;

function computerchoice(){
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return options[index];
}


    const choices=document.querySelectorAll(".choice");
    choices.forEach(choice=>{
        choice.addEventListener("click",()=>{
   const userchoice=choice.getAttribute("id");
   playgame(userchoice,compchoice=computerchoice());
        })
    })
    
    function playgame(userchoice,compchoice){
        if(userchoice=="rock"){
            if(compchoice=="rock"){
                      us++;
                      cs++;
            }
            if(compchoice=="paper"){
            cs++;
            }
            if(compchoice=="scissors"){
                    us++;
            }

        }
        if(userchoice=="paper"){
            if(compchoice=="rock"){
us++;
            }
            if(compchoice=="paper"){
                us++;
                cs++;
            }
            if(compchoice=="scissors"){
                    cs++;
            }

        }
        if(userchoice=="scissors"){
            if(compchoice=="rock"){
                 cs++;
            }
            if(compchoice=="paper"){
            us++;
            }
            if(compchoice=="scissors"){
                us++;
                cs++;   
            }

        }

        updatescore(userchoice);
    }


    function updatescore(userchoice){
        document.getElementById("user-score").innerHTML=us;
        document.getElementById("comp-score").innerHTML=cs;
        document.querySelector("#last_comp").innerHTML=compchoice;
        document.querySelector("#last_user").innerHTML=userchoice;
    }



    function returntozero(){
        cs=0;
        us=0;
        document.querySelector("#user-score").innerHTML="0";
        document.querySelector("#comp-score").innerHTML="0";
        document.querySelector("#last_comp").innerHTML="welcome";
        document.querySelector("#last_user").innerHTML="welcome";
    }