/*
 * Copyright (c) 2024 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	kioto_tm_modalbox();
	kioto_tm_text_hover_effect();
	kioto_tm_page_transition();
	kioto_tm_trigger_menu();
	kioto_tm_modalbox_news();
	kioto_tm_modalbox_portfolio();
	kioto_tm_progress();
	kioto_tm_portfolio();
	kioto_tm_cursor();
	kioto_tm_imgtosvg();
	kioto_tm_popup();
	kioto_tm_data_images();
	kioto_tm_owl_carousel();
	kioto_tm_marquee();
	kioto_tm_news_hover_effect();
	kioto_tm_section_top();
	kioto_tm_ripple();
	
	jQuery(window).load('body', function(){
		kioto_tm_my_load();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

function kioto_tm_modalbox(){
	"use strict";
	
	jQuery('.kioto_tm_all_wrap').prepend('<div class="kioto_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

// -----------------------------------------------------
// -------------    TEXT HOVER EFFECT    ---------------
// -----------------------------------------------------

function kioto_tm_text_hover_effect(){
	
	"use strict";
	
	var div = jQuery('.tm_text_effect');
	
	div.each(function(){
		var element = jQuery(this);
		var text 	= element.text();
		element.empty();
		element.append('<span class="wrapper"><span class="before">'+text+'</span><span class="after">'+text+'</span></span>');
	});
}

// -----------------------------------------------------
// -------------   PAGE TRANSITION    ------------------
// -----------------------------------------------------

function kioto_tm_page_transition(){
	
	"use strict";
	
	var section 		= jQuery('.kioto_tm_section');
	var allLi 			= jQuery('.transition_link li');
	var button			= jQuery('.transition_link a');
	var wrapper 		= jQuery('.kioto_tm_all_wrap');
	var enter	 		= wrapper.data('enter');
	var exit		 	= wrapper.data('exit');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var href		= element.attr('href');
		if(element.parent().hasClass('kioto_tm_button')){
			jQuery('.menu .transition_link a[href="'+href+'"]').trigger('click');
			return false;
		}
		var sectionID 	= jQuery(href);
		var parent	 	= element.closest('li');
			if(!parent.hasClass('active')) {
				allLi.removeClass('active');
				wrapper.find(section).removeClass('animated '+enter);
				if(wrapper.hasClass('opened')) {
					wrapper.find(section).addClass('animated '+exit);
				}
				parent.addClass('active');
				wrapper.addClass('opened');
				wrapper.find(sectionID).removeClass('animated '+exit).addClass('animated '+enter);
				jQuery(section).addClass('hidden');
				jQuery(sectionID).removeClass('hidden').addClass('active');
			}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function kioto_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.kioto_tm_topbar .trigger .hamburger');
	var mobileMenu		= jQuery('.kioto_tm_mobile_menu');
	var mobileMenuList	= jQuery('.kioto_tm_mobile_menu ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.removeClass('opened');
		}else{
			element.addClass('is-active');
			mobileMenu.addClass('opened');
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.kioto_tm_topbar .trigger .hamburger').removeClass('is-active');
		mobileMenu.removeClass('opened');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function kioto_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox		= jQuery('.kioto_tm_modalbox');
	var button			= jQuery('.kioto_tm_news .kioto_tm_full_link');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('li');
		var content 	= parent.find('.news_hidden_details').html();
		var image		= parent.find('.news_image').attr('src');
		var meta		= parent.find('.kioto_tm_metabox').html();
		var title		= parent.find('.title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details_news"><div class="kioto_tm_metabox">'+meta+'</div><div class="title"><h3>'+title+'</h3></div></div>');
		kioto_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX PORTFOLIO  --------------
// -------------------------------------------------

function kioto_tm_modalbox_portfolio(){
	
	"use strict";
	
	var modalBox	= jQuery('.kioto_tm_modalbox');
	var button		= jQuery('.kioto_tm_portfolio .portfolio_popup');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent		= element.closest('li');
		var image		= parent.find('.abs_image .main').data('img-url');
		var details 	= parent.find('.hidden_content_portfolio').html();
		var title 		= parent.find('.details .name').text();
		var category 	= parent.find('.details .job').text();
		
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(details);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><h3>'+title+'</h3><span>'+category+'</span><div>');	
		kioto_tm_data_images();
		return false;
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function kioto_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.kioto_tm_portfolio .portfolio_item');
		var filter		 = jQuery('.kioto_tm_portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function kioto_tm_progress(){
	
	"use strict";
	
	jQuery('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function kioto_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function kioto_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){kioto_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function kioto_tm_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function kioto_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function kioto_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function kioto_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function kioto_tm_owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.kioto_tm_testimonials .owl-carousel');
	
	carousel.owlCarousel({
		loop: true,
		items: 2,
		lazyLoad: false,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: false,
		nav: false,
		navSpeed: false,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 2
			}
		}
	});
}

// -------------------------------------------------
// -----------------    MARQUEE    -----------------
// -------------------------------------------------

function kioto_tm_marquee() {
	
	"use strict";
	
	$('.marquee').marquee({
		duration: 30000,
		duplicated: true,
		startVisible: true,
		pauseOnHover: true,
	});
}

// -------------------------------------------------
// -------    NEWS HOVER EFFECT    -----------------
// -------------------------------------------------

function kioto_tm_news_hover_effect(){
	
	"use strict";
	kioto_tm_hover_image();
	
	var ww 		= jQuery(window).width();
	var ul		= jQuery('.kioto_tm_news .news_list > ul');
	var list	= jQuery('.kioto_tm_news .news_list > ul > li');
	var box		= jQuery('.hover_image');
	var metabox	= jQuery('.kioto_tm_metabox');
	
	if(ww >= 1024){
		list.each(function(){
			var e = $(this);
			box.find('.main').append('<div class="img" style="background-image: url('+e.find('.news_image').attr('src')+');"></div>');
		});
		
		list.on('mouseenter',function(){
			var element = jQuery(this);
			var index = element.index();
			box.find('.main .img').removeClass('active');
			box.find('.main .img:eq('+index+')').addClass('active');
		}).on('mouseleave',function(){
			
		});
		ul.on('mouseenter',function(){
			metabox.css({opacity:'0',visibility:'hidden'});
			box.css({opacity:'1',visibility:'visible'});
		}).on('mouseleave',function(){
			metabox.css({opacity:'1',visibility:'visible'});
			box.css({opacity:'0',visibility:'hidden'});
		});
	}
	
}

// -----------------------------------------------------
// -----------------   HOVER IMAGE    ------------------
// -----------------------------------------------------

function kioto_tm_hover_image(){
	"use strict";
	
	jQuery('body').prepend('<div class="hover_image"><div class="abs_image"><img src="img/thumbs/3-4.jpg" alt="" /><div class="main"></div></div></div>');
}

// -----------------------------------------------------
// -----------------   SECTION TOP    ------------------
// -----------------------------------------------------

function kioto_tm_section_top(){
	"use strict";
	
	var button	= jQuery('.kioto_tm_all_wrap .leftpart .menu ul li a,.kioto_tm_mobile_menu .menu_list ul li a');
	var section = jQuery('.kioto_tm_section');
	
	button.on('click',function(){
		section.animate({ scrollTop: 0 }, 'slow');
		return false;
	});

}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function kioto_tm_ripple(){
	
	"use strict";

	jQuery('#ripple').ripples({
		resolution: 500,
		dropRadius: 20,
		perturbance: 0.04
	});
}
