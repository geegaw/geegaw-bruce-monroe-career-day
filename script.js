$(document).ready(function(){

    $(".circle-area").height($(window).height() - 200);
    var height = $(".circle-area").height();

    $("select").change(function(){
        var selection= $(this).val();
        if (selection === "random"){
            var colors = ["#00f", "#f00", "#0f0"];
            $(".circle").each(function(){
                var color = colors[ getRandomInt(0, 3) ];
                $(this).css("background", color);
            });
        }
        else {
            $(".circle").css("background", selection);
        }
    });

    $("input").change(function(){
        var selection= Math.max(1, $(this).val());
        var $circle = $(".circle:first");
        $(".circle:not(:first)").remove();
        for (var i = 1; i < selection; i++){
            $circle.clone().appendTo(".circle-area");
            $(".circle-area .circle:last").css({ left: i * 100 +  i * 10});
        }
    });

    $("button").click(function(){
        $(".circle").each(function(){
            var $this = $(this);
            setTimeout(function(){
                $this.effect("bounce", {
                    times: getRandomInt(4, 10),
                    distance: getRandomInt(200, height),
                }, 3500);
            }, 750);
        });
    });

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
});
