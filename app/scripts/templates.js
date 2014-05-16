Templates = {};
Templates.rant = [
	 "<% _.each(rants, function(rant, index, list) { %>",
        "<div class=\"rant\">",
        "<div data-rantid=\"<%= rant._id %>\">",
          "<p class=\"rantcontent\"><%= rant.content %></p>",
        "</div>",
        "</div>",
        "<% }); %>"
].join("\n");

Templates.editRant = [
	"<div class=\"modal-body\">",
      "<div class=\"form-group\">",
        "<label for=\"editrantsubmit\">Edit Rant</label>",
        "<textarea id=\"editrantsubmit\" class=\"form-control editrantsubmit\"><%= rant.content %></textarea>",
      "</div>",
      "<div class=\"modal-footer\" data-editrantid=\"<%= rant._id %>\">",
  	   "<input id=\"editrantid\" type=\"hidden\" value=\"<%= rant._id %>\">",
        "<button type=\"button\" class=\"btn btn-default deleteRant data-dismiss=\"modal\">Close</button>",
        "<button type=\"button\" class=\"btn btn-primary submitUpdatedRant\">Save & Post</button>",
      "</div>",
  "</div>"
].join("\n");

