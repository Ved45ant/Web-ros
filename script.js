const textColor=["black","#f7bea9","white","purple","white","violet","aqua"]
const backg = ["bg7","bg1","bg2","bg3","bg4","bg5","bg6"]
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
            anchor[i].style.color = "red"
        })
        anchor[i].addEventListener("mouseout",function (){
            anchor[i].style.color = textColor[x-1]
        })
    }
    x++
    if(x==textColor.length){
        x=0
    }
    console.log(x)
   },4000
)
// window.onclick=myFunction;

// active

for (var i = 0; i < anchor.length; i++) {
    anchor[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });

}  

