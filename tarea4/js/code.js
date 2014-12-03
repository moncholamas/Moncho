$(document).ready(function(){
            $('a.smooth').click(function(e){
            e.preventDefault();
            enlace  = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(enlace).offset().top
            }, 1000);
            });
        });