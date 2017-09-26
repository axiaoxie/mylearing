$(function() {
	//网页特效 关闭广告
	$('#dd_close a').click(function() {
		$('#right1,#dd_close').hide();
	}),
	$('#family,#history,#culture,#novel').click(function(){
		$(this).addClass('book_type_out').siblings().removeClass('book_type_out');
	}),
	$('#family').click(function(){
		$('#book_family').addClass('book_show').siblings().removeClass('book_show');
		$('#book_history').addClass('book_none');
	}),
	$('#culture').click(function(){
		$('#book_culture').addClass('book_show').siblings().removeClass('book_show');
		$('#book_history').addClass('book_none');
	}),
	$('#history').click(function(){
		$('#book_history').addClass('book_show').siblings().removeClass('book_show');
	}),
	$('#novel').click(function(){
		$('#book_novel').addClass('book_show').siblings().removeClass('book_show');
		$('#book_history').addClass('book_none');
	})
});
//广告跟随滚动条变动
$(window).scroll(function() {
	var $scrollTop = $(document).scrollTop();
	if($scrollTop<=25){
		$('.sc,.dd_close')
		.animate({
			'top': 0
		}, 2)
	}
	else{
		$('.sc,.dd_close')
		.animate({
			'top': $scrollTop + 30 + 'px'
		}, 2)
	}
});
//图片自动轮播效果
 $(function() {
    var i = 0;
    var clone = $("#scroll_img li").first().clone();//克隆第一张图片
    $("#scroll_img").append(clone);//复制到列表最后
    var size = $("#scroll_img li").size();
    $("#scroll_number").first().addClass("active");
    /*自动轮播*/
    var timer = setInterval(function (){ 
    	i++; move();
    },1500);
    /*鼠标悬停事件*/
    $(".scroll_mid").hover(function () {
        clearInterval(timer);//鼠标悬停时清除定时器
    }, function () {
        timer = setInterval(function () { i++; move(); }, 1500); //鼠标移出时清除定时器
    });
    /*鼠标滑入数字框事件*/
    $("#scroll_number li").mouseenter(function () {
        var index = $(this).index();//获取当前索引值
        i = index;
        $("#scroll_img").stop().animate({ top: -index * 205 }, 500);
        $(this).addClass("active").siblings().removeClass("active");
    });
    /*移动事件*/
    function move() {
        if (i == size) {
            $("#scroll_img").css({ top: 0 });
            i = 1;
        }
        $("#scroll_img").stop().animate({ top: -i * 205 }, 500);
        if (i == size - 1) {
            $("#scroll_number li").eq(0).addClass("active").siblings().removeClass("active");
        } 
        else {
            $("#scroll_number li").eq(i).addClass("active").siblings().removeClass("active");
        }
    }
});
//右侧书讯快递自动垂直向上
$(function(){
	function autoplay(){
		$('#dome1').find("ul:first").animate({
	            marginTop: "-26px"
	        }, 300, function () {
	            $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
	        });
   	};
	var scrollTime=setInterval(function(){
		autoplay();
	},700);
   $('#dome1').hover(
   	function(){
   		clearInterval(scrollTime);
   	},
   	function(){
   		scrollTime=setInterval(function(){
	 		autoplay();
   		},700)
   	})
});