document.addEventListener('DOMContentLoaded',function(){
    let squareElement = document.getElementById("square");
    //let squareElement = document.querySelector("#square");
    squareElement.addEventListener("click",()=>{
        alert("OMG YOU CAUGHT ME!");
    });
});