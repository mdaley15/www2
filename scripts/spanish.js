//Initially set is spanish variable to false, if there are cookies or the page location has '-sp/' on the end, it will set to true//

$(document).ready(function() {
  // current Path
  var url = window.location.pathname;

  // Check localStorage if site iis already spanish then turn page to spanish
  if (localStorage.getItem("isSpanish")) {
    $("#langCheck").attr("checked", true);
    $('a[data-content-field="site-title"]').attr("href", "home-sp");
    if (url === "/") {
      window.location.replace("home-sp");
    }
  }

  //toggle switch change listener
  $("#langCheck").on("change", function(e) {
    handlePageChange(this.checked, url);
  });
});

// handles changes based on the position of the checkbox
function handlePageChange(checked, url) {
  if (checked) {
    localStorage.setItem("isSpanish", true);
    url === "/"
      ? window.location.replace("home-sp")
      : window.location.replace(url + "-sp");
  } else {
    localStorage.removeItem("isSpanish");

    if (url.includes("home-sp")) {
      window.location.replace("/");
    } else {
      var new_url = url.substring(0, url.indexOf("-sp"));
      window.location.replace(new_url);
    }
  }
}
