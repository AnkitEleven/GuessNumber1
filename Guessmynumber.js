//
var highScore3 = Number(localStorage.getItem('score2'));
document.querySelector(".highscore").textContent = "High Score : " + highScore3;
let a = Math.trunc(Math.random() * 20)+ 1;
let score = 20;
// console.log(a);
document.querySelector(".click").addEventListener("click", function( )
{
    let b = Number(document.querySelector("input").value);
    if(!b)
    {
        document.querySelector(".tryagain").textContent = "Enter a valid number";
        document.querySelector(".guessthenumber").textContent = "Enter a valid number";
    }
    else if(a == b)
    {
        document.querySelector(".tryagain").textContent = "Congratulations";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".guessthenumber").textContent = a;
        score++;
        document.querySelector(".score1").textContent = "Score : " + score;
        document.querySelector(".click").disabled = true;
        
        

if (score > highScore3) {
    highScore3 = score;
    localStorage.setItem('score2', highScore3);
    document.querySelector(".highscore").textContent = "High Score : " + highScore3;
}

// console.log(highScore3);


        
    }
    else if(b < a)
    {

        score--; 
        if(score >0)
        {

            document.querySelector(".score1").textContent = "Score : " + score;
            document.querySelector(".tryagain").textContent = "Too Low";
        }
        else{
            document.querySelector(".tryagain").textContent = "Try Again";
            document.querySelector(".score1").textContent = "Score : " + score;
            document.querySelector(".click").disabled = true;
        }
    }
    else 
    {
        score--;
        document.querySelector(".score1").textContent = "Score : " + score;
        if(score >0)
        {

            document.querySelector(".score1").textContent = "Score : " + score;
            document.querySelector(".tryagain").textContent = "Too High";
        }
        else{
            document.querySelector(".tryagain").textContent = "Try Again";
            document.querySelector(".score1").textContent = "Score : " + score;
          
        }
    }

});

let e = document.getElementById("mybtn").addEventListener("click", function() {
    score = 20;
    a = Math.trunc(Math.random() * 20)+ 1;
    document.querySelector(".guessthenumber").textContent = "?";
        document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".tryagain").textContent = "Lets Play";
    document.querySelector(".score1").textContent = "Score: 20";
    document.querySelector(".click").disabled = false;
    document.querySelector("input").value = ""; // Resetting the input value, assuming it's an input element
});
console.log(e);