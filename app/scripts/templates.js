Templates = {};
Templates.postRant = [
	 "<% _.each(rants, function(rant, index, list) { %>",
        "<div class=\"rant\" data-rantid=\"<%= rant._id %>\">",
          "<p>\"<%= rant.content %>\"</p>",
          "<span class=\"glyphicon glyphicon-pencil editrant\"></span><span class=\"glyphicon glyphicon-remove removerant\"></span>",
        "</div>",
        "<% }); %>"
].join("\n");

Templates.editRant = [
	"<div class=\"modal-body\">",
      "<div class=\"form-group\">",
        "<label for=\"editrantlabel\">Edit Rant</label>",
        "<textarea id=\"editranttext\" class=\"form-control editranttext\"><%= rants.content %></textarea>",
      "</div>",
  "</div>",    
      "<div class=\"modal-footer\" data-editrantid=\"<%= rants._id %>\">",
  	   "<input id=\"editrantid\" type=\"hidden\" value=\"<%= rants._id %>\">",
        "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>",
        "<button type=\"button\" class=\"btn btn-primary submiteditrant\">Save & Post</button>",
      "</div>"
].join("\n");

