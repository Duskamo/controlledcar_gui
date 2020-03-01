$(document).ready(function(){
	
	// Overall joystick
	/*
    var joystickView = new JoystickView(150, function(callbackView){
	$("#joystickContent").append(callbackView.render().el);
	setTimeout(function(){
	    callbackView.renderSprite();
	}, 0);
    });
    joystickView.bind("verticalMove", function(y){
	$("#yVal").html(y);
    });
    joystickView.bind("horizontalMove", function(x){
	$("#xVal").html(x);
    });*/

	// Vertical Joystick

    var joystickViewVertical = new JoystickView(150, function(callbackView){
	$("#joystickContentVertical").append(callbackView.render().el);
	setTimeout(function(){
	    callbackView.renderSprite();
	}, 0);
    });
    joystickViewVertical.bind("verticalMove", function(y){
	$("#yVal").html(y.toFixed(2));
    });

	// Horizontal Joystick

     var joystickViewHorizontal = new JoystickViewHorizontal(150, function(callbackView){
	$("#joystickContentHorizontal").append(callbackView.render().el);
	setTimeout(function(){
	    callbackView.renderSprite();
	}, 0);
    });
    joystickViewHorizontal.bind("horizontalMove", function(x){
	$("#xValH").html(x.toFixed(2));
    });
});
