/**
 * daretoku_tooltip Plugin
 * Author: Shinji Yonetsu
 * url http://no-creation-no-life.net/plugin_1
 * License: GPL License
 * Require: jQuery, jQuery.easing
 */

(function(jQuery){

jQuery.fn.tooltip = function(options) {
		var options = jQuery.extend({
			// defelt option
			speed: 300,
			animation_patrun: "swing",
			swich: "both_text", // alt_text,title_text,both_text
			type:"1", // 1fadeIn,2slideDown3,show
			position_x: -60,
			position_y: -60,
			width:"200px",
			height:"35px"
		}, options);
		
		var tooltip = $(".tooltip"),hantei = this.is('img'),hantei_alt = this.attr('alt');
		var isMSIE = /*@cc_on!@*/false;
		if(options.swich == "alt_text"){
		
			this.mouseover(function(){
				var alt = $(this).attr("alt"),
				title = $(this).attr("title"),
				action =$(tooltip).html("<p>" + alt + "</p>").stop(); 
				
				$(tooltip).css({width:options.width,height:options.height});	
				if(options.type == "1"){
					action.fadeIn(options.speed,options.animation_patrun);
				}
				else if(options.type == "2"){
					action.slideDown(options.speed,options.animation_patrun);
					}
				else if(options.type == "3"){
					action.show(options.speed,options.animation_patrun);
					}
				
			});
		
			this.mouseout(function(){
				$(tooltip).stop().hide();
			});
			
			this.mousemove(function(e){
					$(tooltip).css({top:options.position_y + e.pageY,left:options.position_x + e.pageX});
			});
			
			this.filter(function(){
    			return this.title && this.title.length>0;
  			}).each(function(){
				var obj_1 = $(this),
				title = obj_1.attr("title");
			
				obj_1.hover(function(e){
					obj_1.attr("title","");
				},function(){
					obj_1.attr("title",title);
				});
			});
				
		
		
		} //if_end
		
		else if(options.swich == "title_text"){
			this.mouseover(function(){
				var title = $(this).attr("title"),
				action =$(tooltip).html("<p>" + title +"</p>").stop(); 
				$(tooltip).css({width:options.width,height:options.height});
				if(options.type == "1"){
					action.fadeIn(options.speed,options.animation_patrun);
				}
				else if(options.type == "2"){
					action.slideDown(options.speed,options.animation_patrun);
					}
				else if(options.type == "3"){
					action.show(options.speed,options.animation_patrun);
					}
			});
			
		
			this.mouseout(function(){
				$(tooltip).stop().hide();
			});
			
			this.mousemove(function(e){
				$(tooltip).css({top:options.position_y + e.pageY,left:options.position_x + e.pageX});
			});
			
			if(hantei_alt == undefined){
			this.children("img").filter(function(){
    			return this.title && this.title.length>0;
  			}).each(function(){
				var obj_1 = $(this),
				title = obj_1.attr("title");
			
				obj_1.hover(function(e){
					obj_1.attr("title","");
				},function(){
					obj_1.attr("title",title);
				});
			});
			
			}// if_end
			else{
				this.filter(function(){
    			return this.title && this.title.length>0;
  			}).each(function(){
				var obj_1 = $(this),
				title = obj_1.attr("title");
			
				obj_1.hover(function(e){
					obj_1.attr("title","");
				},function(){
					obj_1.attr("title",title);
				});
			});
				}
			
			}// else_end
			
		else if(options.swich == "both_text"){
				this.mouseover(function(){
					var alt = $(this).attr("alt"),
					title = $(this).attr("title"),
					action =$(tooltip).html("<p><span class='alt_caption'>" + alt + "</span><br><span class='title_text'>" + title + "</span></p>").stop(); 
					$(tooltip).css({width:options.width,height:options.height});
					if(options.type == "1"){
						action.fadeIn(options.speed,options.animation_patrun);
					}
					else if(options.type == "2"){
						action.slideDown(options.speed,options.animation_patrun);
						}
					else if(options.type == "3"){
						action.show(options.speed,options.animation_patrun);
						}
				});
			this.mouseout(function(){
				$(tooltip).stop().hide();
			});
			
			this.mousemove(function(e){
				$(tooltip).css({top:options.position_y + e.pageY,left:options.position_x + e.pageX});
			});
			
			this.filter(function(){
    			return this.title && this.title.length>0;
  			}).each(function(){
				var obj_1 = $(this),
				title = obj_1.attr("title");
				obj_1.hover(function(e){
					obj_1.attr("title","");
				},function(){
					obj_1.attr("title",title);
				});
			});
		}// else_end
		
		
		if(hantei == true){
			this.parent().each(function(){
    			var obj_1 = $(this),
				title = obj_1.attr("title");
				obj_1.hover(function(){
					obj_1.attr("title","");
				},function(){
					obj_1.attr("title",title);
        		});
  			});
		}
		else{
			this.each(function(){
    			var obj_1 = $(this),
				title = obj_1.attr("title");
				obj_1.hover(function(){
					obj_1.attr("title","");
				},function(){
					obj_1.attr("title",title);
        		});
  			});
			}
		
		
}
})(jQuery);