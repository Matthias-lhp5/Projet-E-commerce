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


let selectPanier = document.getElementsByClassName('selectPanier');
let selectPanierArray = [... selectPanier];


let selectPriceItem = document.getElementsByClassName('selectPriceItem');
let selectPriceItemArray = [... selectPriceItem];

let affichagePricePanier = document.getElementsByClassName('affichagePricePanier');
let affichagePricePanierArray = [... affichagePricePanier];

selectPanierArray.forEach(element => {  
    
    element.addEventListener('change', function(){

        let selectIndexLigne = selectPanierArray.indexOf(element);
        let selectIndexOption = element.selectedIndex + 1;

        let recupPrixBase = selectPriceItemArray[selectIndexLigne].innerHTML;
        let recupAffichagePrix = affichagePricePanierArray[selectIndexLigne];

        let result = parseInt(selectIndexOption) * parseInt(recupPrixBase);

        recupAffichagePrix.innerHTML = result;
        

    })

    });
    
















































































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