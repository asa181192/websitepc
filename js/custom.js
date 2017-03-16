  

    function actualPosition()
    {
    var $scroll = $(window).scrollTop();
     
    if($scroll > 150)
        {
        console.log("aqui estoy");
         $("#logo").attr("src","img/logoxs.png");   
         $("#nav").removeClass("adjust-marginMax ");
        } 
    else
        {
         $("#nav").addClass("adjust-marginMax ");
        }

    }

  function loadMaps () 
  {
       
     /*Google Maps API initializer*/    
     $("#PinoSuarezBtn").click(
      function () {
          $("#myModal").on("shown.bs.modal", function () {
              iniciarMapa(25.6797117, -100.3187378);
          $("#NombreSucursal").text("Pino Suárez");          
          });
      });
     $("#GuadalupeBtn").click(
          function () {
              $("#myModal").on("shown.bs.modal", function () {
                  iniciarMapa(25.680257, -100.252827);
                  $("#NombreSucursal").text("Guadalupe");
              });
          });
     $("#SanLuisBtn").click(
         function () {
             $("#myModal").on("shown.bs.modal", function () {
                 iniciarMapa(22.141537, -100.996748);
                 $("#NombreSucursal").text("San Luis Potosí");
             });
         });
     $("#QueretaroBtn").click(
         function () {
             $("#myModal").on("shown.bs.modal", function () {
                 iniciarMapa(20.586286, -100.397498);
                 $("#NombreSucursal").text("Querétaro");
             });
         });
     $("#LeonBtn").click(
       function () {
           $("#myModal").on("shown.bs.modal", function () {
               iniciarMapa(21.1471695, -101.6853518);
               $("#NombreSucursal").text("León");
           });
       });
     $("#TampicoBtn").click(
       function () {
           $("#myModal").on("shown.bs.modal", function () {
               iniciarMapa(22.2172553, -97.8577791);
               $("#NombreSucursal").text("Tampico");
           });
       });
      
  }
  
  function iniciarMapa(Lat, Ing)
  {

    //var myLat = new google.maps.LatLng(25.6797117, -100.3187378)
    var myLat = new google.maps.LatLng(Lat, Ing);
    var mapOptions = {
        center: myLat,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLat
    });

    marker.setMap(map);
    }

  (function ($) {
    
   
    
	new WOW().init();
      
   
	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
         
        
		if ( $(".navbar").offset().top > 150) {           
            
			 $(".navbar-fixed-top").addClass("top-nav-collapse");            
             $("#logo").attr("src","img/logoxs.png");
             $("#nav").removeClass("adjust-marginMax ");
            
		} else if ($(".navbar").offset().top < 150 && $(window).width() < 1000 )  {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
            $("#nav").addClass("adjust-marginMax ");
             console.log("condicion encontrada");
		}
        else 
        {
             $(".navbar-fixed-top").removeClass("top-nav-collapse");
             $("#logo").attr("src","img/logo.png");
             $("#nav").addClass("adjust-marginMax ");
            
        }
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
        
        
        
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);

  $(document).ready(function()
    {   
         $("#Glide").glide({
             type: "carousel",
             autoplay:5000
         });
        
         actualPosition();

         var $window = $(window); // get the actually windows size

         loadMaps();    

         function checkWidth() { //Create function to check window size 
            var windowsize = $window.width();
            if (windowsize > 1000) {
                     $("#logo").attr("src","img/logo.png");
                }
            else 
                {
                     $("#logo").attr("src","img/logoxs.png");                
                }
         }

         checkWidth();

         $(window).resize(checkWidth);

        //

     });    

