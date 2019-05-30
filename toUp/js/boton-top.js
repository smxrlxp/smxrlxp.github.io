$(document).ready(function () {
	$(window).scroll(function(){
	  if($(this).scrollTop() > 300){ //condición a cumplirse cuando el usuario haya bajado 301px a más.
		$("#ps_to_up").slideDown(300); //se muestra el botón en 300 mili segundos
	  }else{
		$("#ps_to_up").slideUp(300); //se oculta el botón en 300 mili segundos
	  }
	});

	$("#ps_to_up").on('click', function (e) {
	  e.preventDefault(); //evita que se ejecute el tag ancla (<a href="#">valor</a>).
	  $('html,body').animate({scrollTop: 0 },2000, function(){});
	});
	
	$(".ps_to_up").on('click', function (e) {
	  e.preventDefault(); //evita que se ejecute el tag ancla (<a href="#">valor</a>).
	  $('html,body').animate({scrollTop: 0 },2000, function(){});
	});
});
