$(function(){
	var bookSort=new Array('中国古典小说（1547）',
	'四大名著（696）','中国古代小说（13880）','中国近现代小说（640）','港澳台小说（838）','外国小说（5119）',
	'侦探/悬疑/推理 （2519）','惊悚/恐怖（798）')
	var htmlLi=[];
	$.each(bookSort, function(i,n) {
		htmlLi.push("<li><a href='#'>"+n+"</a></li>")
	}),
	$('#product_catList_class').html(htmlLi.join(""));
})