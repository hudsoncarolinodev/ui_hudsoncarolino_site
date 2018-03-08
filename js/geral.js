$(function(){

	/*******************************************************
		SCRIPT HEADER
	*******************************************************/
		// SCRIPTS HEIGHT 100% MODAL
		$('.topo nav').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
			$('.topo nav').css({'height':($(window).height())+'px'});
		});

		$(window).bind('scroll', function () {
		   var alturaScroll = $(window).scrollTop()
		   if (alturaScroll > 500) {
		   		$(".topo").addClass("topoFixed");
		   }else{
		   		$(".topo").removeClass("topoFixed");
		   }
		});

		//CLIQUE BTN MENU 
		$('#menuOpen').click(function(e){
			$(this).children('span').hide();
			$(".topo nav").slideDown();
			$(".topo nav button").slideDown();
		});
		
		$('#menuClose').click(function(e){
			setTimeout(function(){
				$("#menuOpen").children('span').slideDown();
			}, 1000);
			$(".topo nav").slideUp();
		});
		$(window).load(function(){
			setTimeout(function(){
				$('body').addClass('loaded');
			}, 1000);
		});

		$('a.scrollTop').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
			
		});
		$('.topo nav .menu ul li a').click(function(){
			$(".topo nav button").slideUp();
			setTimeout(function(){
				$("#menuOpen").children('span').slideDown();
				$(".topo nav").slideUp();
				
			}, 1000);
		});


	

	/*******************************************************
    *  PÃGINA INICIAL
	*******************************************************/
		$('#carrosselDestaque .item').css({'height':($(window).height())+'px'});
			$(window).resize(function(){
			$('#carrosselDestaque .item').css({'height':($(window).height())+'px'});
		});	

		$(document).ready(function() {
	  		$("#carrosselDestaque").owlCarousel({
				items : 1,
		        dots: true,
		        //loop: true,
		        lazyLoad: true,
		        mouseDrag: false,
		        autoplay:true,
			    autoplayTimeout:5000,
			    autoplayHoverPause:true,
			    // animateOut: 'fadeOut',
			    smartSpeed: 450,
			    autoplaySpeed: 4000,
	  		});
	  		var carrossel_destaque = $("#carrosselDestaque").data('owlCarousel');
			$('#btnCarrosselLeft').click(function(){ carrossel_destaque.prev(); });
			$('#btnCarrosselRight').click(function(){ carrossel_destaque.next(); });

			$("#carrosselProjeto").owlCarousel({
				items : 1,
		        dots: true,
		        //loop: true,
		        lazyLoad: true,
		        mouseDrag: false,
		        autoplay:true,
			    autoplayTimeout:5000,
			    autoplayHoverPause:true,
			    // animateOut: 'fadeOut',
			    smartSpeed: 450,
			    autoplaySpeed: 4000,
	  		});
	 	});

 	
    
    /* FUNÃ‡ÃƒO SHOW ITNES  */
    $(window).scroll( function(){
     	/* Check the location of each desired element */
        $('.skiusLeft li,.skiusRight li').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},600);
            }
        }); 
   	});

	$.fn.isOnScreen = function(){
		var win = $(window);
		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};

		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();
		
		var bounds = this.offset();
	    bounds.right = bounds.left + this.outerWidth();
	    bounds.bottom = bounds.top + this.outerHeight();
		
	    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};

	var testeMostrarVisita = false;

	$(window).scroll(function(){
		var larguraWidth = $(window).width();
		if ($('.areaSkius ul').isOnScreen() == true && testeMostrarVisita == false) {
	  		setTimeout(function(){
				$(".minhasSkius .skius ul li h2").animate({'opacity':'1','font-size':'17px'},600);
			}, 3000);

	  		if (larguraWidth>450) {
	  		 	$(".areaSkius li").each(function() {
	  		 		var barraB = $(this);
	  		 		$({
	  		 			Counter: 0
	  		 		}).animate({
	  		 			Counter: barraB.attr("data-largura")
	  		 		}, {
	  		 			duration: 5e3,
	  		 			easing: "swing",
	  		 			step: function(a) {
	  		 				barraB.css({"width": Math.ceil(a)+"%"})
	  		 			}
	  		 		})
	  		 	});
		  	
		  	}else{
		  		$(".areaSkius li").each(function() {
		  			var barraB = $(this);
		  			$({
		  				Counter: 0
		  			}).animate({
		  				Counter: 100
		  			}, {
		  				duration: 5e3,
		  				easing: "swing",
		  				step: function(b) {
		  					barraB.css({"width": Math.ceil(b)+"%"})
		  				}
		  			})
		  		});
	  		}
		   
		  	$(".areaSkius li span").each(function() {
		       var t = $(this);
		       $({
		           Counter: 0
		       }).animate({
		           Counter: t.attr("data-largura")
		       }, {
		           duration: 5e3,
		           easing: "swing",
		           step: function(a) {
		               t.text(Math.ceil(a)+"%")
		           }
		       })
		  	});

			testeMostrarVisita = true;
		};
	});		
});		