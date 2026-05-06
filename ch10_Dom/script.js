let allWannaFirstBe = document.querySelectorAll("#wanna-first")
allWannaFirstBe[0].style.color = "purple"
allWannaFirstBe[0].style.fontSize = "50px"
allWannaFirstBe[1].style.color = "yellow"
allWannaFirstBe[1].style.fontSize = "50px"

for (let i =0; i <=500; i++){
    let firstH1 = document.createElement("h1");
firstH1.innerHTML= i + " Hello World"
firstH1.style.color = "violet"
// let firstP = document.getElementById ("wanna-first")
// document.body.insertBefore(firstH1, firstP)
// document.body.removeChild(firstH1)
document.body.appendChild(firstH1)

}

