/* Populate 'call-year' with this year and next year's numbers */
var minYear = new Date().getFullYear(),
    maxYear = minYear + 1,
    selectYear = document.getElementById('call-year-2');

for (var iYear = minYear; iYear<=maxYear; iYear++){
    var optYear = document.createElement('option');
    optYear.value = iYear;
    optYear.innerHTML = iYear;
    selectYear.appendChild(optYear);
}

function generateMonths () {
    var checkYear = new Date().getFullYear();
    var checkMonth = new Date().getMonth();
		var year = document.getElementById('call-year-2').value;
    var month = document.getElementById('call-month-2').value
  	var day = document.getElementById("call-day-2").value;
    var monthArr = new Array(7);
        monthArr[0] = "January";
        monthArr[1] = "February";
        monthArr[2] = "March";
        monthArr[3] = "April";
        monthArr[4] = "May";
        monthArr[5] = "June";
        monthArr[6] = "July"
        monthArr[7] = "August";
        monthArr[8] = "September";
        monthArr[9] = "October";
        monthArr[10] = "November";
        monthArr[11] = "December";
  if(year == "") {
  	 document.getElementById('call-month-2').disabled = true;
  } else {
  		document.getElementById('call-month-2').disabled = false;
      document.getElementById('call-month-2').innerHTML = "";

      if(year == checkYear) {
     		var minMonth = new Date().getMonth()+1;
      	var maxMonth = 12;
      	var selectMonth = document.getElementById('call-month-2');
        for (var iMonth = minMonth; iMonth<=maxMonth; iMonth++){
    			var optMonth = document.createElement('option');
    			optMonth.value = iMonth;
    			optMonth.innerHTML = monthArr[iMonth-1];
    			selectMonth.appendChild(optMonth);
      	}
        month = minMonth;
        runMonth();
    	} else {
      	document.getElementById('call-month-2').innerHTML = "";
        var minMonth = 1;
      	var maxMonth = 12;
      	var selectMonth = document.getElementById('call-month-2');
        for (var iMonth = minMonth; iMonth<=maxMonth; iMonth++){
    			var optMonth = document.createElement('option');
    			optMonth.value = iMonth;
    			optMonth.innerHTML = monthArr[iMonth-1];
    			selectMonth.appendChild(optMonth);
      	}
        runMonth();
      }
        var monthVal = document.getElementById('call-month-2').value;
  }

}

function runMonth() {
		var year = document.getElementById('call-year-2').value;
    var month = document.getElementById('call-month-2').value
    if(year == "" || month == "") {
       //disable your input or do whatever you want
       document.getElementById('call-day-2').disabled = true;
    } else {

        var days = new Date(year, month, 0).getDate();
        //enable bday in case it was previously disabled
        document.getElementById('call-day-2').disabled = false;

        //Clear the bday select element first
        document.getElementById('call-day-2').innerHTML = "";


        for (i = 1; i <= days; i++) {
            document.getElementById('call-day-2').innerHTML += "<option value='"+i+"'>"+i+"</option>";
        }
       var selectDay = document.getElementById("call-day-2").value;
       var selectFull = new Date(year,(month-1),selectDay);

    }
}



function runDay() {
		var year = document.getElementById('call-year-2').value;
    var month = document.getElementById('call-month-2').value
  	var day = document.getElementById("call-day-2").value;

  var selectFull = new Date(year,(month-1),day);

}
