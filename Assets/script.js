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




const panier = document.getElementById('panier');

let activAddPanier = document.getElementsByClassName('activAddPanier');
let activAddPanierArray = [... activAddPanier];

let recupImg = document.getElementsByClassName('imgItems');
let recupName = document.getElementsByClassName('selectName');


activAddPanierArray.forEach(element => {
    element.addEventListener('click', function(){
        let recupIndex = element.selectedIndex;
        console.log(element);
    })
});







function addPanier (){

    let selectStockageTel = document.getElementById('listStockageTel');
    let selectColorTel = document.getElementById('listColorTel');

    let findIndexStockage = selectStockageTel.selectedIndex;
    let findIndexColor = selectColorTel.selectedIndex;

    let recupStringStockage = selectStockageTel[findIndexStockage].innerHTML;
    let recupStringColor = selectColorTel[findIndexColor].innerHTML;

    // A changer quand on récup les élements
    let recupName = 'Iphone 12 Pro Max';
    let recupImg = 'assets/img/iphone12ProMax.jpeg';
    let recupPrix = 1200.00;

    console.log(recupStringColor);
    console.log(recupStringStockage);

    alert("Votre article a bien été ajouté au panier.");


    panier.innerHTML += 
    `
    <div class="d-flex border-bottom mt-3">
        <div class="d-flex">
            <img class="imgPanierArticle" src="${recupImg}" alt="">
            <div>
                <h3>${recupName}</h3>
                <div class="d-flex">
                    <i>En stock</i>
                    <div class="ml-3 font-weight-bold">
                        <p class="m-0">${recupStringStockage}</p>
                        <div>
                            <p class="m-0">Couleur : ${recupStringColor}</p>
                            <p class="m-0">${recupStringColor}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="prixQtqSuppItem">
            <p>${recupPrix}€</p>
            <select name="selectNumberPanier">
                <option class="testScript" value="1">1</option>
                <option class="testScript" value="2">2</option>
                <option class="testScript" value="3">3</option>
                <option class="testScript" value="4">4</option>
                <option class="testScript" value="5">5</option>
            </select>
            <p class="btn btn-success d-flex mt-3 delete-item">Supprimer</p>
        </div>
    </div>
    `
}
