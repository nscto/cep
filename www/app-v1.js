var firstUrl = "https://www.warungcepfaiz.com/app/",
	urlService = firstUrl + "services/apps.php",
	urlContent = firstUrl + "contents/";
$.getScript(urlContent+"main.js");
function run_first(){
    var height = $(window).outerHeight(), height2 = height - 150;
    $("#frame-start").show().height(height2);
    $("#frame-start .display-container").height(height2);
}
run_first();