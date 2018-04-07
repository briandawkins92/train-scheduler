/* BEGIN JAVASCRIPT*/
$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyCM5WiB8qnyPpqF-Tlfoz0SHO4kp7olbhw",
    authDomain: "train-schedule-bkd.firebaseapp.com",
    databaseURL: "https://train-schedule-bkd.firebaseio.com",
    projectId: "train-schedule-bkd",
    storageBucket: "train-schedule-bkd.appspot.com",
    messagingSenderId: "227969918749"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var trainName = "";
  var destination = "";
  var frequency = "";
  var nextArrival = "";
  var trainTime = "";
  var minutesAway = "";

  $(".btn-primary").on("click", function () {
    event.preventDefault();
    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();
    trainTime = $("#trainTime").val().trim();
    nextArrival = trainTime
    minutesAway = frequency;


    database.ref().push({
      trainName: trainName,
      destination: destination,
      frequency: frequency,
      nextArrival,
      trainTime: trainTime,
      minutesAway: frequency
    }, function (errorObject) {
      console.log("brian made a mistake");

    });

// var scheduleInfo = [trainName, destination, frequency, nextArrival, minutesAway];

  database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().frequency);
    console.log(childSnapshot.val().nextArrival);
    console.log(childSnapshot.val().trainTime);

  $(".table").append("<tbody><td scope='col'>" + childSnapshot.val().trainName +
"</td><td scope='col'>" + childSnapshot.val().destination + 
"</td><td scope='col'>" + childSnapshot.val().frequency + 
"</td><td scope='col'>" + childSnapshot.val().nextArrival +
"</td><td scope='col>" + childSnapshot.val().minutesAway + "</td></tbody>");



  
    }, function (errorObject){
      console.log("errors handled:" + errorObject.code);
    });

  })
})
/* END JAVASCRIPT*/


  