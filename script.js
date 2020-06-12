jQuery(document).ready(function () {
  
    /* For the sticky navigation */
    jQuery('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
           jQuery('nav').addClass('sticky'); 
        } else {
           jQuery('nav').removeClass('sticky'); 
        }
    }, {
      offset: '60px;'
    });
    

    
    /* Scroll on buttons */
    jQuery('.js--scroll-to-plans').click(function() {
        jQuery('html, body').animate({scrollTop: jQuery('.js--section-plans').offset().top}, 1000);
    });
    
    jQuery('.js--scroll-to-start').click(function() {
        jQuery('html, body').animate({scrollTop: jQuery('.js--section-features').offset().top}, 1000);
    });
    
    
    /* Navigation scroll */
    
  jQuery(function() {
      jQuery('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }  
        }      
      });   
  });
    
    /* Animations on scroll */
    
    jQuery('.js--wp-1').waypoint(function(direction) {
        jQuery('.js--wp-1').addClass('animated fadeIn');
        
    }, {
        offset: '50%'
    });
    
    jQuery('.js--wp-2').waypoint(function(direction) {
        jQuery('.js--wp-2').addClass('animated fadeInUp');
        
    }, {
        offset: '50%'
    });
    
    jQuery('.js--wp-3').waypoint(function(direction) {
        jQuery('.js--wp-3').addClass('animated fadeIn');
        
    }, {
        offset: '50%'
    });
    
    jQuery('.js--wp-4').waypoint(function(direction) {
        jQuery('.js--wp-4').addClass('animated pulse');
        
    }, {
        offset: '50%'
    });
  
    /* Mobile nav */
    jQuery('.js--nav-icon').click(function() {
        var nav = jQuery('.js--main-nav');
        var icon = jQuery('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')      
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
});



