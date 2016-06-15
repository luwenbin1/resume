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
	$(window).scroll( function() {
		var scrollValue=$(window).scrollTop();
		scrollValue > 100 ? $('#toTop').fadeIn():$('#toTop').fadeOut();
	});
    $('#toTop').click(function(){
		$("html,body").animate({scrollTop:0},200);
	});
})


//模拟数据
	var date = [
		[
			{'src':'images/pbl/5.jpg','href':'#','title':'采用顶级的羊皮材料，更时尚，更有格调！搭配秋冬服饰更有独特的韵味！'},
			{'src':'images/pbl/6.jpg','href':'#','title':'慢跑鞋无疑是整个2014年的时尚宠儿。除却功能性以及对足部的保护之外，选择一双款型时尚，配色亮眼的慢跑鞋绝对是您对自己时尚之道最好的诠释。乔丹时尚功能休闲慢跑鞋以出色的性能，时尚的造型'},
			{'src':'images/pbl/7.jpg','href':'#','title':'圣迩尼—让你怦然心动，2014最新潮流性感个性款式，穿出不一样的时尚！'},
			{'src':'images/pbl/8.jpg','href':'#','title':'潮男时尚T台秀'},
			{'src':'images/pbl/9.jpg','href':'#','title':'潮流荧光色系'},
			{'src':'images/pbl/10.jpg','href':'#','title':'新款男士商务几何图案修身夹克'},
			{'src':'images/pbl/11.jpg','href':'#','title':'精梳棉面料，柔软舒适透气。'},
			{'src':'images/pbl/12.jpg','href':'#','title':'舒适轻薄款，穿着轻薄，无负担感。修身版型，起到了很好的修身的效果，更加塑型。'},
		],
		[
			{'src':'images/pbl/13.jpg','href':'#','title':'丝质柔滑面料 干净舒适。衣襟拼色，时尚有型，金属质地纽扣，完美细节品质。'},
			{'src':'images/pbl/14.jpg','href':'#','title':'运用时兴的对比拼色元素，中袖设计与弹力袖口的组合既显瘦又端庄，散发都市丽人的知性气质。'},
			{'src':'images/pbl/15.jpg','href':'#','title':'干练利落的尖领融合复古的做旧蓝色，于撞色对比间营造视觉冲击力，展现鲜明的时尚态度。'},
			{'src':'images/pbl/16.jpg','href':'#','title':'鲜嫩的鹅黄色圆领配以拉链前襟十分吸引眼球，亲肤丝棉材质舒适贴合肌肤，恰到好处的休闲造型极富亲和力。'},
			{'src':'images/pbl/17.jpg','href':'#','title':'淡雅桃与经典黑色的撞色拼接，展现大气利落气质。'},
			{'src':'images/pbl/18.jpg','href':'#','title':'清新利落的白色衬衫小翻领设计，平添一份邻家女孩般清爽干净的气质。'},
			{'src':'images/pbl/19.jpg','href':'#','title':'简约圆领，凸显优雅大方气质。裙身采用有浮雕质感的花型，更添女性柔美浪漫的古典气质。'},
			{'src':'images/pbl/20.jpg','href':'#','title':'胸前以沙漏式的剪裁以及颇具设计感的隐形开叉设计，轻松衬出姣美丰满的胸型。'},
		],
		[
			{'src':'images/pbl/21.jpg','href':'#','title':'甜美的白色波点，加上薄荷绿的清新映衬，简约中透漏女神气质。上班约会都是不错的选择。'},
			{'src':'images/pbl/22.jpg','href':'#','title':'宽松的H版型连衣裙，腰部可自由调节，轻松藏起身体小赘肉。'},
			{'src':'images/pbl/23.jpg','href':'#','title':'新款骷髅印花宽松无袖圆领连衣裙，穿出潮流范儿。'},
			{'src':'images/pbl/24.jpg','href':'#','title':'天丝牛仔连衣裙，比雪纺更柔软透气，比棉更具光泽。'},
			{'src':'images/pbl/25.jpg','href':'#','title':'独特的露背设计，展现女性妩媚性感的背部线条。'},
			{'src':'images/pbl/26.jpg','href':'#','title':'职业男人着装导师，让不修边幅SAY GOODBYE。'},
			{'src':'images/pbl/27.jpg','href':'#','title':'上身宽松有型，下身包臀设计，简洁大方的设计，流露出性感修身的好身材，得体大方。'},
			{'src':'images/pbl/28.jpg','href':'#','title':'主珠为天然红玛瑙佛珠，加以天然蓝绿松顶珠为配珠，绿松石象征着“信赖和信任”，也给远征的人带来吉祥和好运，被誉为成功幸运之石。'},
		],
		[
			{'src':'images/pbl/29.jpg','href':'#','title':'采用吸湿速干面料，穿着舒适，圆领设计，简洁大方；图案独有新疆风貌垂钓活动，彰显Discovery Expedition品牌非凡探索的户外精神。'},
			{'src':'images/pbl/30.jpg','href':'#','title':'使用仿棉感速干面料，加入吸湿速干整理，含有碳素有除臭抗菌的功能。适合徒步、穿越、露营、日常等环境穿着。'},
			{'src':'images/pbl/31.jpg','href':'#','title':'行走在野外，再不怕清晨露珠或是突如其来的毛毛雨打湿衣服，时刻保持舒爽。'},
			{'src':'images/pbl/32.jpg','href':'#','title':'平整的领口，匀密的双车线，在这个短袖衬衫解禁的夏天显得精致而精神。'},
			{'src':'images/pbl/33.jpg','href':'#','title':'撞色拼接，弹力面料，弹力包边下摆，后背均带有3M反光，增加骑行过程的安全性。'},
			{'src':'images/pbl/34.jpg','href':'#','title':'面料凉爽顺滑，整体设计特别女人味。'},
			{'src':'images/pbl/35.jpg','href':'#','title':'你可以穿着它去散步，去骑车，去户外，去郊游，晒着太阳而无需担心晒伤。'},
			{'src':'images/pbl/36.jpg','href':'#','title':'拼色款式设计，透气轻薄的超轻面料，带给您完美舒适的质感，腋下面料冲孔设计，方便排汗与换气，更有利于户外活动穿着。'},
		],
		[
			{'src':'images/pbl/37.jpg','href':'#','title':'王者之气尽显无疑，体现男人魅力。'},
			{'src':'images/pbl/38.jpg','href':'#','title':'胸针采用的优质合金，经过精湛的电镀和抛光处理，呈现出华丽的光泽，手感顺滑不易生锈。长时间使用依旧持久弥新。'},
			{'src':'images/pbl/39.jpg','href':'#','title':'造型精美，作为点缀出席各种场合。'},
			{'src':'images/pbl/40.jpg','href':'#','title':'被用于出席颁奖典礼和参与派对的装扮眼镜。'},
			{'src':'images/pbl/41.jpg','href':'#','title':'性感的大红在春夏季大放异彩，不再那么闪耀而浓重，转而以一种淡淡的姿态唤醒人们的感官视觉。'},
			{'src':'images/pbl/42.jpg','href':'#','title':'潮流百搭，遮阳、修脸神奇，适合各种场合佩带。'},
			{'src':'images/pbl/43.jpg','href':'#','title':'最具代表色彩的眼镜，一如既往的为年轻人增光。商务、休闲、驾车、运动，每一个户外场合都是最佳的搭配宠儿'},
			{'src':'images/pbl/44.jpg','href':'#','title':'用黑色蕾丝做腰带，有很好的收腰效果，合体修身，简洁中透露随性感。'},
		],
		[
			{'src':'images/pbl/45.jpg','href':'#','title':'豪放派展现内涵的首选。'},
			{'src':'images/pbl/46.jpg','href':'#','title':'而立之年，终因一串友人相赠的佛珠心平气和，离苦得乐。'},
			{'src':'images/pbl/47.jpg','href':'#','title':'中微喇收紧腰腹线条的同时，宽阔的小腿裤腿遮掩腿型，重塑小腿线条。'},
			{'src':'images/pbl/48.jpg','href':'#','title':'COACH 蔻驰 女士PVC经典LOGO卡其蓝色手提肩背包'},
			{'src':'images/pbl/49.jpg','href':'#','title':'2014新品俏皮清新马卡龙拼色色系轻薄大容量长款钱包'},
			{'src':'images/pbl/50.jpg','href':'#','title':'COACH 女款皮革十字花纹柿红色手提肩背斜挎包'},
			{'src':'images/pbl/51.jpg','href':'#','title':'每个包包都有其独特的风采，捧在手心里，随意搭配，精致可爱。'},
			{'src':'images/pbl/52.jpg','href':'#','title':'镜面合成革易于清洁打理，金属后跟时尚潮流，款型简约，适于职场或宴会穿着。'},
		],
		[
			{'src':'images/pbl/53.jpg','href':'#','title':'女士精品'},
			{'src':'images/pbl/54.jpg','href':'#','title':'雀仔飞鸟灵感仿佛来自于法国田园风情的家居用品。艳红、薄荷绿以及暖粉的色彩应用在蓝调针织裙上，热烈之外更具浪漫气息。'},
			{'src':'images/pbl/55.jpg','href':'#','title':'经典圆领设计，简单大方，宽松袖口，舒适大方。花鸟织锦缎拼接，复古典雅。细腻质地，手感弹滑，光泽柔和均匀，温和亲肤。'},
			{'src':'images/pbl/56.jpg','href':'#','title':'宽松休闲给人带来自在穿着体验，彰显大方知性的文艺韵味。'},
			{'src':'images/pbl/57.jpg','href':'#','title':'柔软顺滑，吸湿透气，一如第二层肌肤般，极为适合贴身穿着。'},
			{'src':'images/pbl/58.jpg','href':'#','title':'至美简约，没有任何多余的装饰，凸显干练气质。'},
			{'src':'images/pbl/59.jpg','href':'#','title':'永久典型的黑白条纹控，穿出潮男小清新。'},
			{'src':'images/pbl/60.jpg','href':'#','title':'运动元素是不可替代的“范儿”，摆脱束缚，带着欢快的心情，在街头、户外随心游走。'},
		],
		[
			{'src':'images/pbl/61.jpg','href':'#','title':'清甜马卡龙色系，是春夏不可或缺的主打元素。色调鲜活，条纹肌理自然，极具品质感。轻而易举地掠获少女芳心。'},
			{'src':'images/pbl/62.jpg','href':'#','title':'阿玛尼休闲夏日时尚阿玛尼型男短袖 大经典logo腰带 阳光百搭牛仔裤 过一个轻松阳光夏日'},
			{'src':'images/pbl/63.jpg','href':'#','title':'拼色连衣裙绝对是今夏的流行款'},
			{'src':'images/pbl/64.jpg','href':'#','title':'时尚名媛黑色静谧显瘦'},
			{'src':'images/pbl/65.jpg','href':'#','title':'甜美 休闲 名媛 OL 休闲 经典'},
			{'src':'images/pbl/66.jpg','href':'#','title':'中微喇收紧腰腹线条的同时，宽阔的小腿裤腿遮掩腿型，重塑小腿线条。'},
			{'src':'images/pbl/67.jpg','href':'#','title':'职业男人着装导师，让不修边幅SAY GOODBYE。'},
			{'src':'images/pbl/68.jpg','href':'#','title':'不同色彩的拼接，彰显潮流风尚，无形中增添了几分青春活力。'},
		]
	];
	
