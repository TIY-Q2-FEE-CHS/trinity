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
        alert("check render rant, you broke it");
      },
      success: function(data, dataType, jqXHR) {
        var rants = window.rants = data;
        myRant.render($(".rantscontain"), Templates.postRant, rants);

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
          console.log("remove success!");
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
        console.log("update works");
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
        console.log("render details success");
      }
    });
    }

};
 
