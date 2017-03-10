/*
Author: Pradeep Khodke
URL: http://www.codingcage.com/
*/

$('document').ready(function()
{ 
     /* validation */
	 $("#login-form").validate({


      rules:
	  {
			password: {
			required: true,
			},
			email: {
            required: true,
            email: true
            },
	   },
       messages:
	   {
            password:{
                      required: "please enter your password"
                     },
            email: "please enter your email address",
       },
	   submitHandler: submitForm	
       });  
	   /* validation */
	   
	   /* login submit */
	   function submitForm()
	   {
		   console.log("FORM");


		   var data = $("#login-form").serialize();
				
			$.ajax({
				
			type : 'POST',
			url  : 'https://spartaapp.azurewebsites.net/smartTV/ajaxLogin.php',
			data : data,
			beforeSend: function()
			{	
				// $("#error").fadeOut();
				// $("#btn-login").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; sending ...');
			},
			success :  function(response)
			   {						
					if(response=="ok"){
									
						// $("#btn-login").html('<img src="btn-ajax-loader.gif" /> &nbsp; Signing In ...');
						// setTimeout(' window.location.href = "home.php"; ',4000);
						console.log("success");

						swal({
							title: "Authentication Success !",
							text: "Good Job!",
							type: "success",
							confirmButtonText: "Thank You !"
						});

						window.location.href = "home.html" ;



					}
					else{
									
				// 		$("#error").fadeIn(1000, function(){
				// $("#error").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+response+' !</div>');
				// 							$("#btn-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Sign In');
				// 					});

						console.log("error");


						swal({
							title: "Authentication Error !",
							text: "Check your credentials !",
							type: "error",
							confirmButtonText: "Thank You"
						});

					}
			  }
			});
				return false;
		}
	   /* login submit */
});