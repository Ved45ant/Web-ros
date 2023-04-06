const textColor=["white","aqua","purple","#ffd700","#000080","aqua"]
const backg = ["bg1","bg2","bg3","bg4","bg5","bg6"]
let x=0;

const anchor = document.getElementsByTagName("a");

setInterval(
function myFunction() {
    document.body.className=backg[x]
    document.getElementsByClassName("container")[0].style.color = textColor[x];
    for(let i=0;i<anchor.length;i++){
        anchor[i].style.color=textColor[x]
        anchor[i].style.color=textColor[x]
        anchor[i].addEventListener("mouseover",function (){
            anchor[i].style.color = "black"
        })
        anchor[i].addEventListener("mouseout",function (){
            anchor[i].style.color = textColor[x-1]
        })
    }
    x++
    if(x==textColor.length){
        x=0
    }
    // console.log(x)
   },4000
)
// window.onclick=myFunction;

// active

// for (var i = 0; i < anchor.length; i++) {
//     anchor[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });

// }  



const bars=document.getElementById("bars");

function nav(){
    document.getElementsByClassName("nav-ul")[0].classList.toggle('mobileview');
    // document.getElementsByClassName("nav-ul")[0].style.display='block' 
}
bars.onclick=nav



const cards=document.querySelectorAll(".card")
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
    entry.target.classList.toggle("show", entry.isIntersecting)

})
})
cards.forEach(card => {
    observer.observe(card)
})

const d=new Date()
const hour=d.getHours()
if (hour>5&&hour<12) {
    document.getElementById("greet").innerHTML='Good Morning,'
}
else if (hour>=12&&hour<17) {
    document.getElementById("greet").innerHTML='Good Afternoon,'
}
else if (hour>=17&&hour<22) {
    document.getElementById("greet").innerHTML='Good Evening,'
}
else{
    document.getElementById("greet").innerHTML='HEY,'
    
}