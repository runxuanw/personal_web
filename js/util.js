$(document).ready(function(){
    $(this).scrollTop(0);
		
	$("#myPic div.top img").hover(function() {
	   $(this).css("opacity", "0");
	   $("#myPic div.bottom img").stop(true).animate({backgroundColor: "white"}, 1000);
	}, function() {
	   $(this).css("opacity", "1");
	   $("#myPic div.bottom img").stop(true).animate({backgroundColor: "#032F4A"}, 1000);
	});
	
	$("#frontLink").hover(function() {
	  $(this).stop(true).fadeTo(500, 0, function() {
	    $(this).html("Hey there !");
		$(this).fadeTo(500, 1);
	  });
	},
	function() {
	  $(this).stop(true).delay(500).fadeTo(800, 0, function() {
	    $(this).html("Hello World..<span class='blink'>.</span>");
		$(this).fadeTo(500, 1);
	  });
	}
	);
	
	$(".skill_icon").click(function() {
	     if($(this).css("filter") == "none") {
		 $(this).css("filter", "grayscale(100%)");
		 $(".skill_icon").each(function(i) {
	     var toggle = $(this);
		 setTimeout(function() {
	       toggle.css("filter", "grayscale(100%)");
		 }, 300*i);
	   });
		 }
	     else {
		 $(this).css("filter", "none");
		 $(".skill_icon").each(function(i) {
	     var toggle = $(this);
		 setTimeout(function() {
	       toggle.css("filter", "none");
		 }, 300*i);
	   });
		 }
	   
	});
	
});

function sendEmail() {

    $.ajax({
        url: "https://formspree.io/runxuanwei@gmail.com", 
        method: "POST",
        data: {
			from: $("#email").val(), 
			name: $("#name").val(), 
			message: $("#message").val()
		},
        dataType: "json",
		success: function(data) {
			swal("Thank you!", "Your message is sent successfully!", "success");
		},
		error: function(err) {
			swal("Sorry...", "An error occurred.", "error");
		}
    });
	return false;
};

function changeCSS() {
	var scroll = $(window).scrollTop();
	
	  if(scroll < $("#intro").offset().top*2/3) {
          $(".navbar-default").stop(true).animate({backgroundColor: "transparent"}, 700);
		  $(".navbar-default .navbar-nav > li > a").animate({color: "white"}, 700);
      }
	  else if (scroll >= $("#intro").offset().top/2-100 && scroll < $("#project").offset().top-100) {
        $(".navbar-default").stop(true).animate({backgroundColor: "#0D394A"}, 700);
		$(".navbar-default .navbar-nav > li > a").animate({color: "white"}, 700);
		$(".navbar-default").css("opacity" , "1"); 
      }
	  else if(scroll >= $("#project").offset().top-100 && scroll < $("#experience").offset().top-100) {
		$(".navbar-default").stop(true).animate({backgroundColor: "transparent"}, 700);
		$(".navbar-default .navbar-nav > li > a").animate({color: "white"}, 700);
		$(".navbar-default").css("opacity" , "1"); 
	  }
	  else if(scroll >= $("#experience").offset().top-100 && scroll < $("#contact").offset().top-100) {
		$(".navbar-default").stop(true).animate({backgroundColor: "black"}, 700);
		$(".navbar-default .navbar-nav > li > a").animate({color: "white"}, 700);
		$(".navbar-default").css("opacity" , "1"); 
	  }
      else {
        $(".navbar-default").stop(true).animate({backgroundColor: "transparent"}, 700);
		$(".navbar-default .navbar-nav > li > a").animate({color: "white"}, 700);
		$(".navbar-default").css("opacity" , "1");
      }
}

function fadeFrontLink() {
	  var scroll = $(window).scrollTop();
	  var opacity = ($("#frontLink").offset().top-scroll)/$("#frontLink").offset().top;
	  opacity = opacity >= 0 ? opacity : 0;
	  $("#frontLink").css("opacity", opacity);
}

$(window).scroll(function() {
  clearTimeout(changeCSS._tId);
    changeCSS._tId= setTimeout(function(){
        changeCSS();
    }, 100);
	
	fadeFrontLink();
});



function navClick(navToId) {
	$('html, body').animate({scrollTop: $(navToId).offset().top}, 500);
	return false;
}