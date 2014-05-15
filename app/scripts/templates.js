Templates = {};
Templates.Rant = [
	 "<% _.each(rants, function(rant, index, list) { %>",
            "<div class=imarant data-rantId=\"<%= rant._id %>\">",
            "<div class=\"rantcontent\">",
              "<p><%= rant.content %></p>",
            "</div>",
            "<div class=\"zipcode\"><small><strong>Rant from Zip Code:</strong></small> <%= rant.zipcode %> <span class=\"glyphicon glyphicon-pencil editRant\"></span><span class=\"glyphicon glyphicon-remove removeRant\"></span> </div>",
            "</div>",
        "<% }); %>"
].join("\n");

Templates.editRant = [
	
      "<div class=\"form-group\">",
        "<label for=\"editContentForm\">Edit Rant</label>",
        "<textarea id=\"editContentForm\" class=\"form-control editContentForm\"><%= Rant.content %></textarea>",
        "<p class=\"help-block\">Example block-level help text here.</p>",
      "</div>",
  "</div>",
  "<div class=\"form-footer\" data-rantId=\"<%= rant._id %>\">",
  	"<input id=\"editRantId\" type=\"hidden\" value=\"<%= rant._id %>\">",
    "<button type=\"button\" class=\"btn btn-default deleterRant\">Close</button>",
    "<button type=\"button\" class=\"btn btn-primary submitUpdatedRant\">Save & Post</button>",
  "</div>"
].join("\n");

