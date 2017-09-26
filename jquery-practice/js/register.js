
$(function(){
	//验证邮箱以及邮箱功能
	$('#email').focus(function(){
		$(this).css('background-color','#fff');
		$('#emailsrc').css('display','none');
	})
	$('#email').blur(function(){
		var str=$(this).val().toString();
		var check=checkmail(str);
		if(check){
			$('#emailsrc').css('display','block');
		}
	});
	//昵称栏功能
	$('#nickName').focus(function(){
		$(this).css("background-color","#F1FFDE");
		$('#nickName_prompt').text('昵称可由大小写英文字母、数字组成，长度为4-20个字符');
		$('#nickName_prompt').fadeIn(300);
	});
	$('#nickName').blur(function(){
		var str=$(this).val().toString();
		var check=checkNickName(str);
		if(check){
			$('#nickName_prompt').text('该用户名可用');
		}
		else if(str.length>0){
			$(this).css('background-color','#F3F3D2');
			clearval($(this));
			$('#nickName_prompt').text('昵称不符合规范');
		}
		else{
			$(this).css('background-color','#fff');
			$('#nickName_prompt').fadeOut(200);
		}
	});
	//密码框功能
	$('#pwd').focus(function(){
		$(this).css("background-color","#FEF4D0");
		$('#pwd_prompt').toggle(300);
	});
	$('#pwd').blur(function(){
		$(this).css("background-color","#fff");
		$('#pwd_prompt').toggle(300);
		var str=$(this).val().toString();
		var check=checkNickName(str);
		if(!check&&str.length>0){
			alert('密码格式不符，请重新输入');
			clearval($(this));
		}
	});
	//二次密码框功能
	$('#repwd').focus(function(){
		$('#repwd_prompt').hide();
	});
	$('#repwd').blur(function(){
		judgepwd();
	})
});
//邮箱验证函数
function checkmail(s){
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var str=$('#email').val().toString()
	 if (filter.test(s)){
	 	return true;
	 }
	 else if(str.length>0){
	 	alert('您的电子邮件格式不正确');
	 	$('#email').val("");
	 	return false;
	 }
}
//清楚文本函数
function clearval(clear){
	clear.val("");
}
//昵称和密码正则检查
function checkNickName(n){
	var filter=/^[a-zA-Z0-9]{4,20}$/;
	 if (filter.test(n)){
	 	return true;
	 }
	 else{
	 	return false;
	 }
}
//两次密码判断
function judgepwd(){
	var str1=$('#repwd').val().toString();
	var str2=$('#pwd').val().toString();
	if(str1==str2&&str2.length>0){
		alert('两次输入密码一致');
	}
	else if(str1.length>0&&str2.length>0){
		$('#repwd_prompt').show();
	}
}

//省市级联功能
$(function(){
	var cityList=new Array();
	cityList['北京市']=['朝阳区','东城区','西城区','海淀区','宜武区','丰台区'];
	cityList['上海市']=['宝山区','长宁区','黄浦区','徐汇区'];
	cityList['广州省']=['广州市','汕头市','佛山市','中山市','东莞市'];
	cityList['深圳市']=['福田区','罗湖区','盐田区','宝安区','南山区','龙岗区'];
	cityList['江苏省']=['南京市','苏州市','无锡市'];
	cityList['浙江省']=['杭州市','宁波市','温州市'];
	cityList['四川省']=['成都市','汶川'];
	cityList['海南省']=['海口市'];
	cityList['江西省']=['南昌市','赣州市'];
	cityList['山东省']=['济南','青岛','烟台市'];
	cityList['广西省']=['柳州市','南宁市'];
	cityList['福建省']=['厦门市','泉州市'];
	cityList['河北省']=['邯郸市','石家庄市'];
	cityList['湖北省']=['武汉市','宜昌市'];
	cityList['湖南省']=['长沙市','株洲市'];
	cityList['河南省']=['郑州市','洛阳市'];
	
	for(var i in cityList){
		$('#province').append('<option value="'+i+'">'+i+'</option>'); 
	}
	$('#province').change(function(){
		var str=$('#province').val();
		var str1='请选择省/城市';
		$('#city').empty();
		for(var j in cityList){
			if(j==str){
				$('#city').prepend('<option value="请选择城市/地区">'+'请选择城市/地区'+'</option>');
				for(var k in cityList[j]){
					$('#city').append('<option value="'+cityList[j][k]+'">'+cityList[j][k]+'</option>');
				}
			}
		}
		if(str==str1){
			$('#city').prepend('<option value="请选择城市/地区">'+'请选择城市/地区'+'</option>');
		}
	})
})


