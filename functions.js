
var changing_senerio = document.getElementById("senerio");
var fir_options = document.getElementById("fir_btn");
var sec_options = document.getElementById("sec_btn");

fir_options.onclick = function(){begging_fir()};
sec_options.onclick = function(){begging_sec()};

function begging_fir() {
	changing_senerio.innerHTML =  "you get in the store and now you have to chose which candies to take:";
	fir_options.innerHTML = "chocolate and a gum";
	sec_options.innerHTML = "gummy bairs and gummy snakes";

	fir_options.onclick = function(){begging_firFir()};
	sec_options.onclick = function(){begging_firSec()};
}

function begging_sec()
{
	var changing_senerio = document.getElementById("senerio");
	
	changing_senerio.innerHTML =  "you ceep walking home but the you relize that you are realy hungre. you get home, eat, and go do your home work";
}

function begging_firFir() {
	changing_senerio.innerHTML =  "you are going tp the old lady to pay and she saies:'15 shekels'. you take out your wolet wand you see that you have only 10. she seies that too and saies:'if you are intrested, i have in the back more cheper candies'. do you go with here?:";
	fir_options.innerHTML = "yes!!!";
	sec_options.innerHTML = "ablolutly not!!!";

	fir_options.onclick = function(){begging_firFir()};
	sec_options.onclick = function(){begging_firSec()};
}


