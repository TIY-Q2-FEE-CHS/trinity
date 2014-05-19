function initialize() {
        var latitude = 32.792866,
            longitude = -79.878256,
            radius = 8000, //how is this set up
            center = new google.maps.LatLng(latitude,longitude),
            bounds = new google.maps.Circle({center: center, radius: radius}).getBounds(),
            mapOptions = {
                center: center,
                zoom: 9,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            };

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        setMarkers(center, radius, map);
    }

    function setMarkers(center, radius, map) {
        var json = (function () { 
            var json = null; 
            $.ajax({ 
<<<<<<< HEAD
                async: false, 
                global: false, 
                url: "http://tiy-fee-rest.herokuapp.com/collections/trinity", 
                dataType: "json", 
                success: function (data) {
=======
                'async': false, 
                'global': false, 
                'url': "http://tiy-fee-rest.herokuapp.com/collections/trinity", 
                'dataType': "json", 
                'success': function (data) {
>>>>>>> d90b166feb00faff54c5f65493f660fab813ddc8
                     json = data; 
                 }
            });
            return json;
        })();

        var circle = new google.maps.Circle({
                strokeColor: '#000000',
                strokeOpacity: 0.25,
                strokeWeight: 1.0,
                fillColor: '#ffffff',
                fillOpacity: 0.1,
                clickable: false,
                map: map,
                center: center,
                radius: radius
            });
        var bounds = circle.getBounds();

        //loop between each of the json elements
        for (var i = 0, length = json.length; i < length; i++) {
            var data = json[i],
            latLng = new google.maps.LatLng(data.lat, data.lng); 



            if(bounds.contains(latLng)) {
                // Creating a marker and putting it on the map
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: data.content
                });
                infoBox(map, marker, data);
            }
        }

        circle.bindTo('center', marker, 'position');
    }

    function infoBox(map, marker, data) {
        var infoWindow = new google.maps.InfoWindow();
        // Attaching a click event to the current marker
        google.maps.event.addListener(marker, "click", function(e) {
            infoWindow.setContent(data.content);
            infoWindow.open(map, marker);
        });

        // Creating a closure to retain the correct data 
        // Note how I pass the current data in the loop into the closure (marker, data)
        (function(marker, data) {
          // Attaching a click event to the current marker
          google.maps.event.addListener(marker, "click", function(e) {
            infoWindow.setContent(data.content);
            infoWindow.open(map, marker);
          });
        })(marker, data);
    }


     codeAddress: function() {
      var address = document.getElementById('zippick').value;
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });

      google.maps.event.addDomListener(window, 'load', initialize);

   google.maps.event.addDomListener(window, 'load', initialize);
//  var myMap = {
 //  init: function() {
 //      this.initStyling();
 //      this.initEvents();
 //  },
 //  initStyling: function() {
 //      this.renderMap();
 //      // this.renderRant();
 //  },
 //  initEvents: function() {
 //    $("form").on("submit", ".submitbtn", function() { 
 //      e.preventdefault();
 //         // var rant = $("#rant").val();
 //        var address = $("#zip").val();
 //       myMap.addMap(zip);
 //       myRant.addRant(rant);
 //    });
 //  },

 //     render: function (e) {
 //         var renderedmap = window.renderedmap = data;
 //         $(("#putmaphere").html(), renderedmap);
 //      // var renderedrant = window.renderedrant = rant;
 //      // $(("#putranthere").html(), renderedrant);
 //      console.log(renderedmap);
    // },

 //    renderMap: function(map) {

 //      $.ajax({
 //      url: "https://maps.google.com/maps/api/js?key=AIzaSyCajq54oRnwkbl-7C-2_-L3LTGUMKcMRjQ&sensor=false",
 //      type: "GET",
 //      dataType: "jsonp",
 //      error: function(jqXHR, status, error) {
 //        alert("you broke the internet");
 //      },
 //      success: function(data, dataType, jqXHR) {
 //        var address = $("#zip").val()
        
 //        var map = new google.maps.Map($("#putmaphere").html(), mapOptions);
        
 //        var mapOptions = {
 //            zoom: 8,
 //            center: latlng,
 //            mapTypeId: google.maps.MapTypeId.ROADMAP,
 //            mapTypeControl: false
 //        };
        
 //        // var latlng = new google.maps.LatLng();
 //        var latlng = function(address)  {
 //        var geocoder = new google.maps.Geocoder();
 //          geocoder.geocode({"#zip": address}, function(results, status){
 //          if (status == google.maps.GeocoderStatus.OK) {
 //          map.setCenter(results[0].geometry.location);
 //          var marker = new google.maps.Marker({
 //          map: map,
 //          position: results[0].geometry.location
 //          });
 //          } else {
 //          alert('Geocode was not successful for the following reason: ' + status);
 //          }
 //        });
 //      }
 //    },
 //      addMap: function(e) {
 //      e.preventDefault();

 //        var newMapRequest = {
 //              address: $(".zip").val()
 //        };

 //        $.ajax({
 //          url: "https://maps.google.com/maps/api/js?key=AIzaSyA_FaETrMKtUtLoXzDa2QM_ZkpM5Ah53Ks&sensor=false",
 //          type: "POST",
 //          data: newMapRequest, 
 //          dataType: "json",
 //          error: function(jqXHR, status, error) {
 //          alert("couldn't add");
 //          },
 //          success: function(data, dataType, jqXHR) {
 //          $(".zip").val("");
 //          myMap.addMap();
 //          }
 //        });      
 //      }
 //    }
    
      // function loadScript() {
      // var script = document.createElement('script');
      // script.type = 'text/javascript';
      // script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      // 'callback=map.Init';
      // document.body.appendChild(script);
      // }
      //     window.onload = loadScript;
      //   }
