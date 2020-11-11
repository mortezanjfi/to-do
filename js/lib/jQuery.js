$("#addition").click(function(){
    $("input").slideToggle("500", function(){
        $(this).val("");
    });
})
$("ul").on("click", "li", function(){
    $(this).toggleClass("through");   
});
$("ul").on("click", "i", function(e){
    $(this).parent().hide(function(){
        $(this).remove();
    });
    e.stopPropagation();
});
$("input").keypress(function(e){
    if (e.which === 13 && $(this).val() !== ""){
        $("ul").append("<li><i>R</i> " + $(this).val() + "</li>");
        $(this).val("")
    }
})