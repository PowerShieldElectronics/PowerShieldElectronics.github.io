window.addEventListener("load", function () {
    document.getElementById("importantInfo").classList.add("showInfo");
});

function hideAlert(){
    document.getElementById("importantInfo").classList.remove("showInfo");
    document.getElementById("showAgain").classList.add("showButton");
    document.getElementById("showAgain").id = "showAgainCloseded";
}

function showAlert(){
    document.getElementById("importantInfo").classList.add("showInfo");
    document.getElementById("showAgainCloseded").id = "showAgain";
}