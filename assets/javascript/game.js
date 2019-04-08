$(document).ready(function(){
  
  // Random numbers target number and crystals
  var targetNumber = function(min, max) {
    for (var min = 19, max = 120)
    return (Math.floor(Math.random() * (max - min) + min))
  };
    // $("#targetNumber").innerHTML(function(){
      // targetNumber = randomNumber(19,120);
      // return(targetNumber);
      var crystals = function(min, max) {
        for (var min = 1, max = 12)
        return (Math.floor(Math.random() * (max - min) + min))
      };

   
  });
    
  var counter = 0;
  var wins = 0;
  var losses = 0;

  total = 0;
	$('#total').html(total);

	start();

	$("#crystal1").click(function(){
		total = crystal1 + total;
		
		if (total < targetNumber) {
			$("#total").html(total);
			return(total);
		}
		else if (total > targetNumber) {
			$("#total").html(total);
			alert("Sorry! You Lose!");
			start();
		}
		else {
			$("#total").html(total);
			$('#wins').html(wins);
			alert("You won!");
			start();
		}
	});

	$("#crystal2").click(function(){
		total = crystal2 + total;
		
		if (total < targetNumber) {
			$("#total").html(total);
			return(total);
		}
		else if (total > targetNumber) {
			$("#total").html(total);
			alert("Sorry! You Lose!");
			start();
		}
		else {
			$("#total").html(total);
			$('#wins').html(wins);
			alert("You won!");
			start();
		}

	});

	$("#crystal3").click(function(){
		total = crystal3 + total;
		
		if (total < targetNumber) {
			$("#total").html(total);
			return(total);
		}
		else if (total > targetNumber) {
			$("#total").html(total);
			alert("Sorry! You Lose!");
			start();
		}
		else {
			$("#total").html(total);
			$('#wins').html(wins);
			alert("You won!");
			start();
		}

	});

	$("#crystal4").click(function(){
		total = crystal4 + total;
		
		if (total < targetNumber) {
			$("#total").html(total);
			return(total);
		}
		else if (total > targetNumber) {
			$("#total").html(total);
			alert("Sorry! You Lose!");
			start();
		}
		else {
			$("#total").html(total);
			$('#wins').html(wins);
			alert("You won!");
			start();
		}
	});

  
