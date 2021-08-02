jQuery(document).ready(function($){
	//Cria o slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		autoplay: true, //fica rodando sozinho
        autoplayTimeOut: 1500, //tempo que gira para trocar as imagens
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	//Abre a página de depoimentos
	$('.cd-see-all').on('click', function(){
		$('.cd-testimonials-all').addClass('is-visible');
	});

	//Fecha a página depoimentos
	$('.cd-testimonials-all .close-btn').on('click', function(){
		$('.cd-testimonials-all').removeClass('is-visible');
	});
	$(document).keyup(function(event){
		//Verifica se o User pressionou 'Esc'
    	if(event.which=='27'){
    		$('.cd-testimonials-all').removeClass('is-visible');	
	    }
    });
    
	//Constroie a grade para a página depoimentos
	$('.cd-testimonials-all-wrapper').children('ul').masonry({
  		itemSelector: '.cd-testimonials-item'
	});
});