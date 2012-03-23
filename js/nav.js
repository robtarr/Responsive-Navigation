$(function() {
  
  var nav = {
    smallNav: true,
    
    disquiseSub: function() {
      $( "nav" ).addClass( "hideSubNavs" );
    },

    revealSub: function( $subNav ) {
      $( "nav" ).removeClass( "hideSubNavs" );
    },
    
    showSubNav: function( $target ) {
      var $subNav = $target.siblings( "ul" ),
          open = $subNav.hasClass( "open" );
      
      $( "nav" ).find( ".open" ).removeClass( "open" );
      $( ".subnav" ).html( "" );

      if ( !open ) {
        $subNav.addClass( "open" );
        $( ".subnav" ).html( $subNav.html() );
      }
    },
    
    setActive: function( e ) {
      var $target = $( e.target );
     
      $target.closest( "ul" ).find( ".active" ).removeClass( "active" );
      $target.parent().addClass( "active" );
      
      nav.showSubNav( $target );
    }
    
    
  };

  $( "nav > ul > li > a" ).on( "click", nav.setActive);
  
  mediaCheck({
    media: '(max-width: 800px)',
    entry: function() {
      nav.smallNav = true;
      console.log( nav.smallNav );
    },
    exit: function() {
      nav.smallNav = false;
      console.log( nav.smallNav );
    }
  });

});