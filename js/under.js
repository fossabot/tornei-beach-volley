/*deprecated
There is also $(document).on( "ready", handler ), deprecated as of jQuery 1.8 and removed in jQuery 3.0. Note that if the DOM becomes ready before this event is attached, the handler will not be executed.
see also https://api.jquery.com/ready/

$( document ).ready(function() {

  init();
});
*/
jQuery(function () { init() });


var init = function (){
    
    $("#nav-placeholder").load("nav.html");
    
};