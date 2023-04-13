
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
 /*part8--花灵*/ 
  var flowerswiper = new Swiper('.part8_swiper',{
      loop:true, initialSlide: 8,
      autopaly:true,
      slideToClickedSlide: true,
      slidesPerView: 4,
      freeMode: true,watchSlidesProgress: true,
      navigation: {
        nextEl: '.part8_menu  .swiper-button-next',
        prevEl: '.part8_menu .swiper-button-prev',
  },
  on: {
    resize: function () {
            setTimeout(function(){
              flowerswiper.update()
            },500)
            
      },
    slideChangeTransitionEnd:function(flowerswiper){ 
          var index = this.realIndex;
            //role.slideTo(swiper1.realIndex);
          $('.role .content_tro dd').eq(index).fadeIn().siblings().hide();
            var dd = $('.role .content_tro dd').eq(index);
          //  console.log(dd.length)
              $('.role .content_tro dd').hide()
              dd.show();
            //  dd.find('.role_name').addClass('animated fadeInDown');
            //  dd.find('.role_people').addClass('animated fadeInUp');
            //  dd.find('.note').addClass('animated fadeInRight');
          },
        },
  });

      
});

$(function () {
  // IOS和安卓切换
   $('.register_select div').click(function(){
      $('.register_select div').children().removeClass('active');
      $(this).addClass('active');
      $(this).siblings('div').removeClass('active');
    })
	 
// 点击首屏email
  $('.part1_email_link').click(function(){
    $(' .masked').css('display','block');
    $('.part1_tc_email').css('display','block');
  })
  $('.part1_tc_email .closed').click(function(){
      $(this).parent().parent().css('display','none');
      $('.masked').css('display','none');
  })
  // 点击首屏社区
  $('.part1_qq').click(function(){
    $('.part1_qq_code').css('display','block');
    $('.part1_wx_code').css('display','none');
  })
  $('.part1_wx').click(function(){
    $('.part1_wx_code').css('display','block');
    $('.part1_qq_code').css('display','none');
  })
  // 点击応募する
  $('.register_btn').click(function(){
    $(' .masked').css('display','block');
    $('.part3_tc_success').css('display','block');
  })
  $('.part3_tc_success .closed').click(function(){
    $(this).parent().parent().css('display','none');
    $('.masked').css('display','none');
  })
  // 点击footer下
  $('.footer_tc_link').click(function(){
    $(' .masked').css('display','block');
  $('.footer_tc_tip').css('display','block');
  })
  $('.footer_tc_tip .closed').click(function(){
    $(this).parent().parent().css('display','none');
    $('.masked').css('display','none');
  })


  $('.email_btn').click(function(){
    $(' .masked').css('display','block');
    $('.part1_tc_denglu').css('display','block');
    $('.part1_tc_email').css('display','none');
  })
  $('.part1_tc_denglu .closed').click(function(){
    $(this).parent().parent().css('display','none');
    $('.masked').css('display','none');
  })


});

