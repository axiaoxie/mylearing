$(function(){
	$('#menu img').mouseenter(function(){
		$('#dd_menu_top_down').toggle(500);
	}),
	$('#dd_menu_top_down').hover(
		function(){
			$(this).show();
		},
		function(){
			$(this).hide(500);
		}
	)
});