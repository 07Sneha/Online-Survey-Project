/**
 * 
 */
 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});
function postYourAdd () {
    var iframe = $("#forPostyouradd");
    iframe.attr("src", iframe.data("src")); 
}
   var clicks = 0;
    function hello() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        console.log(clicks);
    };