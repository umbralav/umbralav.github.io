/*$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});*/

//Form
jQuery(document).ready(function() {
	jQuery("#contacto").submit(function(e) {
	    jQuery.ajax({
	           	url: "https://formspree.io/umbral.av@gmail.com", 
   				method: "POST",
    			data: jQuery("#contacto").serialize(), // serializes the form's elements.
    			dataType: "json",
     			success: function()
	           {
	              jQuery("#contacto").addClass("displaynone");
	              jQuery("#text_thankyou").addClass("displayblock");
	           }
	         });

	   		e.preventDefault(); // avoid to execute the actual submit of the form.
	});
});
