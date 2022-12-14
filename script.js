$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("hidden");
        }else{
            $('.navbar').removeClass("hidden");
        }

        if(this.scrollY > 500){
            $('.scroll-up').addClass("show");
        }else{
            $('.scroll-up').removeClass("show")
        }
    });


    $('.scroll-up').click(function(){
        $('html').animate({scrollTop: 0});
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.max-width .menu-btn i').toggleClass("active");
    });



    var typed = new Typed(".typing", {
        strings: ["Designer.", "Developer.", "Freelancer.", "Student.", "Tech Enthusiast.", "Content Writer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    })
    var typed = new Typed(".typing-2", {
        strings: ["Designing.", "Development.", "SEO.", "UI/UX.", "Music.", "Singing.", "Digital Marketing."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    })





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