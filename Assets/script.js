
var btnDeletePanier, btnDeletePanierArray, articlePanier, articlePanierArray, choixCouleur, choixCouleurArray, panier, activAddPanier, activAddPanierArray;
var recupImg, recupImgArray, recupName, recupNameArray, recupPrice, recupPriceArray, recupColor, recupColorArray, recupStockage, recupStockageArray;
var contenuArticle, selectPanier, selectPanierArray, selectPriceItem, selectPriceItemArray, affichagePricePanier, affichagePricePanierArray;
var selectPriceFantome, selectPriceFantomeArray, btnDeletePanier, btnDeletePanierArray, articlePanier, articlePanierArray, totalPanier;

function initialisationArray (){
    btnDeletePanier = document.getElementsByClassName('btnDeletePanier');
    btnDeletePanierArray = [... btnDeletePanier];

    articlePanier = document.getElementsByClassName('articlePanier');
    articlePanierArray = [... articlePanier];

    choixCouleur = document.getElementsByClassName('choixCouleur');
    choixCouleurArray = [... choixCouleur];

    panier = document.getElementById('panier');

    activAddPanier = document.getElementsByClassName('activAddPanier');
    activAddPanierArray = [... activAddPanier];

    recupImg = document.getElementsByClassName('imgItems');
    recupImgArray = [... recupImg];

    recupName = document.getElementsByClassName('selectName');
    recupNameArray = [... recupName];

    recupPrice = document.getElementsByClassName('priceItem')
    recupPriceArray = [... recupPrice];

    recupColor = document.getElementsByClassName('choiceColor');
    recupColorArray = [... recupColor];

    recupStockage = document.getElementsByClassName('choiceStockage');
    recupStockageArray = [... recupStockage];

    contenuArticle = document.getElementById('contenuArticle');

    selectPanier = document.getElementsByClassName('selectPanier');
    selectPanierArray = [... selectPanier];

    selectPriceItem = document.getElementsByClassName('selectPriceItem');
    selectPriceItemArray = [... selectPriceItem];

    affichagePricePanier = document.getElementsByClassName('affichagePricePanier');
    affichagePricePanierArray = [... affichagePricePanier];

    selectPriceFantome = document.getElementsByClassName('priceFantome');
    selectPriceFantomeArray = [... selectPriceFantome];

    btnDeletePanier = document.getElementsByClassName('btnDeletePanier');
    btnDeletePanierArray = [... btnDeletePanier];

    articlePanier = document.getElementsByClassName('articlePanier');
    articlePanierArray = [... articlePanier];

    totalPanier = document.getElementById('totalPanier');

}

initialisationArray();


function prixClickPanier(){
    
    let result = 0;

    affichagePricePanierArray.forEach(element => {
        let prixElement = parseInt(element.innerHTML)
        result = result + prixElement;
    });

    totalPanier.innerHTML = `Total : ${result}€`;
}

function test (element){
    let selectIndexLigne = btnDeletePanierArray.indexOf(element);
    let selectLineForDelete = articlePanierArray[selectIndexLigne];
    selectLineForDelete.remove();
}

function myFunction() {
    initialisationArray();

    var x = document.getElementById("snackbar");
    console.log(x);
    if(totalPanier.innerHTML == 'Total : 0€'){
        x.innerHTML = `Votre panier est vide`
    } else{
        x.innerHTML = `Votre panier a bien été validé. Merci de votre commande ! :)`
    }
    
    x.className = "show"
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  }



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


choixCouleurArray.forEach(element => {

    element.addEventListener('click', function(){
        console.log(this)
    })
});


activAddPanierArray.forEach(element => {
    element.addEventListener('click', function(){
        let recupIndex = activAddPanierArray.indexOf(element);
        
        let recupIndexSelectColor = recupColorArray[recupIndex].selectedIndex;
        let recupIndexSelectStockage = recupStockageArray[recupIndex].selectedIndex;
        
        let recupForViewImg = recupImgArray[recupIndex].src;
        let recupForViewName = recupNameArray[recupIndex].innerHTML;
        let recupForViewPrice = recupPriceArray[recupIndex].innerHTML;
        let recupForViewColor = recupColorArray[recupIndex].options[recupIndexSelectColor].innerHTML;
        let recupForViewStockage = recupStockageArray[recupIndex].options[recupIndexSelectStockage].innerHTML;

        console.log(recupForViewColor);
        console.log(recupForViewStockage);

        contenuArticle.innerHTML += 
        `
        <div class="d-flex border-bottom articlePanier justify-content-between">
            <div class="d-flex">
                <img class="imgPanierArticle" src="${recupForViewImg}" alt="">
                <div>
                    <h3>${recupForViewName}</h3>
                    <div class="d-flex">
                        <i>En stock</i>
                        <div class="ml-3 font-weight-bold">
                            <p class="m-0">${recupForViewStockage}</p>
                            <p class="m-0">Couleur : ${recupForViewColor}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div>
                <p class="selectPriceItem affichagePricePanier text-right">${recupForViewPrice}</p>
                <span class="d-none priceFantome">${recupForViewPrice}</span>
                <select name="selectNumberPanier" class="selectPanier d-flex ml-auto">
                    <option class="testScript" value="1">1</option>
                    <option class="testScript" value="2">2</option>
                    <option class="testScript" value="3">3</option>
                    <option class="testScript" value="4">4</option>
                    <option class="testScript" value="5">5</option>
                </select>
                <p class="btn btn-danger d-flex mt-3 btnDeletePanier">Supprimer</p>
            </div>
        </div>
        `

        initialisationArray();


    })
});

