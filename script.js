console.log("wWelcome to Tic Tac Toe");
let music= new audio("game.mp3")
let audioturn= new audio("click.wqv")
let gameover= new audio("game over.wav")
let turn="x"
const changeturn=()=>{
    return turn==="x"?"0": "x"
}
const checkwin=()=>{

}
let boxes=document.getelementsbyclassname("box");
Array.from(boxes).foreach(element=>{
let boxtext=document.querySelector('.boxtext')
element.addeventlistner('click'(boxtext)=>)
if(boxtext.innertext==''){
    boxtext.innertext=turn;
    changeturn();          
    audioturn.play()  
    checkwin();     
    document.getelementsbyclassname("info")[0].innertext="turn for "+turn;                                                            
}
})