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
if (window.location.pathname.endsWith("ce.php"))
    menu += '<a href="alcance.php" class="active">';
else
    menu += '<a href="alcance.php">';

menu += '<i class="lnr lnr-chart-bars"></i>' +
    '<span>Gestión del Alcance</span>' +
    '</a>' +
    '</li>' +
    '<li>';
if (window.location.pathname.endsWith("po.php"))
    menu += '<a href="tiempo.php" class="active">';
else
    menu += '<a href="tiempo.php">';

menu += '<i class="lnr lnr-clock"></i> <span>Gestión del tiempo</span>' +
    '</a>' +
    '</li>' +'<li>';
if (window.location.pathname.endsWith("es.php"))
    menu += '<a href="costes.php" class="active">';
else
    menu += '<a href="costes.php">';
menu += '<i class="lnr lnr-diamond"></i> <span>Gestión de costes</span>' +
    '</a>' +
    '</li>' +
    '<li>';
if (window.location.pathname.endsWith("os.php"))
    menu += '<a href="riesgos.php" class="active">';
else
    menu += '<a href="riesgos.php">';
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