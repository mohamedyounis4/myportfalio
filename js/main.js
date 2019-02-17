$(function(){
	$('.navbar ul li').on('click',function (){
		$(this).addClass('active').siblings().removeClass('active');
	});
	// end
		$('.navbar ul li a, .down a').on('click',function (){
		$('html,body').animate({
			scrollTop : $('#' + $(this).data('custom')).offset().top - 30
		}, 1000);
		});	
});
	