
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
};          

 
$(function () {

	  // 首屏社区qq
  $('.part1_qq').click(function(){
    $('.part1_qq_code').fadeToggle();
   $('.part1_wx_code').css('display','none');
  })
  $('.part1_wx').click(function(){
    $('.part1_wx_code').fadeToggle();
   $('.part1_qq_code').css('display','none');
  })

	// 点击“立刻启程“展开预约方式
  $('.part_btn_cbt').click(function(){
    $(' .masked').css('display','block');
    $('.tc_way').css('display','block');
  })
  $('.tc_way .closed').click(function(){
      $(this).parent().parent().css('display','none');
      $('.masked').css('display','none');
  })


    // 点击活动规则
    $('.part_box_rule').click(function(){
      $(' .masked').css('display','block');
      $('.tc_rule').css('display','block');
    })
    $('.tc_rule .closed').click(function(){
      $('.tc_rule').css('display','none');
      $('.masked').css('display','none');
    })
      
      // 点击“邀请好友“弹出恭喜成功预约
      $('.part3_right_dc_btn').click(function(){
        $(' .masked').css('display','block');
        $('.tc_yy_sucess1').css('display','block');
      })
      $('.tc_yy_sucess1 .closed').click(function(){
        $(this).parent().parent().css('display','none');
        $('.masked').css('display','none');
      })

    // 点击领取
    $('.part_box_btn').click(function(){
      $(' .masked').css('display','block');
      $('.tc_goddess_box').css('display','block');
    })
    $('.tc_goddess_box .closed').click(function(){
      $('.tc_goddess_box').css('display','none');
      $('.masked').css('display','none');
    })

       // 点击祝福语
         $('.part3_bless_click').click(function(){
          $(' .masked').css('display','block');
          $('.part3_bless_tc').css('display','block');
        })
        $('.part3_bless_tc .closed_bless').click(function(){
           $('.part3_bless_tc').css('display','none');
            $('.masked').css('display','none');
        })
    

     

   
  	// 注册框里面获取焦点
	//  $(".text_content1").focus(function(){
	// 	if($(this).val()=='请输入电话)'){
	// 		$(this).val("")
	//   	}
	//   });
	//   $(".text_content1").blur(function(){
	// 	if($(this).val()==''){
	// 		$(this).val("请输入电话)")
	//   }
	//   })
      
});


