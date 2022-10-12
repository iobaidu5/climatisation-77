
$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
});

const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}






$('.concernent').hide();
$('.besoin').hide();
$('.logement').hide();
$('.areaId').hide();
$('.appointment').hide();
$('.details').hide();
$('.metier').hide();
$('.nature').hide();
$('.application').hide();
$('.besion').hide();
$('.climatisation-show').hide();
$('.ventillation-show').hide();
$('.chauffage-show').hide();



$('#Particulier').click(function () {
    $('.concernent').show('slow');
    $('.etes').hide('slow');
});

$('#Professionnel').click(function () {
    $('.metier').show('slow');
    $('.etes').hide('slow');
});

$('.matier').click(function () {
    $('.nature').show('slow');
    $('.metier').hide('slow');
});

$('.helmet').click(function () {
    $('.application').show('slow');
    $('.nature').hide('slow');
});

$('.tertaire').click(function () {
    $('.besion').show('slow');
    $('.application').hide('slow');
});

$('#climatisationbtn').click(function () {
    $('.climatisation-show').show('slow');
    $('.besion').hide('slow');
});

$('#ventilation').click(function () {
    $('.ventillation-show').show('slow');
    $('.besion').hide('slow');
});

$('#chauffage').click(function () {
    $('.chauffage-show').show('slow');
    $('.besion').hide('slow');
});

$('.votre-maison').click(function () {
    $('.besoin').show('slow');
    $('.concernent').hide('slow');
});

$('.votre-appartement').click(function () {
    $('.besoin').show('slow');
    $('.concernent').hide('slow');
});

$('.climatisation').click(function () {
    $('.logement').show('slow');
    $('.besoin').hide('slow');
});

$('.electrique').click(function () {
    $('.areaId').show('slow');
    $('.logement').hide('slow');
});



$('.split').click(function () {
    $('.areaId').show('slow');
    $('.climatisation-show').hide('slow');
});


$('.split-c').click(function () {
    $('.areaId').show('slow');
    $('.chauffage-show').hide('slow');
});


$('.split-v').click(function () {
    $('.areaId').show('slow');
    $('.ventillation-show').hide('slow');
});

$('#area').click(function () {
    $('.appointment').show('slow'); 
    $('.areaId').hide('slow');
});

$('#matterbtn').click(function () {
    $('.details').show('slow'); 
    $('.appointment').hide('slow');
});

$('#week').click(function () {
    $(this).addClass("btn-active")
});

$('#month').click(function () {
    $(this).addClass("btn-active")
});

$('#matter').click(function () {
    $(this).addClass("btn-active")
});
