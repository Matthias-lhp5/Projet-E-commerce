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


test = document.getElementById('test');
selector = document.getElementById('selector');

test.addEventListener('blur', function(){
    console.log(test)
})


var admettonsRecupImg = "assets/img/apple-iphone-11-pro-max.png";
var admettonsRecupName = 'Iphone 11 Pro Max';
var admettonsRecupPrix = 1150;

var recupLignePanier = document.getElementById('recupLignePanier');

console.log(recupLignePanier);

recupLignePanier.innerHTML += 
`<tr>
    <td>${admettonsRecupName}</td>
    <td><img src="${admettonsRecupImg}"></td>
    <td><input></td>
    <td>Iphone</td>
    <td>Iphone</td>
    <td>Iphone</td>
</tr>
`
