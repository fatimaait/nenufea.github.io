/*loading page */


jQuery(document).ready(function($) {  
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});
});
function isload() {

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbars");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
}

const slider = document.querySelector(".glide");

		new Glide(slider, {
		  type: "carousel",
		  startAt: 0,
		  perview: 1,
		  animationDuration: 800,
		  animationTimingFunc: "linear",
		}).mount();
	
	
 function increment() {
	document.getElementById('quantity').stepUp();
 }
 function decrement() {
	document.getElementById('quantity').stepDown();
 }
 function incrementtwo() {
	document.getElementById('quantitytwo').stepUp();
 }
 function decrementtwo() {
	document.getElementById('quantitytwo').stepDown();
 }
  function incrementtree() {
	document.getElementById('quantitytree').stepUp();
 }
 function decrementtree() {
	document.getElementById('quantitytree').stepDown();
 }
  function incremenfour() {
	document.getElementById('quantityfour').stepUp();
 }
 function decrementfour() {
	document.getElementById('quantityfour').stepDown();
 }
  function incrementfive() {
	document.getElementById('quantityfive').stepUp();
 }
 function decrementfive() {
	document.getElementById('quantityfive').stepDown();
 }


		




		





	  
