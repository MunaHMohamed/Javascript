function SayMyName (){
    console.log ("Hello "+ "Muna")

}
/* setTimeout(SayMyName,5000) */

let timer = setInterval(SayMyName,1000)

setTimeout (function (){
clearInterval(timer)
},10000)

