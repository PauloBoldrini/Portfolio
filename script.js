$(document).ready(function(){
    $(window).scroll(function(){
        // barra de navegação fixa no script de rolagem 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // botão de rolagem para cima mostrar / ocultar script 
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Deslizar para cima
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removendo a rolagem suave no clique do botão
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // aplicando novamente a rolagem
        $('html').css("scrollBehavior", "smooth");
    });

    // menu de alternancia/navegação script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Animação da escrita - página principal
    var typed = new Typed(".typing", {
        strings: ["Estágio", "Desenv. Web", "DBA", "Análise de Dados"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings:  ["Estágio", "Desenv. Web", "DBA", "Análise de Dados"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

    // Carrossel de Coruja - Rolagem
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel();
      });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 20, //distancia entre imagens
        loop: true, //deixa ele rodando eternamente
        autoplay: true, //fica rodando sozinho
        autoplayTimeOut: 1500, //tempo que gira para trocar as imagens
        autoplayHoverPause: true, // no hover ele para de rodar          
        responsive: {
            0:{
                items: 1 //1 imagens em telas ate 599px
               
            },
            600:{
                items: 2 //2 img em telas maiores que 600px
                
            },
            1000:{
                items: 3 //3 img em telas maiores que 992px
                
            }   

                }
        
    });
});
