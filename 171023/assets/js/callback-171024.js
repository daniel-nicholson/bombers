/* Populate 'call-year' with this year and next year's numbers */
var minYear = new Date().getFullYear(),
  maxYear = minYear + 1,
  selectYear = document.getElementById("call-year");

for (var iYear = minYear; iYear <= maxYear; iYear++) {
  var optYear = document.createElement("option");
  optYear.value = iYear;
  optYear.innerHTML = iYear;
  selectYear.appendChild(optYear);
}

function generateMonths() {
  var checkYear = new Date().getFullYear();
  var checkMonth = new Date().getMonth();
  var year = document.getElementById("call-year").value;
  var month = document.getElementById("call-month").value;
  var day = document.getElementById("call-day").value;
  var monthArr = new Array(12);
  monthArr[0] = "January";
  monthArr[1] = "February";
  monthArr[2] = "March";
  monthArr[3] = "April";
  monthArr[4] = "May";
  monthArr[5] = "June";
  monthArr[6] = "July";
  monthArr[7] = "August";
  monthArr[8] = "September";
  monthArr[9] = "October";
  monthArr[10] = "November";
  monthArr[11] = "December";

  /* Set global variables */
  var optMonth = document.createElement("option");
  var selectMonth = document.getElementById("call-month");
  var optDay = document.createElement("option");
  var selectDay = document.getElementById("call-day");
  var optTime = document.createElement("option");
  var selectTime = document.getElementById("call-time");

  /* If year is not set, disable Month and Day options */
  if (year == "") {
    /* Disable month selector */
    document.getElementById("call-month").disabled = true;
    document.getElementById("call-month").innerHTML = "";
    optMonth.value = "";
    optMonth.innerHTML = "Select Month";
    selectMonth.appendChild(optMonth);

    /* Disable day selector */
    document.getElementById("call-day").disabled = true;
    document.getElementById("call-day").innerHTML = "";
    optDay.value = "";
    optDay.innerHTML = "Select Day";
    selectDay.appendChild(optDay);

    document.getElementById("call-time").disabled = true;
    document.getElementById("call-time").innerHTML = "";
    optTime.value = "";
    optTime.innerHTML = "Select Time";
    selectTime.appendChild(optTime);
  } else {
    /* Otherwise, populate month selector based off of year selected */
    /* Turn off disabled feature and clear the list everytime it runs */
    document.getElementById("call-month").disabled = false;
    document.getElementById("call-month").innerHTML = "";

    /* If the year selected is this year, then populate remaining months */
    if (year == checkYear) {
      /* Get today's month */
      var minMonth = new Date().getMonth() + 1;
      var maxMonth = 12;
      var selectMonth = document.getElementById("call-month");
      /* Populate the options for remaining months */
      for (var iMonth = minMonth; iMonth <= maxMonth; iMonth++) {
        var optMonth = document.createElement("option");
        optMonth.value = iMonth;
        optMonth.innerHTML = monthArr[iMonth - 1];
        selectMonth.appendChild(optMonth);
      }
      runDays();
    } else {
      /* If it's any other year other than this year, fill out the full year */
      document.getElementById("call-month").innerHTML = "";
      var minMonth = 1;
      var maxMonth = 12;
      var selectMonth = document.getElementById("call-month");
      for (var iMonth = minMonth; iMonth <= maxMonth; iMonth++) {
        var optMonth = document.createElement("option");
        optMonth.value = iMonth;
        optMonth.innerHTML = monthArr[iMonth - 1];
        selectMonth.appendChild(optMonth);
      }
      runDays();
    }
  }
}

function runDays() {
  var checkYear = new Date().getFullYear();
  var checkMonth = new Date().getMonth() + 1;
  var checkDay = new Date().getDate();
  var year = document.getElementById("call-year").value;
  var month = document.getElementById("call-month").value;
  var day = document.getElementById("call-day").value;

  if (year === "" || month === "") {
    //disable your input or do whatever you want
    document.getElementById("call-day").disabled = true;
    document.getElementById("call-day").innerHTML = "";
  } else {
    if (year == checkYear && month == checkMonth) {
      var days = new Date(year, month, 0).getDate();
      var remainDays = new Date(year, month, checkDay).getDate() + 1;
      document.getElementById("call-day").disabled = false;
      document.getElementById("call-day").innerHTML = "";

      for (i = remainDays; i <= days; i++) {
        document.getElementById("call-day").innerHTML +=
          "<option value='" + i + "'>" + i + "</option>";
      }
      runTime();
    } else {
      var daysFull = new Date(year, month, 0).getDate();
      document.getElementById("call-day").disabled = false;
      document.getElementById("call-day").innerHTML = "";

      for (i = 1; i <= daysFull; i++) {
        document.getElementById("call-day").innerHTML +=
          "<option value='" + i + "'>" + i + "</option>";
      }
      runTime();
    }
  }
}

