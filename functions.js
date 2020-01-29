var changing_senerio = document.getElementById("senerio");
var changing_qst = document.getElementById("whatUdo");
var fir_options = document.getElementById("fir_btn");
var sec_options = document.getElementById("sec_btn");
var the_picture = document.getElementById("picture");

fir_options.onclick = function(){begging_fir()};
sec_options.onclick = function(){end_fir()};


/*
	first ending. going back home!!!!!!!!!!!!!!!(12),(1112)
*/
function end_fir()
{
	var changing_senerio = document.getElementById("senerio");
	changing_qst.innerHTML = " ";
	changing_senerio.innerHTML =  "you keep walking home but then you relize that you are realy hungre. you get home, eat, and go do your home work";

	the_picture.src = "lego.jpg";

	fir_options.innerHTML = " ";
	sec_options.innerHTML = " ";

}

/*
	second ending. it was a Practical joke!!!!!!!!!!!!!!!(11112), (112112)

*/
function end_sec()
{
	var changing_senerio = document.getElementById("senerio");
	changing_qst.innerHTML = " ";
	changing_senerio.innerHTML =  "you dont know what to do! you can't stop the wals!!! sudenly the ladty comes out with a camerra and tels you that that you gast to abart of a Practical joke. you all lough!";

	the_picture.src = "trik.jpeg";

	fir_options.innerHTML = " ";
	sec_options.innerHTML = " ";

}


/*
	third ending. the wals shring, the door brakes. you run to tell your friends(11111), (112111)
*/
function end_thir()
{
	var changing_senerio = document.getElementById("senerio");
	changing_qst.innerHTML = " ";
	changing_senerio.innerHTML =  "you dont know what to do! you can't stop the wals!!! the wald get so small thet the door brakes! you run out and go tell all your frriends about this crazy store!";

	the_picture.src = "scaired.jpg";

	fir_options.innerHTML = " ";
	sec_options.innerHTML = " ";

}

/*
	fourth ending. you stil and run/
*/
function end_four()
{
	var changing_senerio = document.getElementById("senerio");
	changing_qst.innerHTML = " ";
	changing_senerio.innerHTML =  "you take with you what ever you can(still) and run out. on your way home you eat all the candyes you staul so your parents wont be angree at you";

	the_picture.src = "stiealer.jpeg";




	fir_options.innerHTML = " ";
	sec_options.innerHTML = " ";

}

/*
	beggining in the stor, pick a candy.(11)
*/
function begging_fir() {
	changing_senerio.innerHTML =  "you get in the store and see all these candies that you realy love!!! now you have to chose which candies to take:";
	changing_qst.innerHTML = " ";
	fir_options.innerHTML = "gummy bairs and gummy snakes";//2
	sec_options.innerHTML = "chocolate and a gum";//1

	the_picture.src = "index.jpeg"; 

	fir_options.onclick = function(){firFir()};
	sec_options.onclick = function(){firSec()};
}


/*
	going into the shop:  candy option 111.
*/
function firFir() {
	changing_senerio.innerHTML =  "you are going to the old lady to pay and she saies:'15 shekels'. you take out your wolet wand you see that you have only 10. she see that too and say:'if you are intrested, i have in the back more cheper candies'";
	changing_qst.innerHTML = "do you go with here or run out?";
	fir_options.innerHTML = "yes!!!";//1
	sec_options.innerHTML = "absolutly not!!!";//2

	the_picture.src = "no-monny.webp";

	fir_options.onclick = function(){firSecThir()};
	sec_options.onclick = function(){firSecsec()};
}

/*
	going into the shop:  candy option .(112)
*/
function firSec() {
	changing_senerio.innerHTML =  "you are going to pay and on your way you start eating the gum. the old lady seies you and gets very engry. she starts to pull you into a small room on the back of the stor";
	changing_qst.innerHTML = "do you let her and try to explain thet you are sorry or you run out of the store?";
	fir_options.innerHTML = "trying to be nice";//1
	sec_options.innerHTML = "runing out";//2

	the_picture.src = "gum.jpg";

	fir_options.onclick = function(){firSecThir()};
	sec_options.onclick = function(){end_four()};
}

/*
	you dint want to go to a room but the lady wants you to.(1121)
*/
function firSecsec() {
	changing_senerio.innerHTML =  "you are tring to be nice and say no thanks but the lady starst to bull you into a small room";
	changing_qst.innerHTML = "do you let her and try to br nice or you run out of the store?";
	fir_options.innerHTML = "trying to be nice";//1
	sec_options.innerHTML = "runing out";//2

	the_picture.src = "pink.jpg";

	fir_options.onclick = function(){firSecThir()};
	sec_options.onclick = function(){end_fir()};
}

/*
	letting the lady to pull you. the room is shrinking.(1111), (11211)
*/
function firSecThir() {
	changing_senerio.innerHTML =  "you get into a small dark room. the lady is goan and now you start to be afrad. sudenly, tha walse of the room starts to shrink";
	changing_qst.innerHTML = "do you try to stop them with your body or wait for somthing to happend?";
	fir_options.innerHTML = "wait for somthing to happend";//1
	sec_options.innerHTML = "try to stop them with your body";//2

	the_picture.src = "creepy_room.jpg";

	fir_options.onclick = function(){end_sec()};
	sec_options.onclick = function(){end_thir()};
}