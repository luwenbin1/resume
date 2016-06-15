(function(){
	if(!window.localStorage.getItem('luwenbin')){
		window.localStorage.setItem('luwenbin','I love');
		$('.dialog').fadeIn(500);
		$('.dialog span').html('HELLO！欢迎第一次访问我。');
		setTimeout(function(){
			$('.dialog').fadeOut(500);
		},2000);
	}else{
		$('.dialog').fadeIn(500);
		$('.dialog span').html('HELLO！再次和您见面。');
		setTimeout(function(){
			$('.dialog').fadeOut(500);
		},2000);
	}
	window.sys={};
	var ua=navigator.userAgent.toLowerCase();
	var s;
	(s=ua.match(/msie ([\d.]+)/))?sys.ie=s[1]:
	(s=ua.match(/firefox\/([\d.]+)/))?sys.firefox=s[1]:
	(s=ua.match(/chrome\/([\d.]+)/))?sys.chrome=s[1]:
	(s=ua.match(/opera\/.*version\/([\d.]+)/))?sys.opera=s[1]:
	(s=ua.match(/version\/([\d.]+).*safari/))?sys.safari=s[1]:ua;
	if (/webkit/.test(ua)) sys.webkit=ua.match(/webkit\/([\d.]+)/)[1];

	var pos;
	
	navigator.geolocation.getCurrentPosition(function(position){
		var a="纬度"+position.coords.latitude;
		a+="经度"+position.coords.longitude;
		pos=a;
	},function(err){
		console.log(err.code)
	},{
		timeout:3000
	})
	
	setTimeout(function(){
		if(pos==undefined){
			pos=0;
		}
		if(s==undefined){
			s=[ua];
		}
		var value={
			sys:s[0],
			width:window.screen.width,
			height:window.screen.height,
			position:pos
		}
		$.ajax({
			url:'info.php',
			type:'get',
			data:value,
			success:function(res){
				res=eval(res);
				if(res[0]){
					$('.dialog').fadeIn(500);
					$('.dialog span').html('HELLO！IP为'+res[1]+'您好。');
					setTimeout(function(){
						$('.dialog').fadeOut(500);
					},2000);
				}else{
					$('.dialog').fadeIn(500);
					$('.dialog span').html('系统可能有错！请联系我。');
					setTimeout(function(){
						$('.dialog').fadeOut(500);
					},2000);
				};
			}
		})
	},3100);
	
	sys=null;
	position=null;
})()