$(function(){
	
	$("label").click(function(){
		degistir();
	});
	function degistir(){
		var input = $("input[type=checkbox]");
		var deger = input.prop( "checked" )
		if(deger ==true){
			$("input[type=checkbox]").animate({"left":"100%","marginLeft":"-40px"},300).parent().css({"textAlign":"left","background":"green"}).find("b").html("On");
		}else{
			$("input[type=checkbox]").animate({"left":"0%","marginLeft":"0px"},300).parent().css({"textAlign":"right","background":"#e1172c"}).find("b").html("Off");
		}
	
	}
	degistir();
})