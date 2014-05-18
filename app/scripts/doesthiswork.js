var map;
function initialize() 
{ 
    var mapOptions = {
    center: new google.maps.LatLng('23.11', '71.00'),
    zoom: 2,
    scrollwheel: false,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
 };

  map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
 }

 function addMarker()
  {
     marker = new google.maps.Marker({
                position: new google.maps.LatLng(23.72, 72.100),
                map: map,
            });
  }