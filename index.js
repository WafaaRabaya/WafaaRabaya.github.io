function myFunction() {
  alert("Welcome to Wafaa site, please let me know if you have any questions");
}



document.getElementById("workExperince").onmouseover = function() {mouseOver()};
document.getElementById("workExperince").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("education").style.color = "Green";
    document.getElementById("educationTitle").style.color = "Green";

}

function mouseOut() {
  document.getElementById("education").style.color = "black";
    document.getElementById("educationTitle").style.color = "black";

}




function printCv() { 
  document.getElementById("cvprint").innerHTML = window.print() ;
}

