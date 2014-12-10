$(document).ready(function(){
		$('div.menu').click(function(){
			var desplegar = $(this).attr('id');
			$(desplegar).toggle('fast');
		});
		$('.boton').click(function(){
			$(this).toggleClass('selected', 1500);
			var mostrar = $(this).attr('href');
			$(mostrar).toggle('slow');
		});
    });