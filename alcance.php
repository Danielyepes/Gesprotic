<!doctype html>
<html lang="es">

<head>
	<title>Gesprotic</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

	<!-- VENDOR CSS -->
	<link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/vendor/linearicons/style.css">
	<link rel="stylesheet" href="assets/vendor/chartist/css/chartist-custom.css">

	<link rel="stylesheet" href="assets/css/fastselect.min.css">

	<!-- MAIN CSS -->
	<link rel="stylesheet" href="assets/css/main.css">

	<!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
	<link rel="stylesheet" href="assets/css/demo.css">

	<!-- ICONS -->
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">
</head>

<body onload="requirementList()">
	<!-- WRAPPER -->
	<div id="wrapper">

		<!-- NAVBAR -->
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="brand">
				<a href="index.html">
					<!-- <img src="assets/img/logo-dark.png" alt="Klorofil Logo" class="img-responsive logo"> -->
					<x class="logo">GESPROTIC</x>
				</a>
			</div>
			<div class="container-fluid">
				<div class="navbar-btn">
					<button type="button" class="btn-toggle-fullwidth">
						<i class="lnr lnr-arrow-left-circle"></i>
					</button>
				</div>
				<div id="navbar-menu">
					<ul class="nav navbar-nav navbar-right">
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								<img src="assets/img/user.png" class="img-circle" alt="Avatar">
								<span>username</span>
								<i class="icon-submenu lnr lnr-chevron-down"></i>
							</a>
							<ul class="dropdown-menu">
								<li>
									<a href="#">
										<i class="lnr lnr-user"></i>
										<span>My Profile</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="lnr lnr-envelope"></i>
										<span>Message</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="lnr lnr-cog"></i>
										<span>Settings</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="lnr lnr-exit"></i>
										<span>Logout</span>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<!-- END NAVBAR -->

		<!-- LEFT SIDEBAR -->
		<div id="sidebar-nav" class="sidebar">
			<div class="sidebar-scroll">
				<nav>
					<ul class="nav" id="menu">
						<li class="active">
							<a href="alcance.html">
								<i class="lnr lnr-chart-bars"></i>
								<span>Gestión del Alcance</span>
							</a>
						</li>
						<li>
							<a href="index-2.html">
								<i class="lnr lnr-clock"></i>
								<span>Gestión del tiempo</span>
							</a>
							</a>
						</li>
						<li>
							<a href="index-2.html">
								<i class="lnr lnr-diamond"></i>
								<span>Gestión de costes</span>
							</a>
							</a>
						</li>
						<li>
							<a href="index-2.html">
								<i class="lnr lnr-warning"></i>
								<span>Gestión de riesgos</span>
							</a>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<!-- END LEFT SIDEBAR -->

		<!-- MAIN -->
		<div class="main">

			<!-- MAIN CONTENT -->
			<div class="main-content">
				<div class="container-fluid">
					<!-- OVERVIEW -->
					<div class="row">
						<h4 class="titulo">
							<strong>Gestión del Alcance</strong>
						</h4>
						<div class="card-header border-bottom-0 bg-transparent">
							<ul class="nav nav-tabs justify-content-center pt-4" id="pills-tab" role="tablist">
								<li class="nav-item active">
									<a class="nav-link text-primary" id="pills-req-tab" data-toggle="pill" href="#pills-req" role="tab"
									 aria-controls="pills-login" aria-selected="false">
										<i class="lnr lnr-list"></i> Requisitos</a>
								</li>
								<li class="nav-item">
									<a class="nav-link text-primary" id="pills-def-tab" data-toggle="pill" href="#pills-def" role="tab"
									 aria-controls="pill-def" aria-selected="true">
										<i class="fa fa-arrows"></i> Definición del Alcance</a>
								</li>
								<li class="nav-item">
									<a class="nav-link text-primary" id="pills-activity-tab" data-toggle="pill" href="#pills-activity" role="tab"
									 aria-controls="pills-register" aria-selected="false">
										<i class="lnr lnr-chart-bars"></i> Gestión del actividades</a>
								</li>
							</ul>
						</div>
						<div class="card-body">
							<div class="tab-content" id="pills-tabContent">
								<div class="tab-pane fade active in" id="pills-req" role="tabpanel" aria-labelledby="pills-req-tab">
									<div class="card-header border-bottom-0 bg-transparent">
										<ul class="nav nav-tabs justify-content-center pt-4" id="pills-tab" role="tablist">
											<li class="nav-item active">
												<a class="nav-link text-primary" id="req-details-tab" data-toggle="pill" href="#req-details" role="tab"
												 aria-controls="pill-def" aria-selected="true">
													<i class="fa fa-arrows"></i>Requisito</a>
											</li>
											<li class="nav-item">
												<a class="nav-link text-primary" id="pills-requirements-tab" data-toggle="pill" href="#pills-requirements" role="tab"
												 aria-controls="pills-register" aria-selected="false">
													<i class="lnr lnr-chart-bars"></i> Gestión de Requisitos </a>
											</li>
										</ul>
									</div>
									<div class="card-body">
										<div class="tab-content" id="pills-tabContent">
											<div class="tab-pane fade active in" id="req-details" role="tabpanel" aria-labelledby="req-details-tab">
												<div class="col-sm-8">
													<form class="validate-form" method="POST">
														<h4>
															<strong>Nombre del Requisito
																<span></span>
															</strong>
														</h4>
														<input type="text" class="form-control" name="nombre_req" id="nombre_req" placeholder="Nombre del Requisito"
														 required>
														<br>
														<h4>
															<strong>Descripción del Requisito
																<span></span>
															</strong>
														</h4>
														<textarea class="form-control" name="descripcion_req" id="descripcion_req" placeholder="Descripción del Requisito"
														 required></textarea>
														<br />
														<h4>
															<strong>Criterio de aceptación</strong>
														</h4>
														<input type="text" class="form-control" name="criterio_acept_req" id="criterio_acept_req" placeholder="Criterio de aceptación"
														 required>
														<br>
														<h4>
															<strong>Metrica de aceptación</strong>
														</h4>
														<input type="text" class="form-control" name="metrica_acept_req" id="metrica_acept_req" placeholder="Metrica de aceptación"
														 required>
														<br>
														<h4>
															<strong>Prioridad del Requisito</strong>
														</h4>
														<select class="form-control" name="prioridad_req" id="prioridad_req" required>
															<option value="" disabled>Seleccione una opción</option>
															<option value="Baja">Baja</option>
															<option value="Media">Media</option>
															<option value="Alta">Alta</option>
														</select>
														<br>
														<button class="btn btn-primary btn-block" type="submit" onsubmit="sendRequirement(e)">
															<i class="fa fa-save"> Guardar requisito</i>
														</button>
													</form>
												</div>
											</div>
											<div class="tab-pane fade" id="pills-requirements" role="tabpanel" aria-labelledby="pills-requirements-tab">
												<div class="col-md-8">
													<table class="table table-striped">
														<thead>
															<tr>
																<th>Nombre</th>
																<th>Criterio de aceptación</th>
																<th>Metríca</th>
																<th>Prioridad</th>
																<th>Operaciones</th>
															</tr>
														</thead>
														<tbody id="requirements">
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane fade" id="pills-def" role="tabpanel" aria-labelledby="pills-def-tab">
									<div class="col-sm-8">
										<form action="" id="scope_form">
											<h4>
												<strong>Descripción del alcance del proyecto
													<span></span>
												</strong>
											</h4>
											<textarea class="form-control" name="descripcion_alcance" id="descripcion_alcance" placeholder="Descripción del alcance"
											 cols="30" rows="10" required></textarea>
											<br>
											<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modalentregable">Agregar Entregables</button>
											<!-- modal entregable -->
											<div class="modal fade" id="modalentregable" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
												<div class="modal-dialog" role="document">
													<div class="modal-content">
														<div class="modal-header">
															<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
															<h4 class="modal-title" id="myModalLabel">Entregables del proyecto</h4>
														</div>
														<div class="modal-body">
															<input type="text" class="form-control" id="nombre_entregable" placeholder="Nombre del entregable">
															<br>
															<textarea type="text" class="form-control" id="criterio_entregable" placeholder="Criterio de aceptación del entregable"></textarea>
															<br>
															<button class="btn btn-primary btn-ok" type="submit" onclick="sendDeliverable();" data-dismiss="modal">
																<i class="fa fa-plus-square"> Agregar entregable</i>
															</button>
															<br>
														</div>
														<div class="modal-footer">
															<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
														</div>
													</div>
												</div>
											</div>
											<!-- Fin modal entregable -->
											<h4>
												<strong>Lista de entregables del proyecto
													<span></span>
												</strong>
												</h4>
											<table class="table table-striped">
												<thead>
													<tr>
														<td>Nombre</td>
													<td>Estado</td>
														<td>Operaciones</td>
													</tr>
												</thead>
												<tbody id="entregable_list">
												</tbody>
											</table>
											<h4 for="">
												<strong>Requisitos excluidos del proyecto</strong>
											</h4>
											<select class="multipleSelect form-control" name="requirementSelect" id="requirementSelect" searchable="Search here.."
											 multiple required></select>
											<br>
											<textarea class="form-control" name="limitaciones" id="limitaciones" placeholder="Limitaciones del alcance del proyecto"
											 cols="30" rows="10" required></textarea>
											<br>
											<textarea class="form-control" name="hipotesis" id="hipotesis" placeholder="Hipotesis del alcance del proyecto"
											 cols="30" rows="10" required></textarea>
											<br>
											<button class="btn btn-primary btn-block" type="submit">
												<i class="fa fa-save"> Guardar alcance</i>
											</button>
										</form>
									</div>
								</div>
								<div class="tab-pane fade" id="pills-activity" role="tabpanel" aria-labelledby="pills-activity-tab">
									actividades tab
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<!-- END MAIN CONTENT -->
		</div>
		<!-- END MAIN -->

		<div class="clearfix"></div>
		<div id="diagramContainer">
			<div id="item_left" class="item"></div>
			<div id="item_right" class="item" style="margin-left:50px;"></div>
		</div>
		<footer>
			<div class="container-fluid">
				<p class="copyright">&copy; 2018
					<a href="#">Gesprotic</a>. All Rights Reserved.</p>
			</div>
		</footer>
	</div>
	<!-- END WRAPPER -->
	<div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="myModalLabel">Confirmar Eliminado</h4>
				</div>
				<div class="modal-body">
					<p>¿Usted esta seguro que desea eliminar el requisito?</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
					<a class="btn btn-danger btn-ok">Eliminar</a>
				</div>
			</div>
		</div>
	</div>
	<!-- Javascript -->
	<script src="assets/vendor/jquery/jquery.min.js"></script>
	<script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>
	<script src="assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
	<script src="assets/vendor/chartist/js/chartist.min.js"></script>
	<script src="assets/scripts/klorofil-common.js"></script>
	<script src="Logic/Controllers/Requirements/requirements.js"></script>
	<script src="Logic/Controllers/Deliverable/deliverable.js"></script>
	<script src="Logic/Controllers/Reach/reach.js"></script>
	<script src="assets/scripts/fastsearch.js"></script>
	<script type="text/javascript">
		$('.multipleSelect').fastselect({
			placeholder: 'Seleccione los requisitos a excluir',
			searchPlaceholder: 'Buscar requisitos',
			noResultsText: 'No se han encontrado requisitos',
			userOptionPrefix: 'Add '
		});
		$(".validate-form").submit(function (e) {
			sendRequirement();
			return false;
		});
		$("#scope_form").submit(function (e) {
			sendReach();
			return false;
		});
		$('#confirm-delete').on('show.bs.modal', function (e) {
			$(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
			//			$('.debug-url').html('Delete URL: <strong>' + $(this).find('.btn-ok').attr('href') + '</strong>');
		});
	</script>

</body>

</html>