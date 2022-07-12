//

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    });

    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
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
