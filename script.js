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
        strings: ["Psicólogo Clínico", "Psicólogo Escolar", "Aprendiz em Banco de Dados", "Aprendiz em programação"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Psicólogo Clínico", "Psicólogo Escolar", "Aprendiz em Banco de Dados", "Aprendiz em programação"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    // Carrossel de Coruja - Rolagem
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }   

}
        
    });
});
