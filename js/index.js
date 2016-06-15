function media(){
	var width_=document.documentElement.clientWidth||document.body.clientWidth;
	var head=document.getElementsByTagName('head')[0];
	var mobliejs=document.createElement('script');
	var mobliecss=document.createElement('link');
	if(parseInt(width_)<480){
		mobliejs.setAttribute('src','http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js');
		head.appendChild(mobliejs);
		mobliecss.setAttribute('href','http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css');
		mobliecss.setAttribute('rel',"stylesheet")
		head.appendChild(mobliecss);
	}
}
media();
$(function(){
	var w={};
	$('.bgImginnerwaper ul').css('width',(($('.bgImginnerwaper ul li').width()+15)*$('.bgImginnerwaper ul li').length-15)+'px')
	$('.changeSkin').click(function(){
		$('.bgImgBox').animate({'top':'0px'},200);
		return false;
	})
	$('.bgImgBox .close').click(function(){
		$('.bgImgBox').animate({'top':'-80px'},200);
		return false;
	})
	$('.bgImginnerwaper ul li img').click(function(){
		var src_=$(this).attr('src');
		$(this).parent().addClass('select').siblings().removeClass('select');
		$('body').css('background-image','url('+src_+')');
	})
	var i=0;
	$('#right-arrow').click(function(){
		i++;
		if(i>$('.bgImginnerwaper ul li').length-5){
			i=0;
		}
		$('.bgImginnerwaper ul').animate({'left':-i*135+'px'},200);
		return false;
	})
	$('#left-arrow').click(function(){
		i--;
		if(i<0){
			i=$('.bgImginnerwaper ul li').length-5;
		}
		$('.bgImginnerwaper ul').animate({'left':-i*135+'px'},200);
		return false;
	})
	$('.main_nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.main_m .main_m1').eq($(this).index()).addClass('active').siblings().removeClass('active');
		var classarr=['w90','w90','w90','w50','w30','w90'];
		if($(this).index()==1){
			for(var i=0;i<=$('.progressbar-bar').length;i++){
				$('.progressbar-bar').eq(i).addClass(classarr[i]);
			}
		}else if($(this).index()==3){
			window.a=setInterval(function(){
				if(!w.pro_item)w.pro_item=0;
				if(w.pro_item<=$('.pro-item').length){
					$('.pro-item').eq(w.pro_item).addClass('show');
				}else{
					w.pro_item=0
					clearInterval(a);
					return false;
				}
				w.pro_item++;
			},600)
			window.b=setInterval(function(){
				if(!w.pro_desc_txt)w.pro_desc_txt=0;
				if(w.pro_desc_txt<=$('.pro-desc-txt').length){
					$('.pro-desc-txt').eq(w.pro_desc_txt).addClass('show');
				}else{
					w.pro_desc_txt=0
					clearInterval(b);
					return false;
				}
				w.pro_desc_txt++;
			},600)
			window.c=setInterval(function(){
				if(!w.pro_bgmoving)w.pro_bgmoving=0;
				if(w.pro_bgmoving<=$('.pro-bgmoving').length){
					$('.pro-bgmoving').eq(w.pro_bgmoving).css('height','100%');
				}else{
					w.pro_bgmoving=0;
					clearInterval(c);
					return false;
				}
				w.pro_bgmoving++;
			},300)
		}
		else{
			for(var i=0;i<=$('.progressbar-bar').length;i++){
				$('.progressbar-bar').eq(i).removeClass(classarr[i]);
			}
			$('.pro-item').removeClass('show');
			$('.pro-desc-txt').removeClass('show');
			$('.pro-bgmoving').css('height','0%');
			if(w.pro_bgmoving!=0)w.pro_bgmoving=0;
			if(w.pro_desc_txt!=0)w.pro_desc_txt=0;
			if(w.pro_item!=0)w.pro_item=0;
			clearInterval(a);
			clearInterval(b);
			clearInterval(c);
		}
	})
	var l=0
	setInterval(function(){
		$('#cycleImg img').eq(l=(l++>=$('#cycleImg img').length?0:l)).fadeIn().siblings().fadeOut();
	},3000);
	
	$('form').eq(0).submit(function(){
		$('.dialog').fadeIn(500);
		$('.dialog span').html('正在发送！');
		var user={
			tell:$('#tell').val(),
			name:$('#name').val(),
			email:$('#email').val(),
		}
		$.ajax({
			url:'tellme.php',
			type:'get',
			data:user,
			success:function(res){
				res=eval(res);
				if(res){
					$('.dialog').fadeIn(500);
					$('.dialog span').html('发送成功！');
					setTimeout(function(){
						$('.dialog').fadeOut(500);
					},2000);
				}else{
					$('.dialog').fadeIn(500);
					$('.dialog span').html('发送失败！');
					setTimeout(function(){
						$('.dialog').fadeOut(500);
					},2000);
				};
			}
		})
		$('form').get(0).reset()
		return false;
	})
	$('.dialog a').click(function(){
		$('.dialog').fadeOut(500);
		return false;
	})
})
