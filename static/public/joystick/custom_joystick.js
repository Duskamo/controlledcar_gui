$(document).ready(function(){
	// Vertical Joystick

    var joystickViewVertical = new JoystickView(150, function(callbackView){
	$("#joystickContentVertical").append(callbackView.render().el);
	setTimeout(function(){
	    callbackView.renderSprite();
	}, 0);
    });
    joystickViewVertical.bind("verticalMove", function(y){
	// Output Vertical value to screen and POST to backend
	$("#yVal").html(y.toFixed(2));

	var val = {
		"y" : y.toFixed(2),
		"x" : $("#xValH").text() != '' ? $("#xValH").text() : '0'
	};

	$.ajax({
	    url : "/update_car",
	    type: "POST",
	    data : JSON.stringify(val),
	    datatype: 'json',
	    contentType: 'application/json',
	    success: function(data, textStatus, jqXHR)
	    {
		//data - response from server
	    },
	    error: function (jqXHR, textStatus, errorThrown)
	    {
	 
	    }
	});	
    });

	// Horizontal Joystick

     var joystickViewHorizontal = new JoystickViewHorizontal(150, function(callbackView){
	$("#joystickContentHorizontal").append(callbackView.render().el);
	setTimeout(function(){
	    callbackView.renderSprite();
	}, 0);
    });
    joystickViewHorizontal.bind("horizontalMove", function(x){
	// Output Horizontal value to screen and POST to backend
	$("#xValH").html(x.toFixed(2));

	var val = {
		"x" : x.toFixed(2),
		"y" : $("#yVal").text() != '' ? $("#yVal").text() : '0'
	};

	$.ajax({
	    url : "/update_car",
	    type: "POST",
	    data : JSON.stringify(val),
	    datatype: 'json',
	    contentType: 'application/json',
	    success: function(data, textStatus, jqXHR)
	    {
		//data - response from server
	    },
	    error: function (jqXHR, textStatus, errorThrown)
	    {
	 
	    }
	});	
    });
});
