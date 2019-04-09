//get 4 values from html input

//store them in database

//create 6 values for table

//append to table




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyArqdULSd978nx0GOwe4Vg63u-hcgYQrtE",
    authDomain: "employeedata-83bf3.firebaseapp.com",
    databaseURL: "https://employeedata-83bf3.firebaseio.com",
    projectId: "employeedata-83bf3",
    storageBucket: "",
    messagingSenderId: "343315248819"
  };
  firebase.initializeApp(config);

var database = firebase.database();

function addRow() {

}

$("#submit").on("click", function(event) {
    event.preventDefault();

    var employeeName = $("#name-input").val();
    var employeeDate = $("#date-input").val();
    var employeeRole = $("#role-input").val();
    var employeeRate = $("#rate-input").val();

    $("#employees").append("<tr><td>"+ employeeName + "</td><td>" + employeeRate + "</td><td>" + employeeDate + "</td><td>" + employeeRole + "</td><td>" + "months worked" + "</td><td>" + "months billed" + "</td></tr>")

    console.log(employeeDate);
    console.log(employeeRate);

    // database.ref("/names").push(employeeName);
    // database.ref("/dates").push(employeeDate);
    // database.ref("/role").push(employeeRole);
    // database.ref("/rate").push(employeeRate);
})