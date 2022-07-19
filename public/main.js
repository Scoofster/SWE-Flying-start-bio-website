//
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
            $(".line").removeClass("sticky");
        }
        if (this.scrollY > 6500 && screen.width > 947){
            $(".scroll-down-btn").removeClass("show");
        }
        else if (this.scrollY > 6700 && screen.width > 500){
            $(".scroll-down-btn").removeClass("show");
        }
        else if (this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
            $(".scroll-down-btn").addClass("show");
        }
        else{
            $(".scroll-up-btn").removeClass("show");
            $(".scroll-down-btn").removeClass("show");
        }
    });

    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop: 0});
    });

    $(".scroll-down-btn").click(function(){
        $("html").animate({scrollTop: $("#contact").offset().top}, 1000);
    });

    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
    });

    $(".menu").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn .container").classList.toggleClass("change");
    });

    $('.carousel').owlCarousel({

    });
    
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 600){
            typeWriter()
        }
    });
});

function myFunction(x) {x.classList.toggle("change");}

var i = 0;
var txt = 'Mary had to make a decision and she knew that whatever decision she made, it would upset someone. It seemed like such a silly reason for people to get upset but she knew the minute that she began to consider doing it that there was no way everyone in her life would be pleased with what she ultimately decided to do. It was simply a question of who she would rather displease most. While this had always been her parents, and especially her mom, in the past that she tried to keep from upsetting, she decided that this time the person she was going to please the most with her decision was herself.';
const speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typingAboutPara").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/*
$(document).ready(function(){
    typeWriter()
});
*/