// Pour changer le prix des  articles

var clickPanier = document.getElementById('clickPanier');

clickPanier.addEventListener('click', function(){

    selectPanierArray.forEach(element => {  
    
        element.addEventListener('change', function(){
    
            let selectIndexLigne = selectPanierArray.indexOf(element);
            let selectIndexOption = element.selectedIndex + 1;
    
            let recupAffichagePrix = affichagePricePanierArray[selectIndexLigne];
            let recupPriceFantome = selectPriceFantomeArray[selectIndexLigne].innerHTML;
    
            let result = parseInt(selectIndexOption) * parseInt(recupPriceFantome);
    
            recupAffichagePrix.innerHTML = `${result}€`;
            prixClickPanier();
    
        })
        });
    
    // Supprimer un article
    
    btnDeletePanierArray.forEach(element => {
    
        element.addEventListener('click', function(){
            test(element);
            initialisationArray();
            console.log(articlePanierArray);
            prixClickPanier();


        })

        
    });

    prixClickPanier();



})







































































// var recupImg = "assets/img/apple-iphone-11-pro-max.png";
// var recupName = 'Iphone 11 Pro Max';
// var recupPrix = 1150;
// var recupRam = '128go';
// var recupCouleur = 'noir';

// var recupLignePanier = document.getElementById('recupLignePanier');

// // console.log(recupLignePanier);


// const panier = document.getElementById('panier');

// function addPanier (){
//     alert("Votre article a bien été ajouté au panier.");
//     panier.innerHTML += 
//     `
//     <div class="d-flex border-bottom">
//         <div class="d-flex">
//             <img class="imgPanierArticle" src="${recupImg}" alt="">
//             <div>
//                 <h3>${recupName}</h3>
//                 <div class="d-flex">
//                     <i>En stock</i>
//                     <div class="ml-3 font-weight-bold">
//                         <p class="m-0">${recupRam} RAM</p>
//                         <div>
//                             <p class="m-0">Couleur : ${recupCouleur}</p>
//                             <p class="m-0">${recupCouleur}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
    
//         <div class="prixQtqSuppItem">
//             <p class="prixDeBaseItems">${recupPrix}</p>
//             <select name="selectNumberPanier">
//                 <option class="testScript" value="1">1</option>
//                 <option class="testScript" value="2">2</option>
//                 <option class="testScript" value="3">3</option>
//                 <option class="testScript" value="4">4</option>
//                 <option class="testScript" value="5">5</option>
//             </select>
//             <p class="btn btn-success d-flex mt-3 delete-item">Supprimer</p>
//         </div>
//     </div>
//     `

//     priceItemPanier = document.getElementsByClassName('priceItemPanier');
//     priceItemPanierArray = [... priceItemPanier]
//     let priceTotalItems = 0; 

//     priceItemPanierArray.forEach(element => {

//         let priceItem = element.innerHTML;
//         priceTotalItems = parseInt(priceItem) + parseInt(priceTotalItems);

//     });
//     console.log(priceTotalItems);

//     finalPrice = document.getElementById('finalPrice');

//     finalPrice.innerHTML = `${priceTotalItems} €`


// }

// // addEventListener('close')

// // test = document.getElementById('test');
// // let prixDeBaseItems = 1200;
// // let prixAffichagePanier = document.getElementById('prixAffichagePanier');

// // test.addEventListener('change', function(){
// //     let recupNumber = test.selectedIndex + 1;
// //     let newPrice = parseFloat(prixDeBaseItems) * parseFloat(recupNumber);

// //     prixAffichagePanier.innerHTML = `${newPrice}€`;

// // })


// let prixDeBaseItems = document.getElementsByClassName('prixDeBaseItems');

// console.log(prixDeBaseItems);
