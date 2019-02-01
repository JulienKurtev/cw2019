;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);
	

	$doc.ready(function() {

		//Trigger Nav and button burger
		$('.nav-trigger').on('click', function(event){
			event.preventDefault();

			$(this).toggleClass('active');

		});

		//Button read more scroll animation
		$('.intro .btn-transparent').on('click', function(e){
			e.preventDefault();
			var target_offset = $("#section-about").offset().top;

			$(".wrapper-content").animate({scrollTop: target_offset}, 800);
		});

		/*$(".nav a").on('click', function(e){
			e.preventDefault();
			$this = $(this);
			
			if(!($this.parent().hasClass('active'))){
			    //get the full url - like mysitecom/index.htm#home
			    var full_url = this.href;
			    

			    //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
			    var parts = full_url.split("#");
			    var trgt = parts[1];



			    //get the top offset of the target anchor
			    var target_offset = $("#"+trgt).offset();

			    var target_top = target_offset.top + 100;
			    alert(target_top);



			    //goto that anchor by setting the body scroll top to anchor top
			    $('.wrapper-content').animate({scrollTop:target_top}, 800);


		    }



		    $(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		});*/

		// Cache selectors
		var lastId,
		    topMenu = $(".nav ul"),
		    
		    // All list items
		    menuItems = topMenu.find("a"),
		    // Anchors corresponding to menu items
		    scrollItems = menuItems.map(function(){ 
		      var item = $($(this).attr("href"));
		      if (item.length) {  return item; }

		    });

		$('.wrapper-content').scroll(function(){
			// Get container scroll position
		   var fromTop = $(this).scrollTop();
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove current class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href='#"+id+"']").parent().addClass("active");
		     }
		});

		//Change color theme
		$('.list-colors li').on('click', function(){
			var colorTheme = $('.color-theme');
			var color = $(this).attr('name');
			var colors = ['blue' , 'green' , 'purple' , 'red'];
			var imagePath = "css/images/temp/intro-image-" + color + ".png";

			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			$('.intro-image').attr('src', imagePath);


			colorTheme.each(function(){
				for(i = 0; i < colors.length; i++){
					if($(this).hasClass(colors[i])){
						$(this).removeClass(colors[i]);
					}
				}
				
				$(this).addClass(color);
				
			});
		});

	});	
})(jQuery, window, document);
