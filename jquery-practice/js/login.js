$(function(){
	$('#btn').click(function(){
		var str=$('#email').val();
		var pwd=$('#pwd').val();
		if (str.length==0) {
			alert("请输入email地址或昵称")
		}
		else if (str.length>0&&pwd.length==0) {
			alert("请输入密码")
		}
		else if(str.length>0&&pwd.length>0){
			open('index.html');
		}
	})
})