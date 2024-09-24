// js things


// global variables

function hamburgerToggle() {
    var navMenu = document.getElementById("hamburger-nav-links");
    var horizontalBorder = document.getElementById("horizontal-span");

    if (navMenu.style.display == "block") {
        navMenu.style.display = "none";
        horizontalBorder.style.display = "block";

    } else {
        navMenu.style.display = "block";
        horizontalBorder.style.display = "none";
    }
}


// function for support table toggler
function supportTableToggle() {
    var button = document.getElementById("toggler-button");
    var supportTable = document.getElementById("info-table");

    // table is displayed
    if (supportTable.style.display == "block") {
        // hide table
        supportTable.style.display = "none";
        button.innerHTML = "Click for More Info";
    
    } else {
        // show table
        supportTable.style.display = "block";
        button.innerHTML = "Click to Hide Info";
    }
}
 
// function for business info page
function buttonClick() {
    var button = document.getElementById("btn")
    button.addEventListener('mousedown', function(e){
        setTimeout(function(){
            button.style.backgroundColor = "#F17300"
        }, 500)
    })
}