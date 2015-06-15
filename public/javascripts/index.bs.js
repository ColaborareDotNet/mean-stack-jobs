	$(document).ready(function() {
	  setHandlerForClickedJobTitlePanel();
	});


	function setHandlerForClickedJobTitlePanel() {
	  $("h3.panel-title").click(function() {

	    //use parent elem to find sib that needs icon toggling
	    var parent = $(this).parents("div.panel.panel-primary");
	    var sib = parent.find("div.panel-collapse.collapse");
	    var elemToToggleIcon = $(this).find("span.toggle-icon");

	    //if sib elem has class "in", meaning it's expanded (and not collapsed), and we're about to collapse it
	    if (sib.attr("class").split(" ").indexOf("in") >= 0) {
	      elemToToggleIcon.removeClass("glyphicon-chevron-up");
	      elemToToggleIcon.addClass("glyphicon-chevron-down");
	    } else {
	      elemToToggleIcon.removeClass("glyphicon-chevron-down");
	      elemToToggleIcon.addClass("glyphicon-chevron-up");
	    }

	  });

	}