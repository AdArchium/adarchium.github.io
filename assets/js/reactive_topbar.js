/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function mobileNav() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }