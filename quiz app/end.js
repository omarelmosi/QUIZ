let congrat = document.getElementById("congrat")
let btn = document.querySelector("button")
let h4 = document.querySelector("h4")
if(localStorage.getItem("score") < 21){
    congrat.textContent = "سقطت يا فالح"
}else{
    congrat.textContent = "الله يباركلك يبني"
}
h4.textContent = `النتيجة ${localStorage.getItem("score")} من 42`
btn.onclick = function(e){
    location.assign("./start.html")
}
