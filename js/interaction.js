var videoHalfWay = 0;
var formattedHalfWay = 0;

var choicePart = 7;
var goodchoicePart = 15;
var badchoicePart = 18;
var goodChoiceChosen = false;
var chosentime = 5



var video1;

$(document).ready(function(){

	video1 = $('#video1');

	//$("video1").on('timeupdate', function(){
		//if(currentTime == chosentime){
		//	$(".lightbox").hide();
	//	}
//	});

	$(".box1").click(function() {
		$("#box1").hide();
		$("#box2").hide();
	});
	$(".box2").click(function() {
		$("#box1").hide();
		$("#box2").hide();
	});

	$(".box3").click(function() {
		$("#box3").hide();
		$("#box4").hide();
	});
	$(".box4").click(function() {
		$("#box3").hide();
		$("#box4").hide();
	});

	$(".box5").click(function() {
		$("#box5").hide();
		$("#box6").hide();
	});
	$(".box6").click(function() {
		$("#box5").hide();
		$("#box6").hide();
	});

	$(".box7").click(function() {
		$("#box7").hide();
		$("#box8").hide();
	});
	$(".box8").click(function() {
		$("#box7").hide();
		$("#box8").hide();
	});

	$(".box9").click(function() {
		$("#box9").hide();
		$("#box10").hide();
	});
	$(".box10").click(function() {
		$("#box9").hide();
		$("#box10").hide();
	});



	$('.box1').on('click', function(){//126
		//half of A highlight
		// video1[0].currentTime = 133;
		video1[0].currentTime = video1[0].currentTime+5;

	});
	$('.box2').on('click', function(){
		//half of B highlight
		// video1[0].currentTime = 138;
		video1[0].currentTime = video1[0].currentTime+10;
	});

	$('.box3').on('click', function(){//241
		// video1[0].currentTime = 254;
		video1[0].currentTime = video1[0].currentTime+10;
	});
	$('.box4').on('click', function(){
		// video1[0].currentTime = 265;
		video1[0].currentTime = video1[0].currentTime+21;
	});

	$('.box5').on('click', function(){//536
		// video1[0].currentTime = 552;
		video1[0].currentTime = video1[0].currentTime+10;
	});
	$('.box6').on('click', function(){
		// video1[0].currentTime = 563;
		video1[0].currentTime = video1[0].currentTime+21;
	});

	$('.box7').on('click', function(){ //697
		// video1[0].currentTime = 710;
		video1[0].currentTime = video1[0].currentTime+10;
	});
	$('.box8').on('click', function(){
		// video1[0].currentTime = 721;
		video1[0].currentTime = video1[0].currentTime+21;
	});

	$('.box9').on('click', function(){//813
		// video1[0].currentTime = 823;
		video1[0].currentTime = video1[0].currentTime+ 8.4;
	});
	$('.box10').on('click', function(){
		// video1[0].currentTime = 833;
		video1[0].currentTime = video1[0].currentTime+ 17;
	});

	

	$(video1).on('loadeddata', function(){
		videoHalfWay = Math.round(this.duration/2);
	});



	//$(video1).on('timeupdate', function(){
		//var currentTime = Math.round(this.currentTime)
		//console.log(currentTime);
		//if(currentTime == videoHalfWay){
			//alert("video is half way")
	//	}
	//});



});