function getCheck(){
	var documentH=document.documentElement.clientHeight;
	var scrollH=document.documentElement.scrollTop||document.body.scrollTop;
	return documentH+scrollH>=getLastH()?true:false;
}
function getLastH(){
	var warp=document.getElementById('showpic');
	var boxs=getClass(warp,'box');
	return $(boxs[boxs.length-1]).offset().top+boxs[boxs.length-1].offsetHeight-100;
}

var getStarNum=0;
var indexScroll=0;
var scrollB=true;

function getStyle(box,top,left,index){
	if(getStarNum>=index)return;
	$(box).css({
		'position':'absolute',
		'top':top,
		'left':left
	})
	getStarNum=index;
}

function getClass(obj,className){
	var newobj=obj.getElementsByTagName('*');
	var newClass=[];
	for(var i=0;i<newobj.length;i++){
		if(newobj[i].className==className){
			newClass.push(newobj[i])
		}
	}
	return newClass;
}
function getIndex(minH,everyH){
	for(index in everyH){
		if(everyH[index]==minH)return index;
	}
}
$(window).on('load',function(){
	if(!scrollB)return;
	if(getCheck()){
		scrollB=false;
		setTimeout(function(){
			for(i in date[indexScroll]){
				var newhtml=$('<div class="box"><div class="info"><a href='+date[indexScroll][i].href+'><div class="pic"><img src="'+date[indexScroll][i].src+'"/></div><div class="title">'+date[indexScroll][i].title+'</div></a></div></div>');
				$('#showpic').append(newhtml);
			}
			setTimeout(function(){
				PBL('showpic','box');
				indexScroll++;
				scrollB=true;
				if(indexScroll==date.length){
					scrollB=false;
				}
			},200)
		},10)
	}
})
$(window).on('load',function(){
$(window).scroll(function(){
	if(!scrollB)return;
	if(getCheck()){
		scrollB=false;
		setTimeout(function(){
			for(i in date[indexScroll]){
				var newhtml=$('<div class="box"><div class="info"><a href='+date[indexScroll][i].href+'><div class="pic"><img src="'+date[indexScroll][i].src+'"/></div><div class="title">'+date[indexScroll][i].title+'</div></a></div></div>');
				$('#showpic').append(newhtml);
			}
			setTimeout(function(){
				PBL('showpic','box');
				indexScroll++;
				scrollB=true;
				if(indexScroll==date.length){
					scrollB=false;
				}
			},200)
		},10)
	}
})
})
function PBL(wrap,box){
	var wrap=document.getElementById(wrap);
	var boxs=getClass(wrap,box);
	var boxW=boxs[0].offsetWidth;
	var colsNum=4;
	wrap.style.width=boxW*colsNum+'px';
	var everyH=[];
	for(var i=0;i<boxs.length;i++){
		if(i<colsNum){
			everyH[i]=boxs[i].offsetHeight;
		}else{
			var minH=Math.min.apply(null,everyH);
			var minIndex=getIndex(minH,everyH);
			getStyle(boxs[i],minH,boxs[minIndex].offsetLeft,i);
			everyH[minIndex]+=boxs[i].offsetHeight;
		}
	}
	var maxH=Math.max.apply(null,everyH);
	wrap.style.height=maxH+'px';
}