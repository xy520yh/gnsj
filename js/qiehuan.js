
function rePosition(){
  var width = document.documentElement.clientWidth || document.body.clientWidth;
  var ratio = width/750;
  if(width<=750){
      document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
  }else{
      document.getElementsByTagName('html')[0].style.fontSize="100px";
  }
}
rePosition();
window.onresize = function(){
  rePosition();
  setRem()
};

//在改变窗口大小或者加载完成之后所有的尺寸都已转变后执行下面这一句，把body的透明度设为1
function setRem(){
	document.getElementsByTagName("body")[0].style.opacity = '1'   // ******
	
}
// 加载完成
window.onload = function () {
setRem()
}

$(function(){

	var iconlist = [{
		title1: 'images/tc_fl_img1.png',
		title2: '开服14天登录有好礼',
		desc1: '【每日登录好礼不断】',
		desc2:'创建角色后，每日登入即享好礼,',
		desc3:'连续签到14天可领取6星花灵，',
		desc4:'共计3300召唤种子',
	  },
	  {
		title1: 'images/tc_fl_img2.png',
		title2: '升级有好礼',
		desc1: '【升级之路，级级有好礼】',
		desc2:'只需完成主线进度及参与游戏玩法，',
		desc3:'轻松获得6星花灵碎片*170，',
		desc4:'累计获得召唤种子*12150',
	  },
	  {
		title1: 'images/tc_fl_img3.png',
		title2: '百变时装免费拿',
		desc1: '【在线就能领福利】',
		desc2:'参与日常活跃玩法手机兑换丝绸,',
		desc3:'丝绸可用来兑换时装（哥特礼服套装、水手服套装、战斗学院套装、飞星特效，',
		desc4:'时装也可通过扭蛋玩法抽取。',
	  },
	  {
		title1: 'images/tc_fl_img4.png',
		title2: '国服专属国风花灵热情献礼',
		desc1: '【神话等级轻松升】',
		desc2:'角色达到45级便可通过“芙蕖献礼”',
		desc3:'任务免费获得国服专属国风花灵——芙蕖，',
		desc4:'完成对应任务即可一路轻松升星至神话。',
	  },
	  {
		title1: 'images/tc_fl_img5.png',
		title2: '自选卡池概率UP',
		desc1: '【元素自由选，搭配轻松赢】',
		desc2:'新服专属自选卡池属性，',
		desc3:'概率up加成,',
		desc4:'想要什么元素花灵,轻松获得',
	  },
	  {
		title1: 'images/tc_fl_img6.png',
		title2: '专属坐骑免费领',
		desc1: '【卡巴拉大陆最受欢迎的人气坐骑】',
		desc2:'完成新手任务',
		desc3:'即可获得专属坐骑——奇可',
		desc4:'',
	  	},
		{
			title1: 'images/tc_fl_img7.png',
			title2: '每日登录福利多多',
			desc1: '【日常任务领好礼】',
			desc2:'完成日常任务',
			desc3:'获得活跃度即可获得元素',
			desc4:'召唤种子*900',
		},
		{
			title1: 'images/tc_fl_img8.png',
			title2: '公测充值返利',
			desc1: '【充值返利】',
			desc2:'开服前7天，',
			desc3:'充值金额海量返还，',
			desc4:'超多彩晶等你领取',
		},
		{
			title1: 'images/tc_fl_img9.png',
			title2: '全民瓜分海量彩晶',
			desc1: '【全民狂欢】',
			desc2:'公测活动期间完成任务,',
			desc3:'即可获取幸运号码,',
			desc4:'幸运号码可参与瓜分海量彩晶大奖',
		},
	  ]

    //点击角色出现弹窗
    $('.box_wrap').on('click', "div", function (g) {
		var lengt=$(this).index();
		$(' .masked').css('display','block');
		$('.role_box').addClass('active');
		console.log(lengt)
		g.preventDefault();
		
		//var index = $(this).attr('data-index');
		var html = '<div class="div"><div class="title1"><img src='+iconlist[lengt].title1+'></div><div class="title2">'+iconlist[lengt].title2+'</div><div class="desc"><p>'+iconlist[lengt].desc1+'</p><p>'+iconlist[lengt].desc2+'</p><p>'+iconlist[lengt].desc3+'</p><p>'+iconlist[lengt].desc4+'<p></div> </div>';
		$('.role_box .note').html(html)
  
	  });
	  $('.role_closed').on('click', function () {
		$('.role_box').removeClass('active');
		$(' .masked').css('display','none');
	  });

	  $('.part_qq').click(function(){
		$('.part_qq_code').fadeToggle();
		 $('.part_wx_code').css('display','none');
	  })
	  $('.part_wx').click(function(){
		$('.part_wx_code').fadeToggle();
		 $('.part_qq_code').css('display','none');
	  })
	// 首屏漂浮链接到第二屏幕
	$('.part_box_suspend').click(function(){
		jQuery('html,body').animate({scrollTop:$('#pro2').offset().top}, 1000);
	});
	// 首屏点击活动规则
	$('.part1_age_tip').click(function(){
		$(' .masked').css('display','block');
		$('.tc_rule').css('display','block');
	});
	$('.rule_closed').click(function(){
		$('.tc_rule').css('display','none');
		$('.masked').css('display','none');
	});

	// 视频播放
	var popV = document.getElementById('pop_v');
	$('.part1_video_play,.video1,.video2,.video3,.video4,.video5,.video6,.video7').click(function(){
		var vSrc = $(this).attr('mp4');
		popV.src = vSrc;
		//alert(vSrc)
		$('#pop_video').fadeIn();
		// musicBg.pause();
		// $('.music_switch').removeClass('active')
		// isPlayMusic = false;
		popV.play();
	});
	$('#close_video').click(function(){
		popV.pause();
		 $('#pop_video').fadeOut();
		// musicBg.play();
		// $('.music_switch').addClass('active')
	});
	// 返回顶部
	$("#gotop").click(function(){
		jQuery("html,body").animate({scrollTop:0},1000);
	});	
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300){
			$('#gotop').fadeIn("fast");
		} else {
			$('#gotop').stop().fadeOut("fast");
		}
	});


	  //音频
	var bgm = new Audio();
	bgm.src = 'music/BGM.mp3';
	//点击音乐按钮
	$('body').on("click", '.btn-bgm', function () {
		if (bgm.paused) {
			$(this).addClass('play')
			bgm.play();
		} else {
			$(this).removeClass('play')
			bgm.pause();
		}
		
	});


 });          





