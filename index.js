(function app(){
    
    "use strict";

    
    var genererValeurCouleur = function () {

    var ol = document.getElementById("liste");
    var li = document.createElement("li");
    var changeCouleur = document.getElementById("change-couleur");
    var defaultVal = changeCouleur.defaultValue;
    var choisirCouleur = changeCouleur.value;
    var nombreDiv = document.getElementById("number").value;
    console.log(nombreDiv);






    if (defaultVal == choisirCouleur) {

        ol.innerHTML = "La valeur par default et celle choisis par vous sont les mêmes: " +
            changeCouleur.defaultValue + " and " + changeCouleur.value +
            "<br>Changer la couleur pour voir la difference!"
    } else {
        ol.innerHTML = "La valeur par default est : " + defaultVal +
            "<br>Le code Hexadécimale de votre couleur selectionné est : " + choisirCouleur
    }
}











var creerDiv = function () {

    var nombreDiv = document.getElementById("number").value;
    var changeCouleur = document.getElementById("change-couleur");
    var defaultVal = changeCouleur.defaultValue;
    var choisirCouleur = changeCouleur.value;



     var genererDiv = document.createElement("div");
    genererDiv.style.width = "50px";
    genererDiv.style.height = "50px";
    genererDiv.style.margin = "10px";
    genererDiv.style.background = choisirCouleur;
    genererDiv.style.border = "2px solid black";
    genererDiv.classList.add("select");
    
 

    var divParent = document.getElementById("parent");
    divParent.appendChild(genererDiv);

}








var submit = function submit (x){
    
    
x.addEventListener("click", function () {

    var nombreDiv = document.getElementById("number").value;
    genererValeurCouleur(); 
    
    for (let i = 0; i < nombreDiv; i += 1) {
        creerDiv();
    }

})
 
}   
    
    
    
    var start = function start () {
        
        var btn = document.getElementById("bouton");
        submit(btn);
        console.log('DOM READY !!!');
        
    }
    window.addEventListener("DOMContentLoaded", start);
    
    
}())




