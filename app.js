$(document).ready(function(){

    var isClick = false;
    //Make popup div middle the parent div
    $('.popup').css('margin-top', ($("#stage")[0].clientHeight / 2) - $(".popup")[0].clientHeight / 2);
    //Hide the players when the page load
    $(".player1").hide();
    $(".player2").hide();

    $("button").hover(function() {
        //Change the background image when mouse over
        $("#stage").css("background-image", "url('" + $(this).attr("data-img") + "')");
    }, function(){
        //Avoid the black screen appear when the user click the button
        if (!isClick)
            $("#stage").css("background-image","");
    });

    $("button").click(function(){
        //Keep the background image
        isClick = true;
        $(this).parent().hide();
        $("#stage").css("background-image", "url('" + $(this).attr("data-img") + "')");
        console.log($(this));
        // $(this).parent().hide();
        $(".selectplayers").show();
        $('.selectplayers').css('margin-top', ($("#stage")[0].clientHeight / 2) - $(".selectplayers")[0].clientHeight / 2);
    });
 
    $("#player1").change(function(){ 
        if($(this).val()==""){
            $(".player1").hide();
        } else {
            $(".player1").attr("src", $(this).val());
            $(".player1").show(2000);
        }
    });

    $("#player2").change(function(){
        if($(this).val()==""){
            $(".player2").hide();
        } else {
            $(".player2").attr("src", $(this).val());
            $(".player2").show(2000);
        }
    });

});