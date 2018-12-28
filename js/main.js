$('.icon_bars').click(function(){
$('.space_menu').toggleClass('active_menu');
});

$('.btm_close').click(function(){
    $('.space_menu').removeClass('active_menu');
});

$('.menu a').click(function(){
    $('.space_menu').removeClass('active_menu');
});


$('.menu a').click(function(e){				
    e.preventDefault();		//evitar el eventos del enlace normal
    var strAncla=$(this).attr('href'); //id del ancla
        $('body,html').stop(true,true).animate({				
            scrollTop: $(strAncla).offset().top
        },1000);
    
});