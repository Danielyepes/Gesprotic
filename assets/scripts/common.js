// brand section 

var brand = '<a href="index.html">'+
    ' <img src="assets/img/tipografia.png" alt = "Logo Gesprotic" class="img-responsive logo" >'+
                '</a>';

             $(".brand").html(brand);
// menu 

var menu = '<li>' +
    '<a href="alcance.html" class="active">' +
    '<i class="lnr lnr-chart-bars"></i>' +
    '<span>Gestión del Alcance</span>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a href="tiempo.html" class="active">' +
    '<i class="lnr lnr-clock"></i> <span>Gestión del tiempo</span>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a href="costes.html" class="active">' +
    '<i class="lnr lnr-diamond"></i> <span>Gestión de costes</span>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a href="riesgos.html" class="active">' +
    '<i class="lnr lnr-warning"></i> <span>Gestión de riesgos</span>' +
    '</a>' +
    '</li>';

$("#menu").html(menu);

let footer = '<div class="container-fluid">'+
				'<p class="copyright">&copy; 2018'+
					'<a href="#">Gesprotic</a>. All Rights Reserved.</p>'+
				'<a href="https://www.unicartagena.edu.co" target="_blank">'+
					'<img id="university" class="img-responsive" src="assets/img/logotipo-oficial-unicartagena.png" alt="">'+
				'</a>'+
            '</div>';
$("footer").html(footer);