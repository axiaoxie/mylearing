//头部声学块隐藏
$(function(){
	var t=null;
	var r=null;
	$('#top-nav-ul li:eq(3)').hover(
		function(){show();},
		function(){hide();}
	);
	$('#nav-hide').hover(
		function(){show();},
		function(){hide();}
	);
	$('#top-nav-ul li:eq(1)').hover(
		function(){show1();},
		function(){hide1();}
	);
	$('#nav-hide2').hover(
		function(){show1();},
		function(){hide1();}
	);
	function show(){
		clearInterval(t);
		$('#nav-hide').slideDown(200);
	};
	function hide(){
		t=setInterval(function(){
			$('#nav-hide').slideUp(200)
		},100);
	}
	function show1(){
		clearInterval(r);
		$('#nav-hide2').slideDown(100);
	};
	function hide1(){
		r=setInterval(function(){
			$('#nav-hide2').slideUp(100)
		},100);
	}
});
//全部版块隐藏
$(function(){
	var t=null;
	$('#all-block').hover(
		function(){show();},
		function(){hide();}
	);
	$('#blockNone').hover(
		function(){show();},
		function(){hide();}
	);
	function show(){
		clearInterval(t);
		$('#blockNone').fadeIn(200)
	};
	function hide(){
		t=setInterval(function(){
			$('#blockNone').fadeOut(200)
		},100);
	}
});
//选项卡功能
$(function(){
	$('#alpha').mouseenter(function(){
		$('#beta').removeClass('active');
		$(this).addClass('tg active');
		$('#beta-c').removeClass('tag_active');
		$('#alpha-c').addClass('tag_main tag_active');
	}),
	$('#beta').mouseenter(function(){
		$('#alpha').removeClass('active');
		$(this).addClass('tg active');
		$('#alpha-c').removeClass('tag_active');
		$('#beta-c').addClass('tag_main tag_active');
	})
});
//轮播图功能
$(function(){
	var num=0;
	var timer=null;
	var p=['魅族科技将举行魅蓝 6 新品发布会','魅族商城 9 月神秘大促，不止 5 折',
	' 一窗一世界  PRO 7 主题摄影展'];
	var nextFn=function(){
		 $('.imgList li').eq(num).stop().fadeOut(500);
		 $('#imgindex p').remove();
	    num++;
	    if(num>2){
	        num=0;
	    }
	    //更改完以后代表下一张，下一张淡入
	    $('.imgList li').eq(num).stop().fadeIn(500);
	    $('<p/>').prependTo($('#imgindex')).html(p[num]);
	    $('.imgindex li').eq(num).addClass('active').siblings('li').removeClass('active');
	}
	var prevFn=function(){
	    //没加之前代表上一张，上一张淡出
	    $('.imgList li').eq(num).stop().fadeOut(500);
	    $('#imgindex p').remove();
	    num--;
	    if(num<0){
	        num=2
	    }
    //更改完以后代表下一张，下一张淡入
	    $('.imgList li').eq(num).stop().fadeIn(500);
	    $('<p/>').prependTo($('#imgindex')).html(p[num]);
	    $('.imgindex li').eq(num).addClass('active').siblings('li').removeClass('active');
	  }
	$('#rightbtn').click(nextFn);
	$('#leftbtn').click(prevFn);
	$('.imgindex li').click(function(event) {           
	    var i=$(this).index();
	    //现在这个全局变量num就代表上一张
	    //没加之前代表上一张，上一张淡出
	    $('.imgList li').eq(num).stop().fadeOut(500);
	    $('#imgindex p').remove();
	    //再让序号和num进行同步
	    num=i;
	    //重新赋值以后，num就代表下一张
	    //更改完以后代表下一张，下一张淡入
	    $('.imgList li').eq(num).stop().fadeIn(500);
	     $('<p/>').prependTo($('#imgindex')).html(p[num]);
	    $('.imgindex li').eq(num).addClass('active').siblings('li').removeClass('active');
	}); 
	timer=setInterval(nextFn, 2000)
	$('.banner').hover(
		function() {
		    clearInterval(timer);
		    $('#imgindex').fadeIn();
		}, 
		function() {
		    clearInterval(timer);
		    timer=setInterval(nextFn, 2000);
		    $('#imgindex').fadeOut();
	});
});
//返回顶部功能
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			$('#return-top').fadeIn(300);
		}
		else{
			$('#return-top').fadeOut(300);
		}
	});
	$('#return-top').click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	})
});
//顶部导航栏固定
$(function(){
	$(window).scroll(function(){
		var scrollTop=$(document).scrollTop();
		if(scrollTop>1){
			$('#top').css({'position':'fixed','z-index':'400','top':0});
			$('#header').css('margin-top','90px');
		}
		else{
			$('#top').css({'position':'static'});
			$('#header').css('margin-top','0');
		}
	})
});
//签到星期  动态获取当前时间
$(function(){
	var mydate=new Date();
	var t=mydate.getDay	();
	var atime=['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
	$('#week_ban').append(atime[t]);
});
//字体div图出现
$(function(){
	var t=null;
	$('.lastchild').hover(
		function(){show();},
		function(){hide();}
	);
	$('#lanchange').hover(
		function(){show();},
		function(){hide();}
	);
	function show(){
		clearInterval(t);
		$('#lanchange').fadeIn(200)
	};
	function hide(){
		t=setInterval(function(){
			$('#lanchange').fadeOut(100)
		},100);
	}
});
//隐藏框出现
$(function(){
	var t=null;
	$('.tddiv-left').mouseover(function(){
		$(this).parent().siblings('div').fadeIn();
	});
	$('.tddiv-left-hide').mouseleave(function(){
		$(this).fadeOut();
	})
	
});
//bbs中share-icon功能
$(function(){
	var t=null;
	$('.share-part').hover(
		function(){show();},
		function(){hide();}
	);
	$('.share-icon').hover(
		function(){show();},
		function(){hide();}
	);
	function show(){
		clearInterval(t);
		$('.share-icon').fadeIn(200)
	};
	function hide(){
		t=setInterval(function(){
			$('.share-icon').fadeOut(200)
		},100);
	}
});
//动态盖楼功能
$(function(){
	$('#reply-btn').click(function(){
		var nowDate=new Date();
		var hour=nowDate.getHours();
		var minute=nowDate.getMinutes();
		var text=$('#reply-box').val();
		var num=parseInt($('.floor-author:eq(0) p em').text());
		var num1=parseInt($('#reply-num').text());
		var num2=parseInt($('#per-num').text());
		num++;num1++;num2++
		if(text.length>0){
			$('#floor').prepend(`
				<div class="floor-list">
					<div class="floor-img"><img src="comimg/suoda.jpg" alt="" /></div>
					<div class="floor-author">
						<a href="">索大</a>
						<span>会员</span>
						<span>今天`+hour+`:`+minute+`</span>
						<p><em>`+num+`</em>楼</p>
					</div>
					`+text+`
					<div class="floor-bottom">
						<a href="###">支持</a>
						<a href="###">反对</a>
						<a href="###">回复</a>
					</div>
				</div>
			`)
			$('#reply-box').val("");
			$('#reply-num').text(num1);
			$('#per-num').text(num2);
		}
		else{
			alert('请输入');
		}
		
	})
})


