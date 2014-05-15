Templates = {};
Templates.Rant = [
	 "<% _.each(rants, function(rant, index, list) { %>",
            "<div class=imarant data-rantId=\"<%= rant._id %>\">",
            "<div class=\"rant\">",
            "<h2> rant.zip </h2>",
              "<p><%= rant.content %></p>",
            "</div>",
        "<% }); %>"
].join("\n");

Templates.editRant = [
	"<div class=\"modal-body\">",
      "<div class=\"form-group\">",
        "<label for=\"editrantsubmit\">Edit Rant</label>",
        "<textarea id=\"editrantsubmit\" class=\"form-control editrantsubmit\"><%= rant.rant %></textarea>",
      "</div>",
      "<div class=\"modal-footer\" data-rantId=\"<%= rant._id %>\">",
  	   "<input id=\"editRantId\" type=\"hidden\" value=\"<%= rant._id %>\">",
        "<button type=\"button\" class=\"btn btn-default deleteRant data-dismiss=\"modal\">Close</button>",
        "<button type=\"button\" class=\"btn btn-primary submitUpdatedRant\">Save & Post</button>",
      "</div>",
  "</div>"
].join("\n");

