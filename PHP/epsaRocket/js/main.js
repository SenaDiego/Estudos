
jQuery(document).ready(function($){
    window.onscroll = ()=>{ //Iron Function
        if (window.pageYOffset > 140){
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
        }
    }
})

