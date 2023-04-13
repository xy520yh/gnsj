// JavaScript Document
$(function(){
	 //弹窗点击
	$('.sure_btn').click(function(){
        $('.masked').css('display','block');
		$('.tc_success').css('display','block');
    })
    $('.closed').click(function(){
        $(this).parent().parent().css('display','none');
        $('.masked').css('display','none');
	})
	$('.masked').click(function(){
		$('.tc_success').css('display','none');
        $('.masked').css('display','none');
	})


	// 导航位置连接到对应屏幕
		$('.n01,.btn-reservation,.n02').click(function(){
			jQuery('html,body').animate({scrollTop:$('#pro2').offset().top}, 1000);
		});
		// $('.n02').click(function(){
		// 	jQuery('html,body').animate({scrollTop:$('#pro2').offset().top}, 1000);
		// });
		$('.n03').click(function(){
			jQuery('html,body').animate({scrollTop:$('#pro3').offset().top}, 1000);
		});
		$('.n04').click(function(){
			jQuery('html,body').animate({scrollTop:$('#pro5').offset().top}, 1000);
		});
		$('.n05,#five').click(function(){
			jQuery('html,body').animate({scrollTop:$('#pro6').offset().top}, 1000);
		});
		

		// 返回顶部
		$("#gotop").click(function(){
				jQuery("html,body").animate({scrollTop:0},1000);
		});	
		// 导航位置连接到对应屏幕
			$('.slideTo').click(function(){
				jQuery('html,body').animate({scrollTop:$('#pro6').offset().top}, 1000);
			});
		$(window).scroll(function() {
				if ( $(this).scrollTop() > 300){
					$('#gotop').fadeIn("fast");
				} else {
					$('#gotop').stop().fadeOut("fast");
				}
		});
		
		// 3d滚动
		var mySwiper = new Swiper('.part5_container',{
		
			slidesPerView:3,
			observer:true,
			observeParents:true,
			pagination: '.pagination',
			grabCursor: true,
			autoplay : 5000,
			paginationClickable: true,
			loop:true,
			//Enable 3D Flow
			tdFlow: {
				rotate : -30,
				stretch :0,
				depth: 120,
				modifier : 1,
				shadows:true
			}
		})
		$('#btn1').click(function(){
			mySwiper.swipePrev(); 
		})
		$('#btn2').click(function(){
			mySwiper.swipeNext(); 
		})
	
							
	})


	$(window).resize( function (){
		//alert( "窗体大小改变了！" );
		location.reload()
		//这里你可以写你的刷新代码！
   });


// function one(){
// 	jQuery('html,body').animate({scrollTop:$('#pro6').offset().top-100}, 140);
// }
// window.onload=function(){
// 	one();
// }
// (function (doc, win) {
// 	var doc = doc.documentElement;
// 	doc.addEventListener('DOMContentLoaded', Resize, false);
// 	// 当DOM加载后执行
// 	win.addEventListener('resize', Resize, false);
// 	if (doc.clientWidth) {
// 	  Resize();
// 	} else {
// 	  setTimeout(Resize, 100)
// 	}
// 	// 当屏幕发生变化时执行
// 	function Resize() {
// 	  doc.style.fontSize = doc.clientWidth / 19.2 + 'px';
// 	}
//   })(document, window)




