//css 
//bug var. tıklananı hemen kapatıyor bazen.

const cardArray = [
    {name:"bir",
    img:"bir.png"},
    {name:"bir",
    img:"bir.png"},

    {name:"iki",
    img:"iki.png"},
    {name:"iki",
    img:"iki.png"},
    
    {name:"uc",
    img:"uc.png"},
    {name:"uc",
    img:"uc.png"}
]

const cards = document.querySelector('#cards') //div
var scoreElement = document.getElementById("score")
var score = 0
scoreElement.innerHTML = "Score: " + String(score);
let clickedNames = []
let tiklananlar = []
cardArray.sort(() => Math.random() - 0.5)

function createGrid(){
    for(i=0; i<cardArray.length; i++){
        var imgElement = document.createElement("img")
        imgElement.setAttribute("src","white.jpg")
        imgElement.setAttribute("id",i)
        cards.appendChild(imgElement)
        imgElement.addEventListener("click", flipCard)
    } 
}


function check(){
    const cards = document.querySelectorAll("img")
    const id1 = Number(tiklananlar[0])
    const id2 = Number(tiklananlar[1])
    const firstCard = cards[id1] 
    const secondCard = cards[id2]

    if (! (id1==id2)){ //if user did not click to the same image twice
    if (clickedNames[0] == clickedNames[1]){
        
        console.log("found a match.")
        firstCard.setAttribute("src", "black.jpg")
        secondCard.setAttribute("src", "black.jpg")
        firstCard.removeEventListener("click",flipCard)
        secondCard.removeEventListener("click", flipCard)
        score += 10
        scoreElement.innerHTML = "Score: " + String(score)

        if(score>=30){
            alert("You won! Your score is 30!");
        }
    }

    else{
        console.log("try again")
        firstCard.setAttribute("src", "white.jpg")
        secondCard.setAttribute("src", "white.jpg")
    }
    tiklananlar = [];
    clickedNames = [];
}
}


function flipCard(e){     
    const cardId = this.getAttribute("id")
    tiklananlar.push(cardId)
    clickedNames.push(cardArray[cardId].name)
    this.setAttribute("src",cardArray[cardId].img)   

    if(tiklananlar.length >= 2){
        setTimeout(check, 500)}
    }


createGrid()












