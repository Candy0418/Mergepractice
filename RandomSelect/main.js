$(document).ready(function(){
    $("input").click(function()
    {
        //alert("Hi");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem); 
        $("H1").text($("#choices li").eq(randomChildNumber).text());
   });
});  