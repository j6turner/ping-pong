$(document).ready(function() {
  var max = parseInt(prompt("Up to what number would you like to ping-pong?"));
  var x;
  for (x=1; x<=max; x+=1) {
    if ((x%3===0)&&(x%5===0)) {
      $("#list").append("<ul><em>ping-pong</em></ul>");
    } else if (x%3===0) {
      $("#list").append("<ul><em>ping</em></ul>");
    } else if (x%5===0) {
      $("#list").append("<ul><em>pong</em></ul>");
    } else {
      $("#list").append("<ul></ul>" + x);
    };
  };
});
