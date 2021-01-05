$('.slide').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay:true,
    autoplaySpeed: 3000,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

   $(".nav-show").click(function(){
       let a = $(".navbar-collapse").hasClass("show");
       if(a){
       $(".menu-icon").removeClass("feather-x");
       $(".menu-icon").addClass("feather-menu");
       }else{
       $(".menu-icon").removeClass("feather-menu");
       $(".menu-icon").addClass("feather-x");
       }
   });

$('.car-shop').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay : true,
    autoplaySpeed: 5000,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});



let screenHeight = $(window).height();
$(window).scroll(function(){
   let a = $(this).scrollTop();

   if( screenHeight-50 <= a){
     $(".main_nav").addClass("show-nav");
   }else{
       $(".main_nav").removeClass("show-nav");
       setActive("home");
   }

})

wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();

function setActive(current){
    $(`.nav-link`).removeClass("underline");
    $(`.nav-link[href = "#${current}"]`).addClass("underline");
}

function navScroll(){
    let current = $(`section[id]`);
    current.waypoint(function(direction){
        if(direction == 'down'){
            let a = $(this.element).attr("id");
            setActive(a);
        }
    },{
        offset : '60px'
    });

    current.waypoint(function(direction){
        if(direction == 'up'){
            let a = $(this.element).attr("id");
            setActive(a);
        }
    },{
        offset : '-200px'
    });

}

navScroll();


$(window).on("load",function(){
    $(".load").fadeOut(500);
})

