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

$(document).ready(function() {

    $("#submit").on("click", function(event) {
    event.preventDefault();
    console.log(this);

    var employeeName = $("#name-input").val();
    var employeeDate = $("#date-input").val();
    var employeeRole = $("#role-input").val();
    var employeeRate = $("#rate-input").val();

    var newEmployee = {
        name: employeeName,
        date: employeeDate,
        role: employeeRole,
        rate: employeeRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    }

    console.log(employeeDate);
    console.log(employeeRate);

    database.ref().push(newEmployee);

     $("#name-input").val("");
     $("#date-input").val("");
     $("#role-input").val("");
     $("#rate-input").val("");
})

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var sv = childSnapshot.val();
    
    var newName = sv.name;
    var newRole = sv.role;
    var newRate = sv.rate;

    var newDate = sv.date;
    
    var inputYear = parseInt(moment(newDate, "YYYY-MM-DD").format("YYYY"));
    var inputMonth = parseInt(moment(newDate, "YYYY-MM-DD").format("MM"));

    var currentYear = parseInt(moment().format('YYYY'));
    var currentMonth = parseInt(moment().format("MM"));

    var months = (currentYear - inputYear)*12 + (currentMonth - inputMonth);

    var billed = months*(parseInt(newRate));

    var newRow = $("<tr>");
    newRow.append("<td>" + newName + "</td>");
    newRow.append("<td>" + newRole + "</td>");
    newRow.append("<td>" + newDate + "</td>");
    newRow.append("<td>" + months + "</td>");
    newRow.append("<td>" + newRate + "</td>");
    newRow.append("<td>" + billed + "</td>");
    console.log(newRow);


    $("tbody").append(newRow);
    console.log($("#employees"));
   
})
})