$(document).ready(function() {
    $("input").click(function()
    {
      var numberOfListItem = $("#choices li").length;
      var randomChlidNumber = Math.floor(Math.random()*numberOfListItem);  

$("H1").text($("#choices li").eq(randomChlidNumber).text());
    });
});