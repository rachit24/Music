window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
});

function arrow(){
    document.getElementById("arrows").style.display = "block";
    //document.getElementById("arrow1").style.left = "90%";
    document.getElementById("arrowtxt1").style.left = "76%";
    document.getElementById("arrow2").style.left = "66%";
    document.getElementById("arrowtxt2").style.left = "30%";
    document.getElementById("arrow3").style.left = "21%";
    document.getElementById("arrowtxt3").style.left = "2%";
    document.getElementById("arrowtxt1").style.color = "yellow";
    document.getElementById("arrowtxt2").style.color = "yellow";
    document.getElementById("arrowtxt3").style.color = "yellow";
    //document.getElementById("arrow1").style.color = "white";
    document.getElementById("arrow2").style.color = "white";
    document.getElementById("arrow3").style.color = "white";
    document.getElementById("ps").style.color = "red";
}