$(function () {
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

// 首屏点击“立刻启程“展开预约方式
  $('.part_btn_cbt').click(function(){
    $(' .masked').css('display','block');
    $('.tc_way').css('display','block');
  })
  $('.tc_way .closed').click(function(){
      $(this).parent().parent().css('display','none');
      $('.masked').css('display','none');
  })
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
    // 首屏视频弹窗弹出
    // $(document).ready(function(){
    //   $("#playbtn").colorbox({iframe:true, innerWidth:"60%", innerHeight:"50%"});
    // }) ; 



  //第二屏幕火箭之路展开收起
  $('.part2_people_reserve_show').click(function(){
    $('.part2_people_reserve_hide').css('display','block');
    $('.part2_people_reserve_show').css('display','none');
  })
  $('.part2_reserve_fold,.part2_reserve_fold_dc').click(function(){
    $('.reserver_dc').css('display','none');
    $('.part2_people_reserve_show').css('display','block');
    $('.part2_people_reserve_hide').css('display','none');
  })


//点击进去女神的选择
$('.part2_event_lt_bless').click(function(){
  $('.part2_event_start').css('display','none');
  $('.goddess_main,.hualing_main,.goddess01_main,.gw_main').css('display','none');
  $('.reserver').css('display','none');
  $('.part2_event').css('display','block');
  $('.part2_goddess').css('display','block');
  $('.part2_gw').css('display','none');
  $('.part2_gold').css('display','none');
  $('.part2_jzh').css('display','none');
  $('.part2_goddess_choice01').css('display','block');
})

$('.part2_event_rb_flower').click(function(){
  $('.part2_event_start').css('display','none');
  $('.reserver').css('display','none');
  $('.goddess_main,.hualing_main,.goddess01_main,.gw_main').css('display','none');
  $('.part2_event').css('display','block');
  $('.part2_jzh').css('display','block');
  $('.part2_gw').css('display','none');
  $('.part2_gold').css('display','none');
  $('.part2_goddess').css('display','none');
  $('.part2_goddess_choice01').css('display','block');
})

$('.part2_event_rt_award').click(function(){
  $('.part2_event_start').css('display','none');
  $('.reserver').css('display','none');
  $('.goddess_main,.hualing_main,.goddess01_main,.gw_main').css('display','none');
  $('.part2_event').css('display','block');
  $('.part2_gold').css('display','block');
  $('.part2_gw').css('display','none');
  $('.part2_jzh').css('display','none');
  $('.part2_goddess').css('display','none');
  $('.part2_goddess_choice01').css('display','block');
})
$('.part2_event_lb_boss').click(function(){
  $('.part2_event_start').css('display','none');
  $('.reserver').css('display','none');
  $('.goddess_main,.hualing_main,.goddess01_main,.gw_main').css('display','none');
  $('.part2_event').css('display','block');
  $('.part2_gw').css('display','block');
  $('.part2_gold').css('display','none');
  $('.part2_jzh').css('display','none');
  $('.part2_goddess').css('display','none');
  $('.part2_goddess_choice01').css('display','block');
})

$('.left_prev,.left_prev3').click(function(){
  $('.part2_event').css('display','none');
  $('.part2_goddess').css('display','none');
  $('.part2_goddess_choice01').css('display','none');
  $('.reserver').css('display','block');
  $('.goddess01_main').css('display','none');
  $('.part2_event_start').css('display','block');
})

$('.right_next').click(function(){
  $('.four_one').css('display','none');
  $('.four_four').css('display','block');
  $('.four_two').css('display','none');
  $('.four_three').css('display','none');
})
$('.right_next3').click(function(){
  $('.three_one').css('display','none');
  $('.three_two').css('display','none');
  $('.three_three').css('display','block');

})

$('.choice_next').click(function(){
  $('.four_one').css('display','none');
  $('.four_two').css('display','block');
})
$('.choice_next3').click(function(){
  $('.three_one').css('display','none');
  $('.three_two').css('display','block');
})


$('.pagination_right').click(function(){
  $('.tc_address').css('display','block');
  $('.tc_yy_award ').css('display','none');
  $('.masked ').css('display','block');
})
$('.tc_address .closed').click(function(){
  $('.tc_address').css('display','none');
  $('.masked ').css('display','none');
})







//   var num=0;
//   var len=$('.goddess_main').length;
//   $('.right_next1').click(function(){
//       num++;
//       if(num==len){
//         num=0;
//       }
//       $('.goddess_main').css('display','none');
//       $('.goddess_main').eq(num).css('display','block');
//   })
//   $('.left_prev1').click(function(){
//     num--;
//     if(num<0){
//       num=len-1;
//     }
//     $('.goddess_main').css('display','none');
//     $('.goddess_main').eq(num).css('display','block');

//  })
//点击进去花灵的选择
//      var numA=0;
//      var len=$('.hualing_main').length;
//     $('.right_next2').click(function(){
//       numA++;
//       if(numA==len){
//         numA=0;
//       }
//       $('.hualing_main').css('display','none');
//       $('.hualing_main').eq(numA).css('display','block');
//   })
//    $('.left_prev2').click(function(){
//     numA--;
//     if(numA<0){
//       numA=len-1;
//     }
//     $('.hualing_main').css('display','none');
//     $('.hualing_main').eq(numA).css('display','block');

//  })
//点击进去鬼怪
//     var numB=0;
//     var len=$('.gw_main').length;
//    $('.right_next3').click(function(){
//     numB++;
//      if(numB==len){
//       numB=0;
//      }
//      $('.gw_main').css('display','none');
//      $('.gw_main').eq(numB).css('display','block');
//  })
//   $('.left_prev3').click(function(){
//     numB--;
//    if(numB<0){
//     numB=len-1;
//    }
//    $('.gw_main').css('display','none');
//    $('.gw_main').eq(numB).css('display','block');

// })
//点击进去女神的答谢
//      var numC=0;
//      var len=$('.goddess01_main').length;
//     $('.right_next4').click(function(){
//       numC++;
//       if(numC==len){
//         numC=0;
//       }
//       $('.goddess01_main').css('display','none');
//       $('.goddess01_main').eq(numC).css('display','block');
//   })
//    $('.left_prev4').click(function(){
//     numC--;
//     if(numC<0){
//       numC=len-1;
//     }
//     $('.goddess01_main').css('display','none');
//     $('.goddess01_main').eq(numC).css('display','block');

//  })


  $('.choice03_btn').click(function(){
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
          if (width >= 100) {
            clearInterval(id);
            $('.myBar_show img').css('display','none')
          } else {
            width++; 
            $('.myBar').css('width',width + '%')
            $('.myBar_show img').css('left',width + '%')
          }
     }
  })

    // 第三屏幕女神庇佑点击“邀请好友“弹出恭喜成功预约
    $('.part3_right_dc_btn').click(function(){
      $(' .masked').css('display','block');
      $('.tc_yy_sucess1').css('display','block');
    })
    $('.tc_yy_sucess1 .closed').click(function(){
      $(this).parent().parent().css('display','none');
      $('.masked').css('display','none');
    })

      //第四屏点击培育
      $('.foster_btn').click(function(){
        $('.people').css('display','block');
        $('.flower').css('display','none');
      })
      
    // 第四屏点击抽奖记录
    $('.lottery_record').click(function(){
      $(' .masked').css('display','block');
      $('.tc_yy_award').css('display','block');
    })
    $('.tc_yy_award .closed').click(function(){
      $('.tc_yy_award').css('display','none');
      $('.masked').css('display','none');
    })
    // 第四屏点击抽奖按钮
      $('.lottery_btn').click(function(){
        $(' .masked').css('display','block');
        $('.tc_congratulation').css('display','block');
      })
      $('.tc_congratulation .closed').click(function(){
        $('.tc_congratulation').css('display','none');
        $('.masked').css('display','none');
      })
      // 第四屏版权展开收起
    $('.part4_copyright_show').click(function(){
      $('.part4_copyright_hide').css('display','block');
      $('.part4_copyright_show').css('display','none');
    })
    $('.part4_copyright_fold').click(function(){
      $('.part4_copyright_show').css('display','block');
      $('.part4_copyright_hide').css('display','none');
    })



  // 第四屏版权展开收起
    $('.part3_bless_click').click(function(){
      $(' .masked').css('display','block');
      $('.part3_bless_tc').css('display','block');
    })
    $('.part3_bless_tc .closed_bless').click(function(){
       $('.part3_bless_tc').css('display','none');
        $('.masked').css('display','none');
    })

    
});
