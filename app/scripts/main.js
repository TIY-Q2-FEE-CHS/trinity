$(document).ready(function() {
// user enters rant into rant into input and zip into input
// on form submit event, create another page/hide form 
// map with pointer and text bubble containing rant
  myRant.init();

});

var myRant = {
  init: function() {
      this.initStyling();
      this.initEvents();
    },

  initStyling: function() {
      this.renderRant();
    },

  initEvents: function() {
       $("#rantsubmitform").on("submit", this.addRant);
       $("div").on("click", ".removerant", this.removeRant);
       $("div").on("click", ".editrant", function(e) {
        e.preventDefault();
        var rantid = $(this).closest(".rant").data("rantid");
        myRant.renderRantToEdit(rantid);
      $("#editRantModal").modal();
      });
      $("#editRantModal").on("click", ".submiteditrant", function(e) {
      var rantid = $("#editrantid").val();
       myRant.updateRant(rantid);
       console.log(rantid);
      });
    }, 
  render: function ($el, template, data) {
      
      var tmpl = _.template(template, data);

      $el.html(tmpl);
  },

  renderRant: function() {
      $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/trinity",
      type: "GET",
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("check yo self");
      },
      success: function(data, dataType, jqXHR) {
        var rants = window.rants = data;
       myRant.render($(".rantscontain"), Templates.postRant, rants);
     //within the myRant obj, we'll render div class "rant" 
     //full of rants through the template.rant
      }
    });
  },
  addRant: function(e){
      e.preventDefault();
        var newRant = {
          content: $("#rantsubmittext").val(),
          zip: $("#rantsubmitzip").val(),
          date: new Date()
        };

      $.ajax({
        url: "http://tiy-fee-rest.herokuapp.com/collections/trinity",
        type: "POST",
        data: newRant,
        error: function(jqXHR, status, error) {
          alert("no no no, i don't add rant");
        },
        success: function(data, dataType, jqXHR) {
          $("#rantsubmittext").val("");
          $("#rantsubmitzip").val("");
          myRant.renderRant();
            console.log("add and render success!");
        }
      });

      geolocateUser();


    },
    
    removeRant: function(e){
      e.preventDefault();
      var $thisRant = $(this).closest(".rant")
      var rantid = $thisRant.data("rantid");

    $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/trinity/" + rantid,
      type: "DELETE",
      error: function(jqXHR, status, error) {
        alert("no no no, no remove for you");
      }, 
      success: function(data) {
         myRant.renderRant();  
      }
    });
  },
    updateRant: function(rantid) {
     var id = rantid;
        var editRant = {
              date: new Date(),
              content: $("#editranttext").val()
        };

    $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/trinity/" + id,
      type: "PUT",
      data: editRant, 
      error: function(jqXHR, status, error) {
        alert("nah dawg"+ error);
      },
      success: function(data, dataType, jqXHR) {
        $("#editRantModal").modal("hide");
        myRant.renderRant(); 
        console.log("modal works");
      }
    });
  },
  renderRantToEdit: function(rantid) {

    $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/trinity/" + rantid,
      type: "GET",
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("broke ass render edit");
      },
      success: function(data, dataType, jqXHR) {
        var rants = window.rants = data; 
        myRant.render($("#editRantForm"),Templates.editRant, rants);
      }
    });
    }


};
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
 // 	    // var rant = $("#rant").val();
 //  	   var address = $("#zip").val();
 //       myMap.addMap(zip);
 //       myRant.addRant(rant);
 //    });
 //  },

 //  	render: function (e) {
 //  		var renderedmap = window.renderedmap = data;
 //  		$(("#putmaphere").html(), renderedmap);
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
