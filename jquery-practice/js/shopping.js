$(function(){
	//利用callback 实现商品列表的显示和箭头的变换
	var aflag=0;
	$('#shopping_commend_arrow').click(function(){
		if(aflag==0){
			$('#shopping_commend_sort').slideUp(500,function(){
				$('#shopping_commend_arrow').attr('src','images/shopping_arrow_down.gif');
			});
			aflag=1;
		}
		else{
			$('#shopping_commend_sort').slideDown(500,function(){
				$('#shopping_commend_arrow').attr('src','images/shopping_arrow_up.gif');
			});
			aflag=0;
		}
	});
	productCount();
});
//建立删除函数 通过 a 链接事件
function deleteP(obj){
 var flag=confirm("您确定要删除此商品吗？");
	 if(flag){
	  $("#"+obj).remove();
	 }
	 else{
	  return;
	 }
	  productCount();
}
//计算商品总额的方法
function productCount(){
 var total=0;  //总价
 var save=0;  //节省金额
 var integral=0; //积分
 
 var point;//每一行的单品积分
 var price;//每一行的市场价
 var ddprice;//每一行的当当价
 var number;//每一行的数量
 
 var mytable=$("#myTableProduct tr");
 for(var i=0;i<mytable.length;i++){//循环每一行
  point=$("#myTableProduct tr:eq("+i+") td:eq(1) label:eq(0)").html();
  price=$("#myTableProduct tr:eq("+i+") td:eq(2) label:eq(0)").html();
  ddprice=$("#myTableProduct tr:eq("+i+") td:eq(3) label:eq(0)").html();
  number=$("#myTableProduct tr:eq("+i+") td:eq(4) input:eq(0)").val();
 
  if(isNaN(number)){
   alert("您输入的商品数量格式有误，请重新输入!");
   $("#myTableProduct tr:eq("+i+") td:eq(4) input:eq(0)").select();
   return;
  }
  total+=ddprice*number;
  save+=(price-ddprice)*number;
  integral+=point*number;
 }
 $("#product_total").html(total.toFixed(2));
 $("#product_save").html(save.toFixed(2));
 $("#product_integral").html(integral.toFixed(2));
}

var mycount=0;
function buyProduct(obj){
 var bookName=$("#"+obj+" li:eq(0)").text().substring(1);
 var bookPrice=$("#"+obj+" li:eq(1)").text().substring(1);
 var ddPrice=$("#"+obj+" li:eq(2)").text().substring(1);
 var bookPoint=ddPrice*10;
 var flag=true;
 
 var rebate=ddPrice/bookPrice*100;
 
 var mytable1=$("#myTableProduct tr");
 for(var i=0;i<mytable1.length;i++){//循环每一行
  name=$("#myTableProduct tr:eq("+i+") td:eq(0) a:eq(0)").text();
  if(name==bookName){
   var sum=$("#myTableProduct tr:eq("+i+") td:eq(4) input:eq(0)").val();
   sum++;  //如果存在则数量加1
   $("#myTableProduct tr:eq("+i+") td:eq(4) input:eq(0)").val(sum);
   productCount();
   return;
  }
 }
 //如果不存在，则在已购商品列表中添加一行
 mycount++;
 var str="<tr class=\"shopping_product_list\" id=\"addProduct_"+mycount+"\">";
 str+="<td class=\"shopping_product_list_1\"><a href=\"#\" class=\"blue\">"+bookName+"</a></td>";
 str+="<td class=\"shopping_product_list_2\"><label>"+bookPoint+"</label></td>";
 str+="<td class=\"shopping_product_list_3\">￥<label>"+bookPrice+"</label></td>";
 str+="<td class=\"shopping_product_list_4\">￥<label>"+ddPrice+"</label> ("+rebate.toFixed(0)+"折)</td>";
 str+="<td class=\"shopping_product_list_5\"><input type=\"text\" value=\"1\" onBlur=\"productCount()\"></td>";
 str+="<td class=\"shopping_product_list_6\"><a href=\"javascript:deleteP('addProduct_"+mycount+"')\" class=\"blue\">删除</a></td></tr> ";
 $("#myTableProduct").prepend(str); 
 productCount();
}
$(function(){
	$('#removeAllProduct').click(function(){
		var dflag=confirm('您确定要清空购物车吗？')
		if(dflag){
			$('.shopping_product_list').remove();
		}
		else{
			return;
		}
		productCount();
	})
})