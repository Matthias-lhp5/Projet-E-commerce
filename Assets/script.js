var lienForTel = document.getElementById('lienForTel');
var lienForAcceuil = document.getElementById('lienForAcceuil');

var contentForTel = document.getElementById('contentForTel');
var contentForAcceuil = document.getElementById('contentForAcceuil');


lienForTel.addEventListener('click', function(){

    contentForAcceuil.classList.remove('visibility');
    contentForTel.classList.add('visibility');

});

lienForAcceuil.addEventListener('click', function(){

    contentForTel.classList.remove('visibility');
    contentForAcceuil.classList.add('visibility');

});



let choixCouleur = document.getElementsByClassName('choixCouleur');
let choixCouleurArray = [... choixCouleur]


choixCouleurArray.forEach(element => {

    element.addEventListener('click', function(){
        console.log(this)
    })
});



var test = document.getElementById('listJsTest');


function clickAjoutPanierItem (){

    let selectStockageTel = document.getElementById('listStockageTel');
    let selectColorTel = document.getElementById('listColorTel');

    let findIndexStockage = selectStockageTel.selectedIndex;
    let findIndexColor = selectColorTel.selectedIndex;

    var recupStringStockage = selectStockageTel[findIndexStockage].innerHTML
    var recupStringColor = selectColorTel[findIndexColor].innerHTML

    console.log(recupStringColor);
    console.log(recupStringStockage);

}