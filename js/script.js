$(document).ready(function(){
	$(".slider").slick({
		slidesToShow: 1,
		slidesToScroll:1,
		arrows:false,
	});
	$(".header__burger").click(function(event){
		$(".header__list").toggleClass("active");
		$(".main__header").toggleClass("active");
		$("body").toggleClass("lock");
	})
})

