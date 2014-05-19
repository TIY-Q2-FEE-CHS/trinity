// var map;


// function initialize() {
//   var myLatlng = new google.maps.LatLng(32.7833, -79.9333);
//   var mapOptions = {
//     zoom: 8,
//     center: myLatlng
//   }
//   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  
// }

// google.maps.event.addDomListener(window, 'load', initialize);


// console.log("hi");
// var map;
// function initialize() {
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(32.7833, -79.9333)
//   };
//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

$( "#rantsubmitform" ).submit(function() {


    geolocateUser();
});

//       console.log("forkhubz");

//       function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }
// function showPosition(position) {
//   var lat = position.coords.latitude;
//   var lng = position.coords.longitude;
//   map.setCenter(new google.maps.LatLng(lat, lng));

//   var marker = new google.maps.Marker({
//       position: (lat, lng),
//       map: map,
//       title: 'Hello World!'
//   });
// }

       
// google.maps.event.addDomListener(window, 'load', initialize);



//     function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);

//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }
// function showPosition(position) {
//   var lat = position.coords.latitude;
//   var lng = position.coords.longitude;
//   map.setCenter(new google.maps.LatLng(lat, lng));
// }






// ("$addmarker").click(function(){
//     var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(23.72, 72.100),
//         title: 'Marker',
//         map: map,
//         draggable: true
//     });
//  })


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


  <select class="form-control" id="zippick">

                                      <option>29455</option>
                                      <option>29439</option>
                                      <option>29412</option>
                                      <option>29482</option>
                                      <option>29401</option>
                                      <option>29424</option>
                                      <option>29403</option>
                                      <option>29409</option>
                                      <option>29407</option>
                                      <option>29464</option>
                                      <option>29485</option>
                                      <option>29414</option>
                                      <option>29466</option>
                                      <option>29451</option>
                                      <option>29429</option>
                                      <option>29492</option>
                                      <option>29410</option>
                                      <option>29406</option>
                            </select>

  