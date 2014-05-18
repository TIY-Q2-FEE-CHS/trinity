console.log("hi");
// function initialize() {
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(32.7833, -79.9333)
//   };
//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

// $( "#rantSubmit" ).submit(function() {


// });



// function setMarkers(center, radius, map) {
//         var json = (function () { 
//             var json = null; 
//             $.ajax({ 
//                 'async': false, 
//                 'global': false, 
//                 'url': "http://tiy-fee-rest.herokuapp.com/collections/trinity", 
//                 'dataType': "json", 
//                 'success': function (data) {
//                      json = data; 
//                  }
//             });
//             return json;
//         })();

//         var circle = new google.maps.Circle({
//                 strokeColor: '#000000',
//                 strokeOpacity: 0.25,
//                 strokeWeight: 1.0,
//                 fillColor: '#ffffff',
//                 fillOpacity: 0.1,
//                 clickable: false,
//                 map: map,
//                 center: center,
//                 radius: radius
//             });
//         var bounds = circle.getBounds();

//         //loop between each of the json elements
//         for (var i = 0, length = json.length; i < length; i++) {
//             var data = json[i],
//             latLng = new google.maps.LatLng(data.lat, data.lng); 



//             if(bounds.contains(latLng)) {
//                 // Creating a marker and putting it on the map
//                 var marker = new google.maps.Marker({
//                     position: latLng,
//                     map: map,
//                     title: data.content
//                 });
//                 infoBox(map, marker, data);
//             }
//         }

//         circle.bindTo('center', marker, 'position');
//     }

//      

var initialLocation;
var siberia = new google.maps.LatLng(60, 105);
var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
var browserSupportFlag =  new Boolean();

function initialize() {
  var myOptions = {
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

  // Try W3C Geolocation (Preferred)
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);

    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  }
  // Browser doesn't support Geolocation
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
      initialLocation = newyork;
    } else {
      alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
      initialLocation = siberia;
    }
    map.setCenter(initialLocation);
  }
}
  