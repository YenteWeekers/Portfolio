function pro1(){
    closeall()
    console.log(document.getElementById("infoProject1"));
    document.getElementById("infoProject1").style.display = "grid"



}
function pro2(){
    closeall()
    document.getElementById("infoProject2").style.display = "block"


}
function pro3(){
    closeall()
    document.getElementById("infoProject3").style.display = "block"


}
function pro4(){
    closeall();
    document.getElementById("infoProject4").style.display = "block"


}
function pro5(){
    closeall();
    document.getElementById("infoProject5").style.display = "block"


}

function closeall(){

    document.getElementById("infoProject1").style.display = "none"
    document.getElementById("infoProject2").style.display = "none"
    document.getElementById("infoProject3").style.display = "none"
    document.getElementById("infoProject4").style.display = "none"
    document.getElementById("infoProject5").style.display = "none"

}












