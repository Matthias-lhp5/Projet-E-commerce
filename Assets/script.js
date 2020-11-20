var lienForTel = document.getElementById('lienForTel');
var lienForAcceuil = document.getElementById('lienForAcceuil');

var contentForTel = document.getElementById('contentForTel');
var contentForAcceuil = document.getElementById('contentForAcceuil');

contentForAcceuil.classLists


lienForTel.addEventListener('click', function(){

    contentForAcceuil.classList.remove('visibility');
    contentForTel.classList.add('visibility');

    console.log(contentForTel);
    console.log(contentForAcceuil);
});

lienForAcceuil.addEventListener('click', function(){

    contentForTel.classList.remove('visibility');
    contentForAcceuil.classList.add('visibility');

    console.log(contentForTel);
    console.log(contentForAcceuil);
});