
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

	// 首屏点击“立刻启程“展开预约方式
  $('.part_btn_cbt').click(function(){
    $(' .masked').css('display','block');
    $('.tc_way').css('display','block');
  })
  $('.tc_way .closed').click(function(){
      $(this).parent().parent().css('display','none');
      $('.masked').css('display','none');
  })

   // 首屏视频弹窗弹出
   $(document).ready(function(){
    $("#playbtn").colorbox({iframe:true, innerWidth:"50%", innerHeight:"60%"});
  }) ; 
   	// 首屏点击预约弹窗“立即预约“按钮弹出分享成功
    $('.way_btn').click(function(){
      $(' .masked').css('display','block');
      $('.tc_yy_sucess').css('display','block');
      $('.tc_way').css('display','none');
    })
    $('.tc_yy_sucess .closed').click(function(){
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



  

      // 第四屏点击抽奖按钮
        $('.part_box_btn').click(function(){
          $(' .masked').css('display','block');
          $('.tc_goddess_box').css('display','block');
        })
        $('.tc_goddess_box .closed').click(function(){
          $('.tc_goddess_box').css('display','none');
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
