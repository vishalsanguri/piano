var keybordwhite=["z","x","c","v","b","n","m"]
var keybordblack=["s","d","g","h","j"]
var keys=document.querySelectorAll(".key")
var white=document.querySelectorAll(".key.white")
var black=document.querySelectorAll(".key.black")




function play(e){
        var audio=document.getElementById(e.dataset.value)
        audio.currentTime=0
        audio.play()
}
keys.forEach((e)=>{
    e.addEventListener("click",()=>{play(e)}
    )
})
document.addEventListener("keydown",(e)=>{
    if(e.repeat) return
    var key=e.key
    var whiteindex=keybordwhite.indexOf(key)
    var blackindex=keybordblack.indexOf(key)
    if(whiteindex>-1){
        play(white[whiteindex])
    }
    if(blackindex>-1){
        play(black[blackindex])
    }
})