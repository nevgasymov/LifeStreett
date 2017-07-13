$(document).ready(function(){

	var checkbox = $(".custom-check input");

  checkbox.change(function() {
    if($(this).is(':checked')) {
      $(this).closest('tr').addClass('active');
		} else {
      $(this).closest('tr').removeClass('active');
		}
  });
});