
let randomNum = Math.trunc(Math.random()* 20 + 1)
console.log(randomNum)

let btn = document.querySelector(".btn1")
let input = document.querySelector("#text")
let text = document.querySelector(".head3")
let GuessNum = document.querySelector(".guess")
let theBody = document.querySelector("body")
let head4 = document.querySelector(".head4")
let score = 20

btn.addEventListener("click" , check)

function check(){
    if (input.value < randomNum){
        text.textContent = "📈too low"
        head4.textContent = `Score: ${--score}`
        // console.log(head4.textContent = --score)
    }
    else if (input.value> randomNum){
        text.textContent = "📉too high"
        head4.textContent = `Score: ${--score}`

    }
    else  {
          text.textContent= "🎉Correct Number"
           if(input.value == randomNum){
            GuessNum.textContent =randomNum
            document.querySelector(".head5").textContent = `High Score: ${score}`
            theBody.style.backgroundColor = "green"
        } 
    }
   
}