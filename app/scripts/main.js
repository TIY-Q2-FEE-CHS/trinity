$(document).ready(function() {
// user enters rant into rant into input and zip into input
// on form submit event, create another page/hide form 
// map with pointer and text bubble containing rant
  myMap.init();

});

  var myMap = {
  init: function() {
      this.initStyling();
      this.initEvents();
  },
  initStyling: function() {
      this.renderMap();
      // this.renderRant();
  },
  initEvents: function() {
    $("form").on("submit", ".submitbtn", function() { 
      e.preventdefault();
 	    // var rant = $("#rant").val();
  	   var address = $("#zip").val();
       myMap.addMap(zip);
       myRant.addRant(rant);
    });
  },

  	render: function (e) {
  		var renderedmap = window.renderedmap = data;
  		$(("#putmaphere").html(), renderedmap);
      // var renderedrant = window.renderedrant = rant;
      // $(("#putranthere").html(), renderedrant);
      console.log(renderedmap);
	},

    renderMap: function(map) {

      $.ajax({
      url: "https://maps.google.com/maps/api/js?key=AIzaSyCajq54oRnwkbl-7C-2_-L3LTGUMKcMRjQ&sensor=false",
      type: "GET",
      dataType: "jsonp",
      error: function(jqXHR, status, error) {
        alert("you broke the internet");
      },
      success: function(data, dataType, jqXHR) {
        var address = $("#zip").val()
        
        var map = new google.maps.Map($("#putmaphere").html(), mapOptions);
        
        var mapOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };
		
        // var latlng = new google.maps.LatLng();
        var latlng = function(address)  {
        var geocoder = new google.maps.Geocoder();
          geocoder.geocode({"#zip": address}, function(results, status){
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
      }
    },
      addMap: function(e) {
      e.preventDefault();

        var newMapRequest = {
              address: $(".zip").val()
        };

        $.ajax({
          url: "https://maps.google.com/maps/api/js?key=AIzaSyA_FaETrMKtUtLoXzDa2QM_ZkpM5Ah53Ks&sensor=false",
          type: "POST",
          data: newMapRequest, 
          dataType: "json",
          error: function(jqXHR, status, error) {
          alert("couldn't add");
          },
          success: function(data, dataType, jqXHR) {
          $(".zip").val("");
          myMap.addMap();
          }
        });  	
      }
    }
    
      // function loadScript() {
      // var script = document.createElement('script');
      // script.type = 'text/javascript';
      // script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      // 'callback=map.Init';
      // document.body.appendChild(script);
      // }
      //     window.onload = loadScript;
      //   }
