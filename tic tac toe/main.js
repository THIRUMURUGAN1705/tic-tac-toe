let startingPage=document.querySelector("#startingPage");
let choose=document.querySelectorAll(".choose");
let mainPage=document.querySelector(".mainPage");
let showChange=document.querySelector(".showChange");
let box=document.querySelectorAll(".box");
let winningPage=document.querySelector(".winningPage");
let winner=document.querySelector(".winner");
let win=document.querySelector(".win");
let playAgain=document.querySelector(".playAgain");

let changeTurn=false;

choose.forEach(chooseNow =>{
        chooseNow.addEventListener("click",()=>{
            if(chooseNow.id === "playerX")
            {
                changeTurn=false;
                showChange.style.left="0px";
            }
            else
            {
                changeTurn=true;
                showChange.style.marginLeft="240px";
            }
            startingPage.style.display="none";
            mainPage.style.display="block";
        })
    })


box.forEach(items =>
    {
        items.addEventListener("click",()=>
        {
            if(changeTurn==false)
            {
                items.innerHTML=`<i class="fa fa-times"></i>`;
                items.id="X";
                items.style.pointerEvents ="none";
                showChange.style.marginLeft="50%";
                changeTurn=true;
            }
            else
            {
                items.innerHTML=`<i class="fa fa-play"></i>`;
                items.id="O";
                items.style.pointerEvents="none";
                showChange.style.marginLeft="0px";
                changeTurn=false;
            }
            winningFunc();
            drawFunc();
        })
    }
    )

let winningCombinations=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let winningFunc = () =>
{
    for(let a = 0 ; a <= 8; a++)
       {
            let b = winningCombinations[a];

            if(box[b[0]].id== "" || box[b[1]].id== "" || box[b[2]].id== "" ){
                continue;
            }
            else if(box[b[0]].id== "X" && box[b[1]].id== "X" && box[b[2]].id== "X" )
            {
                //console.log("X is the winner");
                mainPage.style.display="none";
                winningPage.style.display="block";
                winner.innerHTML="Player X";
            }
            else if(box[b[0]].id== "O" && box[b[1]].id== "O" && box[b[2]].id== "O" )
            {
                //console.log("O is the winner");
                mainPage.style.display="none";
                winningPage.style.display="block";
                winner.innerHTML="Player O";
            }
            else
            {
                continue;
            }
        }
}

let drawFunc = () =>
{
    if(box[0].id != "" && box[1].id != "" && box[2].id != "" && box[3].id != "" && box[4].id != "" && box[5].id != "" && box[6].id != "" && box[7].id != "" && box[8].id != "" )
    {
        mainPage.style.display="none";
        winningPage.style.display="block";
        win.innerHTML="Match Die";
    }
}

playAgain.addEventListener ("click" ,()=>
{
    window.location.reload();
})