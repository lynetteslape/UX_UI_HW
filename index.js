$( "td" ).hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);

$( "td" ).off( "mouseenter mouseleave" );
