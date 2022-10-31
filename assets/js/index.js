
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

$('.metierBack').click(function () {
    $('.etes').show('slow');
    $('.metier').hide('slow');
});

$('.concernentBack').click(function () {
    $('.etes').show('slow');
    $('.concernent').hide('slow');
});




$('.helmet').click(function () {
    $('.application').show('slow');
    $('.nature').hide('slow');
});

$('.natureBack').click(function () {
    $('.metier').show('slow');
    $('.nature').hide('slow');
});

$('.applicationBack').click(function () {
    $('.nature').show('slow');
    $('.application').hide('slow');
});

$('.besionBack').click(function () {
    $('.application').show('slow');
    $('.besion').hide('slow');
});

$('.besion-Back').click(function () {
    $('.concernent').show('slow');
    $('.besoin').hide('slow');
});

$('.logementBack').click(function () {
    $('.besoin').show('slow');
    $('.logement').hide('slow');
});

$('.climatisationBack').click(function () {
    $('.besion').show('slow');
    $('.climatisation-show').hide('slow');
});

$('.areaBack').click(function () {
    $('.climatisation-show').show('slow');
    $('.areaId').hide('slow');
});



$('.tertaire').click(function () {
    $('.besion').show('slow');
    $('.application').hide('slow');
});

$('#climatisationbtn').click(function () {
    $('.climatisation-show').show('slow');
    $('.besion').hide('slow');
});

$('.appointmentBack').click(function () {
    $('.areaId').show('slow');
    $('.appointment').hide('slow');
});

$('.detailsBack').click(function () {
    $('.appointment').show('slow');
    $('.details').hide('slow');
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
    $('#month').removeClass("btn-active")
    $('#matter').removeClass("btn-active")
});

$('#month').click(function () {
    $(this).addClass("btn-active")
    $('#week').removeClass("btn-active")
    $('#matter').removeClass("btn-active")
});

$('#matter').click(function () {
    $(this).addClass("btn-active")
    $('#week').removeClass("btn-active")
    $('#month').removeClass("btn-active")
});