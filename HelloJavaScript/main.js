$(document).ready(function(){
    $("input").click(function()
    {
        //alert("Hi");
        var numberoflistitem = $("li").length;
        var randomchildNumber = Math.floor(Math.random()*numberoflistitem);
    
        $("H1").text($("li").eq(randomchildNumber).text());
   });
});  