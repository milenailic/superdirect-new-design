
var el_width = 260; //this is width of left menu and basket on the right
var el_collapse_width = 60; //this is width of left menu and basket on the right when they are collapsed
var resolutions_trigger = {
		desktop 		: 	1467,	//desktop res
		desktopSmall 	: 	1280, 	//small desktop res
		tablet			: 	1024, 	//tablet res
		tabletSmall		: 	768, 	//small tablet res
		mobile 			: 	568 	//mobile
};

function resizeWindow(){
	var window_width = $(window).width();
	var main_content_width = $('#main_content').width();
	var el_collapse_width_per = (100*el_collapse_width)/window_width; //converting 60px to percentage, so it is always same width
	var el_width_per = (100*el_width)/window_width;// converting 260px to percentage, so it is always same width
	//default parameters
	var init_obj = {
		resTrigger: {min:resolutions_trigger.mobile, max:resolutions_trigger.desktopSmall, desktop:resolutions_trigger.desktop, tablet:resolutions_trigger.tabletSmall}, 
		classOnTrigger:"fix", 
		closeFix:{
			el_width_collapse: el_collapse_width_per,
			el_width: el_width_per
		}
	};
	if(window_width <= resolutions_trigger.desktop)	
	{
		$('.close_menu').panel({direction:"left", conf:init_obj});
		$('.close_basket').panel({direction:"right", conf:init_obj});
		if(window_width <= resolutions_trigger.desktop && window_width >= resolutions_trigger.tabletSmall)
		{
			if(window_width <= resolutions_trigger.mobile)
			{
				resizeApp.addStyle("#main_content .main_content_wrapper, #main_content #footer", 100, 0, false);
			}
			else if(window_width <= resolutions_trigger.tabletSmall)	
			{
				$('body').removeClass("fix");
				resizeApp.addStyle("#main_content .main_content_wrapper, #main_content #footer", (100 - (el_collapse_width_per*2)), el_collapse_width_per, false);
				$("#main_content").attr("class",'ipad_fix');
				//$('.main_content_wrapper, #footer').css({width:(100 - (el_collapse_width_per*2))+"%", "margin-left":el_collapse_width_per+"%"});
				//$('#left_menu, #right_basket').attr("style","").css({width:el_collapse_width_per+"%"}); //assign this value to left menu and right basket when they are collapsed
			}
			else if(window_width <= resolutions_trigger.desktop && window_width > resolutions_trigger.tabletSmall)
			{
				$('body').addClass("fix");
				$('#main_content').addClass("expand_left");
				resizeApp.addStyle("#main_content .main_content_wrapper, #main_content #footer", (100 - (el_collapse_width_per + el_width_per)), el_collapse_width_per, false);
				//$('body.fix .main_content_wrapper,body.fix #footer').css({width: (100 - (el_collapse_width_per + el_width_per)) + "%", "margin-left": el_collapse_width_per + "%"});
			}
			else
			{
				$('body').removeClass("fix");
			}
		}
		else
		{
			$('body').removeClass("fix");
			$("#main_content").attr("class",'ipad_fix');
			if(window_width < resolutions_trigger.tabletSmall && window_width > resolutions_trigger.mobile )
			{
				resizeApp.addStyle("#main_content .main_content_wrapper, #main_content #footer", (100 - (el_collapse_width_per*2)), el_collapse_width_per, false);
			}
			else if( window_width <= resolutions_trigger.mobile )
			{
				resizeApp.addStyle("#main_content .main_content_wrapper, #main_content #footer", 100, 0, false);
			}
			else
			{
				resizeApp.addStyle(
						"#main_content .main_content_wrapper, #main_content #footer","100",0, false
					);
			}
			
			
			//$('.main_content_wrapper, #footer').attr("style","");
			//$('.main_content_wrapper').css({"margin-left":"0px"});
			$('.close_menu').panel({direction:"left", conf:init_obj});
			$('.close_basket').panel({direction:"right", conf:init_obj});			
		}
	}
	else
	{
		$('body').removeClass("fix");
		$("#main_content").attr("class",'ipad_fix');
		//$('#left_menu, #right_basket').css({width:el_width_per+"%"}); //assign this value to left menu and right basket
		resizeApp.addStyle("#main_content .main_content_wrapper, #main_content #footer", (100 - (el_width_per*2)), el_width_per , false);
		//$('.main_content_wrapper, #footer').css({width:(100 - (el_width_per*2))+"%", "margin-left":el_width_per+"%"}); //calculate width of the main_content 
	}	
}

$(function(){
	resizeWindow();
	$(window).resize(function(){resizeWindow()});
	bindSwipe();
});

$(function(){
	//trigger button for main search. Only for mobile.
	$(".search_trigger").bind("click", function(e){
		e.preventDefault();
		if(!$('.search_wrapper').is(":animated"))
		{
			$(this).toggleClass("active");
			$('.search_wrapper').slideToggle();
		}
	});
	//selectBox style
	if($('.selectBox').length > 0)
	{
		$('.selectBox').selectBox();
	}
});

function bindSwipe(){
	$('#main_content').touchSwipeLeft(function(e){
		if(close === "")
		{
			close = "right_open";
			$(".close_basket").trigger("click");
		}
		else if(close === "left_open")
		{
			close = "";
			$(".close_menu").trigger("click");
		}
	});
	$('#main_content').touchSwipeRight(function(e){
		if(close === "")
		{
			close = "left_open";
			$(".close_menu").trigger("click");
		}
		else if(close === "right_open")
		{
			close = "";
			$(".close_basket").trigger("click");
		}
	});
}

//only if device is iPad
var win_orientation = window.orientation;
var iOS = ( navigator.userAgent.match(/(iPad)/i) ? true : false );

if( iOS ){
	addScript('scripts/iScroll.js');
	$('html').addClass('ios');
	var myScroll_left;
	var myScroll_right;
	function loaded() {
		if((myScroll_left === null || typeof myScroll_left === "undefined") && (myScroll_right === null || typeof myScroll_right === "undefined"))
		{
			myScroll_left = new iScroll('scroll_left');
			myScroll_right = new iScroll('scroll_right');
		}
	}
	document.addEventListener('touchmove', function (e) { 
		//e.preventDefault(); 
		e.stopPropagation(); 
		}, false);

	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 100); }, false);
	$(window).resize(function(){
		if(win_orientation !== window.orientation)
		{
			win_orientation = window.orientation;
			setTimeout(loaded, 100);
		}
	});
}
$(window).load(function(){
	
});

