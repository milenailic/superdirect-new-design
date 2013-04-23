;(function($){
		var close = "", open = false;
		var $body = $('#main_content');
		var css_class = {
				expand_left: "expand_left",
				expand_right: "expand_right"
		};
		var default_res = {
				min:568,
				max:1280,
				tablet:768,
				desktop:1467
		};
		var window_w = $(window).width();
		var margin_left_fix_big = (100*200)/window_w ;
		var margin_left_fix = (100*60)/window_w;
		$(window).resize(function(){window_w = $(window).width(); margin_left_fix_big = (100*200)/window_w; margin_left_fix = (100*60)/window_w;});
		
		
		var left_menu_closed = false;
		var _lastCaller;        // Used to keep track of last element to trigger pageslide
		 
		 $.fn.panel_start = function( settings ) {
			var dir = settings.direction === "left" ? css_class.expand_left : css_class.expand_right;
				if($('body').hasClass(settings.conf.classOnTrigger))
				{
					close = "";
					if(dir === css_class.expand_left)
					{
						
						if(window_w <= settings.conf.resTrigger.tablet)
						{
							console.log("1");
							$('body').removeClass(settings.conf.classOnTrigger);
							//if its less than mobile
							if(window_w <= settings.conf.resTrigger.min)
							{
								resizeApp.addStyle(
										"#main_content .main_content_wrapper,#main_content #footer", 
										100, 
										0, false
									);
							}
							//if its between tablet and mobile
							else
							{
								console.log("2");
								resizeApp.addStyle(
										"#main_content .main_content_wrapper,#main_content #footer", 
										(100 - (settings.conf.closeFix.el_width_collapse * 2)), 
										settings.conf.closeFix.el_width_collapse, false
									);
							}
						}
						else
						{
							if(window_w <= settings.conf.resTrigger.desktop && window_w >= settings.conf.resTrigger.tablet)
							{
								console.log("3");
								if(!$body.hasClass(dir)){
									$body.attr("class", dir);
								}
								resizeApp.addStyle(
										"#main_content .main_content_wrapper,#main_content #footer", 
										(100 - (settings.conf.closeFix.el_width_collapse + settings.conf.closeFix.el_width)), 
										settings.conf.closeFix.el_width_collapse, false
									);
							}
						}
					}
					else
					{
						if(window_w <= settings.conf.resTrigger.tablet)
						{
							
							$('body').removeClass(settings.conf.classOnTrigger);
							if(!$body.hasClass(dir)){
								$body.attr("class", dir);
							}
							//if its less than mobile
							if(window_w <= settings.conf.resTrigger.min)
							{
								console.log("4");
								resizeApp.addStyle(
										"#main_content .main_content_wrapper,#main_content #footer", 
										100, 
										0, false
									);
							}
							//if its between tablet and mobile
							else
							{	
								console.log("5");
								resizeApp.addStyle(
										"#main_content .main_content_wrapper,#main_content #footer", 
										(100 - (settings.conf.closeFix.el_width_collapse * 2)), 
										settings.conf.closeFix.el_width_collapse, false
									);
							}
							
						}
						//if its greater than tablet
						else
						{
							
							if(window_w > settings.conf.resTrigger.tablet && window_w < settings.conf.resTrigger.desktop)
							{
								$('body').removeClass(settings.conf.classOnTrigger);
								if(!$body.hasClass(dir)){
									$body.attr("class", dir);
								}
							}
							console.log("6.0");
							//$('body').removeClass(options.conf.classOnTrigger);
							if(dir === css_class.expand_left)
							{
								console.log("6.1");
								resizeApp.addStyle(
										"#main_content .main_content_wrapper,#main_content #footer", 
										(100 - (settings.conf.closeFix.el_width_collapse + margin_left_fix_big)), 
										settings.conf.closeFix.el_width_collapse, false
									);
							}
							else
							{
								console.log("6.2");
								resizeApp.addStyle(
										"#main_content .main_content_wrapper,#main_content #footer", 
										(100 - (settings.conf.closeFix.el_width_collapse + margin_left_fix_big)), 
										margin_left_fix_big, false
									);
							}
							
						}
					}
				}
				else
				{
					if(dir === css_class.expand_left)
					{
						if( window_w < settings.conf.resTrigger.desktop )
						{
							$('body').removeClass(settings.conf.classOnTrigger);
							if(!$body.hasClass(dir)){
								$body.attr("class", dir);
							}
							if(window_w <= settings.conf.resTrigger.tablet)
							{
								//if its less than mobile
								if(window_w <= settings.conf.resTrigger.min)
								{
									console.log("7");
									resizeApp.addStyle(
											"#main_content .main_content_wrapper,#main_content #footer", 
											100, 
											0, false
										);
								}
								//if its between tablet and mobile
								else
								{
									if(window_w > settings.conf.resTrigger.tablet && window_w < settings.conf.resTrigger.desktop)
									{
										console.log("8");
										resizeApp.addStyle(
												"#main_content .main_content_wrapper,#main_content #footer", 
												(100 - (settings.conf.closeFix.el_width_collapse + settings.conf.closeFix.el_width)), 
												settings.conf.closeFix.el_width_collapse, false
											);
									
									}
									else if(window_w < settings.conf.resTrigger.desktop && window_w > settings.conf.resTrigger.min)
									{
										console.log("9");
										resizeApp.addStyle(
												"#main_content .main_content_wrapper,#main_content #footer", 
												(100 - (settings.conf.closeFix.el_width_collapse * 2)), 
												settings.conf.closeFix.el_width_collapse, false
											);
									}
									else
									{
										console.log("10");
										resizeApp.addStyle(
												"#main_content .main_content_wrapper,#main_content #footer", 
												100, 
												0, false
											);
									}
								}
							}
						}
					}
					else
					{
						if(window_w <= settings.conf.resTrigger.tablet)
						{
							$('body').removeClass(settings.conf.classOnTrigger);
							if(!$body.hasClass(dir)){
								$body.attr("class", dir);
							}
							//if its less than mobile
							if(window_w <= settings.conf.resTrigger.min)
							{
								console.log("11");
								resizeApp.addStyle(
										"#main_content .main_content_wrapper,#main_content #footer", 
										100, 
										0, false
									);
							}
							//if its between tablet and mobile
							else
							{
								console.log("12");
								resizeApp.addStyle(
										"#main_content .main_content_wrapper,#main_content #footer", 
										(100 - (settings.conf.closeFix.el_width_collapse * 2)), 
										settings.conf.closeFix.el_width_collapse, false
									);
							}
						}
					}
				}
		}
		 
		$.fn.panel = function(options) {
			var $elements = this;
			$full_class = $elements[0].className;
			$full_class = $full_class.substr($full_class.lastIndexOf(" ") + 1, $full_class.length);
			$full_class = $("."+$full_class);
			
			$full_class.unbind("click");
			
			// On click
			$full_class.click( function(e) {
				
	        	var $self = $(this),
	        	settings = $.extend({ href: $self.attr('href') }, options);
	        	var dir = settings.direction === "left" ? css_class.expand_left : css_class.expand_right;
	        	
	        	// Prevent the default behavior and stop propagation
	            e.preventDefault();
	            e.stopPropagation()
	            if($body.attr("class") === dir && $full_class[0] == _lastCaller){
	            	$.panel.close(options);
	            	close="";
	    		}
	            else {                 
	                // Open
	                $.panel( settings );
	                
	             // Record the last element to trigger pageslide
	                _lastCaller = $full_class[0];
	            }     
				
	        });  
		}
		
		$.fn.panel.defaults = {    
	        direction:	'right',    // Accepts 'left' or 'right'
	        modal:		false,      // If set to true, you must explicitly close pageslide using $.pageslide.close();
	        conf:{
	        	resTrigger: {min:"", max:"", desktop:"", tablet:""}, 
	    		classOnTrigger:"fix", 
	    		closeFix:{
	    			el_width_collapse: "",
	    			el_width: ""
	    		}
	        }
	    };
		var settings;
		$.panel = function( options ) {	    
		    // Extend the settings with those the user has provided
	        settings = $.extend({}, $.fn.panel.defaults, options);
	        default_res.min = settings.conf.resTrigger.min;
	        default_res.max = settings.conf.resTrigger.max;
	        default_res.tablet = settings.conf.resTrigger.tablet;
	        default_res.desktop = settings.conf.resTrigger.desktop;
	        var dir = settings.direction === "left" ? css_class.expand_left : css_class.expand_right;

	        if(window_w <= options.conf.resTrigger.tablet)
    		{
	        	console.log("remove");
        		$('body').removeClass(options.conf.classOnTrigger); //remove class "fix" from body - back to normal collapse mode
        		//left_menu_closed = true; //left menu to collapse mode
    		}
        	else
    		{
        		if(window_w > settings.conf.resTrigger.tablet && window_w < settings.conf.resTrigger.desktop)
    			{
        			
        			console.log("add");
        			$('body').addClass(options.conf.classOnTrigger);
        			
    			}
        		//left_menu_closed = false;
    		}
	        
	        // Are we trying to open in different direction?
	        if(($body.attr("class") === dir) && ($body.data( 'direction' ) != settings.direction)){
	        	$.panel.close(options,function(){
	                $.fn.panel_start( settings );
	                
	            });
			}
	        else{
	        	if( $body.attr("class") !== dir ) {
	                $.fn.panel_start( settings );
	                if(settings.direction === "left")
                	{
	                	close = "left_open";
                	}
	                else if(settings.direction === "right")
	                {
	                	close = "right_open";
	                }
	            }
	        }
	        $body.data( settings );
		}
		
		$.panel.close = function( settings, callback ) {
			if(typeof settings.direction !== "undefined")
			{
				if(!$('body').hasClass(settings.conf.classOnTrigger))
				{
					if(window_w <= settings.conf.resTrigger.min)
					{
						console.log("13");
						resizeApp.addStyle(
								"#main_content .main_content_wrapper, #main_content #footer", 
								100, 
								0, false
							);
					}
					else if(window_w > settings.conf.resTrigger.min && window_w <= settings.conf.resTrigger.tablet)
					{
						resizeApp.addStyle(
								"#main_content .main_content_wrapper, #main_content #footer", 
								(100 - (settings.conf.closeFix.el_width_collapse * 2)), 
								settings.conf.closeFix.el_width_collapse, false
							);
					}
					/*else
					{
						console.log("14");
						resizeApp.addStyle(
								"#main_content .main_content_wrapper, #main_content #footer", 
								(100 - ((settings.conf.closeFix.el_width * 2))), 
								settings.conf.closeFix.el_width_collapse, false
							);
					}*/
					/*$('.main_content_wrapper, #footer').css({
						"width":(100 - (settings.conf.closeFix.el_width_collapse * 2))+"%", 
						"margin-left":settings.conf.closeFix.el_width_collapse+"%"
					});*/
				}
				else
				{
					if(window_w < settings.conf.resTrigger.tablet && !$body.hasClass(css_class.expand_left))
					{
						console.log(settings.conf.classOnTrigger);
						$('body').removeClass(settings.conf.classOnTrigger);
						if(window_w <= settings.conf.resTrigger.desktop && window_w >= settings.conf.resTrigger.tablet)
						{
							console.log("15");
							resizeApp.addStyle(
									"#main_content .main_content_wrapper, #main_content #footer", 
									(100 - (settings.conf.closeFix.el_width_collapse * 2)), 
									settings.conf.closeFix.el_width_collapse, false
								);
						}
						else
						{
							console.log("16");
							resizeApp.addStyle(
									"#main_content .main_content_wrapper, #main_content #footer", 
									(100 - (settings.conf.closeFix.el_width_collapse - settings.conf.closeFix.el_width)), 
									settings.conf.closeFix.el_width_collapse, false
								);
						}
						
						
						
						/*$('.main_content_wrapper, #footer').css({
							"width":(100 - (settings.conf.closeFix.el_width_collapse * 2))+"%", 
							"margin-left":settings.conf.closeFix.el_width_collapse+"%"
						});*/
					}
				}
			}
			if(window_w <= default_res.desktop && window_w > default_res.tablet)
			{	
				console.log("17");
				$body.attr("class", css_class.expand_left);
				$('body').addClass("fix");
				resizeApp.addStyle(
						"#main_content .main_content_wrapper,#main_content #footer", 
						(100 - (settings.conf.closeFix.el_width_collapse + settings.conf.closeFix.el_width)), 
						settings.conf.closeFix.el_width_collapse, false
					);
				/*resizeApp.addStyle(desktop
						"body.fix #main_content .main_content_wrapper,body.fix #main_content #footer", 
						(100 - (settings.conf.closeFix.el_width + settings.conf.closeFix.el_width_collapse)), 
						settings.conf.closeFix.el_width_collapse, false
						);*/
			}
			/*else if(window_w <= default_res.max && window_w > default_res.tablet)
			{
				$body.attr("class", css_class.expand_left);
				$('body').addClass("fix");
			}*/
			else
			{
				console.log("ipad_fix");
				$body.attr("class", 'ipad_fix');
			}
			if( typeof callback != 'undefined' ) callback();
	    }
		
		// Don't let clicks to the pageslide close the window
	    $("#right_basket *, #left_menu *").click(function(e) {
	    	e.preventDefault();
	        e.stopPropagation();
	    });
		
	    // Close the pageslide if the document is clicked or the users presses the ESC key, unless the pageslide is modal
		$('.main_content_wrapper').bind('click keyup', function(e) {
		    // If this is a keyup event, let's see if it's an ESC key
	        if( e.type == "keyup" && e.keyCode != 27) return;
		    
		    // Make sure it's visible, and we're not modal	    
		    if( ($body.attr("class") !== "") && !$body.data( 'modal' ) ) {	        
		        //$.panel.close($body.data());
		    }
		});
		
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
		
})(jQuery);