function runTime() {
  var checkYear = new Date().getFullYear();
  var checkMonth = new Date().getMonth() + 1;
  var checkDay = new Date().getDate();
  var year = document.getElementById("call-year").value;
  var month = document.getElementById("call-month").value;
  var day = document.getElementById("call-day").value;
  var getDOW = new Date(year, month - 1, day).getDay();
  var weekdayArr = new Array(7);
  weekdayArr[0] = "Sunday";
  weekdayArr[1] = "Monday";
  weekdayArr[2] = "Tuesday";
  weekdayArr[3] = "Wednesday";
  weekdayArr[4] = "Thursday";
  weekdayArr[5] = "Friday";
  weekdayArr[6] = "Saturday";
  var writeDay = weekdayArr[getDOW];
  var timeVal = new Array(9);
  timeVal[0] = "9a-10a";
  timeVal[1] = "10a-11a";
  timeVal[2] = "11a-12p";
  timeVal[3] = "12p-1p";
  timeVal[4] = "1p-2p";
  timeVal[5] = "2p-3p";
  timeVal[6] = "3p-4p";
  timeVal[7] = "4p-5p";
  timeVal[8] = "5p-6p";
  var timeOpt = new Array(9);
  timeOpt[0] = "9:00am -10:00 am";
  timeOpt[1] = "10:00am - 11:00am";
  timeOpt[2] = "11:00am - 12:00pm";
  timeOpt[3] = "12:00pm - 1:00pm";
  timeOpt[4] = "1:00pm - 2:00pm";
  timeOpt[5] = "2:00pm - 3:00pm";
  timeOpt[6] = "3:00pm - 4:00pm";
  timeOpt[7] = "4:00pm - 5:00pm";
  timeOpt[8] = "5:00pm - 6:00pm";

  if (getDOW == 0) {
    document.getElementById("call-time").disabled = false;
    document.getElementById("call-time").innerHTML = "";
    for (i = 2; i <= 6; i++) {
      document.getElementById("call-time").innerHTML +=
        "<option value='" + timeVal[i] + "'>" + timeOpt[i] + "</option>";
    }
    updateTime();
  } else if (getDOW == 6) {
    document.getElementById("call-time").disabled = false;
    document.getElementById("call-time").innerHTML = "";
    for (i = 1; i <= 7; i++) {
      document.getElementById("call-time").innerHTML +=
        "<option value='" + timeVal[i] + "'>" + timeOpt[i] + "</option>";
    }
    updateTime();
  } else {
    document.getElementById("call-time").disabled = false;
    document.getElementById("call-time").innerHTML = "";
    for (i = 0; i <= 8; i++) {
      document.getElementById("call-time").innerHTML +=
        "<option value='" + timeVal[i] + "'>" + timeOpt[i] + "</option>";
    }
    updateTime();
  }
}

function updateTime() {
  var year = document.getElementById("call-year").value;
  var month = document.getElementById("call-month").value;
  var day = document.getElementById("call-day").value;
  var getDOW = new Date(year, month - 1, day).getDay();
  var weekdayArr = new Array(7);
  weekdayArr[0] = "Sunday";
  weekdayArr[1] = "Monday";
  weekdayArr[2] = "Tuesday";
  weekdayArr[3] = "Wednesday";
  weekdayArr[4] = "Thursday";
  weekdayArr[5] = "Friday";
  weekdayArr[6] = "Saturday";
  var monthArr = new Array(12);
  monthArr[0] = "January";
  monthArr[1] = "February";
  monthArr[2] = "March";
  monthArr[3] = "April";
  monthArr[4] = "May";
  monthArr[5] = "June";
  monthArr[6] = "July";
  monthArr[7] = "August";
  monthArr[8] = "September";
  monthArr[9] = "October";
  monthArr[10] = "November";
  monthArr[11] = "December";

  var writeDay = weekdayArr[getDOW];
  var timeValSelect = document.getElementById("call-time").value;
  var msgVal = (document.getElementById("call-msg").value =
    writeDay +
    ", " +
    monthArr[month - 1] +
    " " +
    day +
    ", " +
    year +
    " between " +
    timeValSelect);
  document.getElementById("call-msg").innerHTML = msgVal;
}
