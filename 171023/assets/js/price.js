window.onload=pricing();
function pricing() {

  /* Set values of the selector */
  var adultVal = Number(document.getElementById("adultNum").value);
  var youthVal = Number(document.getElementById("youthNum").value);
  var addVal = adultVal + youthVal;

  /* Set price of seating levels */
  var P1 = 1119.00;
  var P2 = 864.00;
  var P3 = 635.00;
  var P4 = 492.00;
  var P5 = 388.50;
  var P6 = 352.00;
  var FF = 345.00;
  var P7 = 254.50;
  var youthPrice = 165.00;

  /* Convert 1000s to a comma */
  function comm(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  /* Full Price Chart */
  document.getElementById("P1-full").innerHTML = "$"+comm((addVal*P1).toFixed(2));
  document.getElementById("P2-full").innerHTML = "$"+comm((addVal*P2).toFixed(2));
  document.getElementById("P3-full").innerHTML = "$"+comm((addVal*P3).toFixed(2));
  document.getElementById("P4-full").innerHTML = "$"+comm((addVal*P4).toFixed(2));
  document.getElementById("P5-full").innerHTML = "<strike>$"+comm((addVal*P5).toFixed(2))+"</strike> <span style='color: red;'>$"+comm((adultVal*P5+youthVal*youthPrice).toFixed(2))+"</span>";
  document.getElementById("P6-full").innerHTML = "$"+comm((addVal*P6).toFixed(2));
  document.getElementById("P7-full").innerHTML = "<strike>$"+comm((addVal*P7).toFixed(2))+"</strike> <span style='color: red;'>$"+comm((adultVal*P7+youthVal*youthPrice).toFixed(2))+"</span>";
  document.getElementById("FF-full").innerHTML = "$"+comm((addVal*FF).toFixed(2));

  /* Per Month Price Chart */
  document.getElementById("P1-month").innerHTML = "$"+comm(((addVal*P1)/12).toFixed(2));
  document.getElementById("P2-month").innerHTML = "$"+comm(((addVal*P2)/12).toFixed(2));
  document.getElementById("P3-month").innerHTML = "$"+comm(((addVal*P3)/12).toFixed(2));
  document.getElementById("P4-month").innerHTML = "$"+comm(((addVal*P4)/12).toFixed(2));
  document.getElementById("P5-month").innerHTML = "<strike>$"+comm(((addVal*P5)/12).toFixed(2))+"</strike> <span style='color: red'>$"+comm((((adultVal*P5+youthVal*youthPrice)/12).toFixed(2)))+"</span>";
  document.getElementById("P6-month").innerHTML = "$"+comm(((addVal*P6)/12).toFixed(2));
  document.getElementById("P7-month").innerHTML = "<strike>$"+comm(((addVal*P7)/12).toFixed(2))+"</strike> <span style='color: red'>$"+comm((((adultVal*P7+youthVal*youthPrice)/12).toFixed(2)))+"</span>";
  document.getElementById("FF-month").innerHTML = "$"+comm(((addVal*FF)/12).toFixed(2));
};
