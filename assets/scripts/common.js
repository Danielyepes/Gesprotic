// brand section 

var brand = '<a href="index.html">' +
    ' <img src="assets/img/tipografia.png" alt = "Logo Gesprotic" class="img-responsive logo" >' +
    '</a>';

$(".brand").html(brand);
// menu 

var menu = '<li>' +
    '<a href="https://www.unicartagena.edu.co" target="_blank" style="background:white">' +
    '<img id="university" class="img-responsive" src="assets/img/logotipo-oficial-unicartagena.png" alt="">' +
    '</a>' +
    '</li>' +
    '<li>';
if (window.location.pathname.endsWith("ce.html"))
    menu += '<a href="alcance.html" class="active">';
else
    menu += '<a href="alcance.html">';

menu += '<i class="lnr lnr-chart-bars"></i>' +
    '<span>Gestión del Alcance</span>' +
    '</a>' +
    '</li>' +
    '<li>';
if (window.location.pathname.endsWith("po.html"))
    menu += '<a href="tiempo.html" class="active">';
else
    menu += '<a href="tiempo.html">';

menu += '<i class="lnr lnr-clock"></i> <span>Gestión del tiempo</span>' +
    '</a>' +
    '</li>' +'<li>';
if (window.location.pathname.endsWith("es.html"))
    menu += '<a href="costes.html" class="active">';
else
    menu += '<a href="costes.html">';
menu += '<i class="lnr lnr-diamond"></i> <span>Gestión de costes</span>' +
    '</a>' +
    '</li>' +
    '<li>';
if (window.location.pathname.endsWith("os.php"))
    menu += '<a href="riesgos.html" class="active">';
else
    menu += '<a href="riesgos.html">';
menu += '<i class="lnr lnr-warning"></i> <span>Gestión de riesgos</span>' +
    '</a>' +
    '</li>';

$("#menu").html(menu);

let footer = '<div class="container-fluid">' +
    '<p class="copyright">&copy; 2018' +
    '<a href="#"> Gesprotic</a>. Daniel A. Yepes Ahumedo.</p>' +
    '</div>';
$("footer").html(footer);

$(".navbar-right").html("")