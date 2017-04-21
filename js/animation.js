/* Variable */
var $animation_elements = $('.animation-element');
var $window = $(window);

/* All */

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
	  $element.removeClass("in-active");
	  $element.removeClass("selected");
    }
  });
}

/* Home */

/* About */

function about_content(pilih) {
	$(".in-active").removeClass("in-active");
	$element = $(".about-mid-content");
	$element.addClass('in-active');
	var imgpilih = document.getElementById("about-mid-content-img");
	//check to see urutan berapa yg di klik
	if (pilih == 1) {
		$element = $(".about-sub-content-1");
		$(".about_content.satu").addClass('in-active');
		imgpilih.src="images/theme/perantara-1.png";
	} else if (pilih == 2) {
		$element = $(".about-sub-content-2");
		$(".about_content.dua").addClass('in-active');
		imgpilih.src="images/theme/perantara-2.png";
	} else if (pilih == 3) {
		$element = $(".about-sub-content-3");
		$(".about_content.tiga").addClass('in-active');
		imgpilih.src="images/theme/perantara-3.png";
	} else {
		alert("tidak ada yg dipilih");
	}
	$element.addClass('in-active');
}

/* Award */

function award_content(pilih) {
	$(".in-active").removeClass("in-active");
	$(".selected").removeClass("selected");
	//check to see urutan berapa yg di klik
	if (pilih == 1) {
		$element = $(".b1_article");
		$(".ball_1").addClass('selected');
	} else if (pilih == 2) {
		$element = $(".b2_article");
		$(".ball_2").addClass('selected');
	} else if (pilih == 3) {
		$element = $(".b3_article");
		$(".ball_3").addClass('selected');
	} else if (pilih == 4) {
		$element = $(".b4_article");
		$(".ball_4").
		('selected');
	} else {
		alert("tidak ada yg dipilih");
	}
	$element.addClass('in-active');
}
function award_expand(pilih) {
	$(".in-expand").removeClass("in-expand");
	//check to see urutan berapa yg di klik
	if (pilih == 1) {
		$element = $(".award_1");
	} else if (pilih == 2) {
		$element = $(".award_2");
	} else if (pilih == 3) {
		$element = $(".award_3");
	} else {
		alert("tidak ada yg dipilih");
	}
	$element.addClass('in-expand');
}
function award_content_close() {
	$(".in-active").removeClass("in-active");
	$(".selected").removeClass("selected");
}

/* Founder */

function founder_content(pilih) {
	if (pilih == '<') {
		//$(".slide_-2").addClass('slide_geser_2');
		$(".slide_-1").addClass('slide_geser_2');		//awal slide_geser_-2
		$(".slide_0").addClass('slide_geser_-1');
		$(".slide_1").addClass('slide_geser_0');
		$(".slide_2").addClass('slide_geser_1');
		founder_content_geser();
	} else if (pilih == '>') {
		//$(".slide_-2").addClass('slide_geser_-1');
		$(".slide_-1").addClass('slide_geser_0');
		$(".slide_0").addClass('slide_geser_1');
		$(".slide_1").addClass('slide_geser_2');
		$(".slide_2").addClass('slide_geser_-1');		//awal slide_geser_-2
		founder_content_geser();
	} /*else if (pilih == '-2') {
		$(".slide_-2").addClass('slide_geser_0');
		$(".slide_-1").addClass('slide_geser_1');
		$(".slide_0").addClass('slide_geser_2');
		$(".slide_1").addClass('slide_geser_-2');
		$(".slide_2").addClass('slide_geser_-1');
		founder_content_geser();
	}*/ else if (pilih == '-1') {
		//$(".slide_-2").addClass('slide_geser_-1');
		$(".slide_-1").addClass('slide_geser_0');
		$(".slide_0").addClass('slide_geser_1');
		$(".slide_1").addClass('slide_geser_2');
		$(".slide_2").addClass('slide_geser_-1');		//awal slide_geser_-2
		founder_content_geser();
	} else if (pilih == '1') {
		//$(".slide_-2").addClass('slide_geser_2');
		$(".slide_-1").addClass('slide_geser_2');		//awal slide_geser_-2
		$(".slide_0").addClass('slide_geser_-1');
		$(".slide_1").addClass('slide_geser_0');
		$(".slide_2").addClass('slide_geser_1');
		founder_content_geser();
	} else if (pilih == '2') {
		//$(".slide_-2").addClass('slide_geser_1');
		$(".slide_-1").addClass('slide_geser_2');
		$(".slide_0").addClass('slide_geser_1');		//awal slide_geser_-2
		$(".slide_1").addClass('slide_geser_-1');
		$(".slide_2").addClass('slide_geser_0');
		founder_content_geser();
	} else {
		alert(pilih);
	}
}
function founder_content_geser() {
	// hapus class urutan
	//$(".slides").removeClass('slide_-2');
	$(".slides").removeClass('slide_-1');
	$(".slides").removeClass('slide_0');
	$(".slides").removeClass('slide_1');
	$(".slides").removeClass('slide_2');
	// tambah klass urutan berdasarkan class geser
	//$(".slide_geser_-2").addClass('slide_-2');
	$(".slide_geser_-1").addClass('slide_-1');
	$(".slide_geser_0").addClass('slide_0');
	$(".slide_geser_1").addClass('slide_1');
	$(".slide_geser_2").addClass('slide_2');
	// hapus class geser
	//$(".slides").removeClass('slide_geser_-2');
	$(".slides").removeClass('slide_geser_-1');
	$(".slides").removeClass('slide_geser_0');
	$(".slides").removeClass('slide_geser_1');
	$(".slides").removeClass('slide_geser_2');
	// Ganti Atribut Onclick
	//$(".slide_-2").attr("onclick","founder_content('-2')");
	$(".slide_-1").attr("onclick","founder_content('-1')");
	$(".slide_0").attr("onclick","founder_content('0')");
	$(".slide_1").attr("onclick","founder_content('1')");
	$(".slide_2").attr("onclick","founder_content('2')");
}

