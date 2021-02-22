// [JQuery]SmoothScroll(TOP menu→各コンテンツへスムーズに移動)
$(function(){
	$('a[href^="#"]:not([href="#"])').click(function(){

		let target = $($(this).attr('href')).offset().top;
		target -= 0;	// コンテンツ上部より上がどのくらい空くか指定

		$('html,body').animate({
			scrollTop : target
		}, 500);	// スクロールの速さ

		return false;
	});
});