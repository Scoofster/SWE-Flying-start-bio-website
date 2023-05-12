//
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
        if (window.outerWidth > 1000 && this.scrollY > 2700){
            $(".scroll-down-btn").removeClass("show");
        }
        else if (window.outerWidth > 800 && this.scrollY > 4000){
            $(".scroll-down-btn").removeClass("show");
        }
        else if (window.outerWidth > 600 && this.scrollY > 4400){
            $(".scroll-down-btn").removeClass("show");
        }
        else if (window.outerWidth > 400 && this.scrollY > 4600){
            $(".scroll-down-btn").removeClass("show");
        }
        else if (window.outerWidth > 0 && this.scrollY > 5000){
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

    // $(".services .services-content .card").click(function(){
    //     window.open("projects.html", "_self");
    // });

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
    var e1 = document.getElementById("e1").innerHTML;
    var e2 = document.getElementById("e2").innerHTML;

    if (window.outerWidth > 800){

    } else {
        let words = e1.split(" , ");
        document.getElementById("e1").innerHTML = words[0]<br>words[1];
    }

    var t = 0;
    $(window).scroll(function(){
        if(this.scrollY > 600){
            t++;
            if (t == 1){
                typeWriter();
            }
        }
    });
});

function myFunction(x) {x.classList.toggle("change");}

var i = 0;
var txt = 'I am a hardworking and ambitious individual with a great passion for the graphic design and computing industry that strives for excellency. I have exemplary communication skills, enabling me to effectively communicate with a wide range of people. Through my previous education and experience as a Junior Software Developer, I am confident in my strong foundation and proficiency in programming languages such as C#, JavaScript, React, HTML and CSS. I am looking for a position in the industry in which I can put into practice my knowledge and experience while gaining invaluable experience, ultimately benefiting the operations of the organisation that I work for. I have acquired several hard skills that are essential for this field from this passion, such as programming, graphical design, computing and IT skills. Additionally, I have many hobbies which keep me active and passionate, such as bouldering, drawing and programming.';
const speed = 20;

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