/* Team */

function team_content_hover(pilih) {
	if (pilih == 1) {
		$(".side_right").addClass('hoverd');
		
		$(".side_bottom").addClass('idled');
		$(".side_left").addClass('idled');
	} else if (pilih == 2) {
		$(".side_bottom").addClass('hoverd');
		
		$(".side_right").addClass('idled');
		$(".side_left").addClass('idled');		
	} else if (pilih == 3) {
		$(".side_left").addClass('hoverd');
			                                                                            
		$(".side_right").addClass('idled');
		$(".side_bottom").addClass('idled');
		
		$(".side_bottom").addClass('idled_to_right');
	} else {
		alert("tidak ada yg dipilih");
	}
}
function team_content_out(pilih) {
	if (pilih == 1) {
		$(".side_right").removeClass('hoverd');
		
		$(".side_bottom").removeClass('idled');
		$(".side_left").removeClass('idled');
	} else if (pilih == 2) {
		$(".side_bottom").removeClass('hoverd');
		
		$(".side_right").removeClass('idled');
		$(".side_left").removeClass('idled');		
	} else if (pilih == 3) {
		$(".side_left").removeClass('hoverd');
			
		$(".side_right").removeClass('idled');
		$(".side_bottom").removeClass('idled');
		
		$(".side_bottom").removeClass('idled_to_right');
	} else {
		alert("tidak ada yg dipilih");
	}
}
function team_content_select(pilih) {
	if (pilih == 1) {
		$(".side_right").addClass('selected');
		
		$(".side_bottom").addClass('deselected');
		$(".side_left").addClass('deselected');
		
		$(".side_right").removeClass('deselected');
		$(".side_bottom").removeClass('selected');
		$(".side_left").removeClass('selected');
		
		$(".side_right").removeClass('deselected_to_top');
		$(".side_left").removeClass('deselected_to_top');

		$(".side_bottom").removeClass('deselected_to_right');		
	} else if (pilih == 2) {
		$(".side_bottom").addClass('selected');
		
		$(".side_right").addClass('deselected');
		$(".side_left").addClass('deselected');	

		$(".side_right").addClass('deselected_to_top');
		$(".side_left").addClass('deselected_to_top');	

		$(".side_bottom").removeClass('deselected');
		$(".side_right").removeClass('selected');
		$(".side_left").removeClass('selected');
		
		$(".side_bottom").removeClass('deselected_to_right');
	} else if (pilih == 3) {
		$(".side_left").addClass('selected');
			
		$(".side_right").addClass('deselected');
		$(".side_bottom").addClass('deselected');
		
		$(".side_bottom").addClass('deselected_to_right');
		
		$(".side_left").removeClass('deselected');
		$(".side_bottom").removeClass('selected');
		$(".side_right").removeClass('selected');
		
		$(".side_right").removeClass('deselected_to_top');
		$(".side_left").removeClass('deselected_to_top');	
	} else {
		alert("tidak ada yg dipilih");
	}
}

function team_content_deselect(pilih) {
	if (pilih == 1) {
		$(".side_right").removeClass('selected');
		
		$(".side_bottom").removeClass('deselected');
		$(".side_left").removeClass('deselected');
	} else if (pilih == 2) {
		$(".side_bottom").removeClass('selected');
		
		$(".side_right").removeClass('deselected');
		$(".side_left").removeClass('deselected');	

		$(".side_right").removeClass('deselected_to_top');
		$(".side_left").removeClass('deselected_to_top');		
	} else if (pilih == 3) {
		$(".side_left").removeClass('selected');
			
		$(".side_right").removeClass('deselected');
		$(".side_bottom").removeClass('deselected');
		
		$(".side_bottom").removeClass('deselected_to_right');
	} else {
		alert("tidak ada yg dipilih");
	}
}

/* Activity */

/* Contact */

/* Update */


/* Other */

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');