(function($) {
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '1403310083119156',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();  
    FB.api("/1624764070880417/photos/images?fields=source&limit=1&access_token=1403310083119156|_Vq_lTOOj0TsNQCQDCQI4DBtYZQ",
      function (response) {
        if (response && !response.error) {
          $('#facebookpost').attr('src',response.data[0].source);
        }
      }
    );
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);     
   }(document, 'script', 'facebook-jssdk'));
}( jQuery ) );
