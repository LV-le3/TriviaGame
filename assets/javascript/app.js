
var correct= 0;
var incorrect= 0;


$(document).ready(function() {

	var number = 30;
	var intervalId;


	function run(){


		intervalId =setInterval(decrement,1000);
	}
	function stop(){;
		clearInterval(intervalId);
}

		function decrement(){
			number--; 
		$("#timer").html("<h2>Time Remaining: " + number + "</h2>");

		if(number === 0){
			stop();
			alert("Sorry, your time is up!");
			$(".container").html("<h1>Results</h1>");
		}
		}
run();


	$(".clickme").on("click",function(){
		$(".container").html("<h1>Results</h1>");
		stop();
	})

	




$(".radio-inline").click(function(){
	var question = $(this).parent("form");
	var answer =$(this).children("input").val();
	var correctanswer= question.attr("data-answer");
	question.find("input").each(function(){
		$(this).attr('disabled','disabled');
	})

});
	
})
































