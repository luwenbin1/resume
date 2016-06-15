function getCurDate(){
	var d = new Date();
	var week;
	switch (d.getDay()){
		case 1: week="星期一"; break;
		case 2: week="星期二"; break;
		case 3: week="星期三"; break;
		case 4: week="星期四"; break;
		case 5: week="星期五"; break;
		case 6: week="星期六"; break;
		default: week="星期天";
	}

	var years = d.getFullYear();
	var month = add_zero(d.getMonth()+1);
	var days = add_zero(d.getDate());
	var hours = add_zero(d.getHours());
	var minutes = add_zero(d.getMinutes());
	var seconds=add_zero(d.getSeconds());
	var ndate = years+"年"+month+"月"+days+"日 "+week;
	divT.innerHTML= ndate;
}

function add_zero(temp){
	if(temp<10) return "0"+temp;
	else return temp;
}
$(function(){
	getCurDate();
	var pagesize=20;
	var currentsize=0;
	var tiao;
	var allsize;
	var value;
	ajax_num('message')
	ajax_page(currentsize,pagesize)
	function ajax_page(currentsize,pagesize){
		value={
			currentsize:currentsize,
			pagesize:pagesize
		}
		$.ajax({
			url:'gettellme.php',
			type:'get',
			data:value,
			success:function(res){
				if(res){
					var obj = JSON.parse(res);
					$('#showlist').html(' ');
					for(i in obj){
						var newhtml=$('<div class="list_m"><div class=""><span>'+obj[i].name+'</span></div><div class=""><span>'+obj[i].ip.substring(0,obj[i].ip.lastIndexOf('.'))+'.***</span></div><div class=""><span>'+obj[i].email+'</span></div><div class=""><span>'+obj[i].tell+'</span></div><div class=""><span>'+obj[i].datatime+'</span></div></div>');
						$('#showlist').append(newhtml);
					}
					$('.list_m div span').on('click',function(){
						alert($(this).html());
					})
					$('#loc').html(currentsize+1)
				}else{
					$('.dialog').fadeIn(500);
					$('.dialog span').html('系统可能有错！请联系我。');
					setTimeout(function(){
						$('.dialog').fadeOut(500);
					},2000);
				};
			}
		})
	}
	function ajax_num(table){
		value={
			table:table
		}
		$.ajax({
			url:'nunber.php',
			type:'get',
			data:value,
			success:function(res){
				if(res){
					var obj_num = JSON.parse(res);
					tiao=obj_num.length;
					$('#gib').html(tiao);
					allsize=Math.ceil(tiao/pagesize);
					$('#pp').html(allsize);
					set_page(0);
				}else{
					$('.dialog').fadeIn(500);
					$('.dialog span').html('系统可能有错！请联系我。');
					setTimeout(function(){
						$('.dialog').fadeOut(500);
					},2000);
				};
			}
		})
	}
	function set_page(cur){
		currentsize=cur;
		var l;
		var page_a;
		var cur_=cur;
		if(cur<=2){
			cur_=1
		}else if(cur>=allsize-3){
			cur_=allsize-4
		};
		for(var i=cur_;i<=allsize;i++){
			if(l==undefined){l=0};l++;
			if(l>5) break;
			if(i==cur+1){
				page_a+='<a href="" class="a hover">'+i+'</a>';		
			}else{
				page_a+='<a href="" class="a">'+i+'</a>';				
			}
		}
		var newhtmlpage=$(page_a);
		$('.page_a').html(' ');
		$('.page_a').append(newhtmlpage);
		
		$('.page .a').on('click',function(){
			$(this).addClass('hover').siblings().removeClass('hover');
			ajax_page($(this).html()-1,pagesize);
			set_page($(this).html()-1);
			return false;
		})			
		
	}
	$('.page .next').click(function(){
		currentsize++;
		if(currentsize>=allsize){
			$('.dialog').fadeIn(500);
			$('.dialog span').html('亲！超出最大页数。');
			setTimeout(function(){
				$('.dialog').fadeOut(500);
			},2000);
			currentsize=allsize-1
		}else{
			ajax_page(currentsize,pagesize)
		}

		set_page(currentsize)
		return false;
	})
	$('.page .prev').click(function(){
		currentsize--;
		if(currentsize<0){
			$('.dialog').fadeIn(500);
			$('.dialog span').html('亲！超出最小页数。');
			setTimeout(function(){
				$('.dialog').fadeOut(500);
			},2000);
			currentsize=0;
		}else{
			ajax_page(currentsize,pagesize)
		}
		document.title=currentsize
		set_page(currentsize)
		return false;
	})
	
	
	
	
	$('.dialog a').click(function(){
		$('.dialog').fadeOut(500);
		return false;
	})
})