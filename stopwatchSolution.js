// STOPWATCH ACTIVITY (SOLUTION)
// =============================
var config = {
  apiKey: "AIzaSyD7YMGteIHGSfHQsZ0NYD74Ygh6PAYHma0",
  authDomain: "wckc-test.firebaseapp.com",
  databaseURL: "https://wckc-test.firebaseio.com",
  projectId: "wckc-test",
  storageBucket: "wckc-test.appspot.com",
  messagingSenderId: "412806298427"
};
firebase.initializeApp(config);
//start of database 
var dataRef = firebase.database();

    // Initial Values
    var firstName = "";
    var lastName = "";
    var age = 0;
    // var meetName = "";
    var lift = "";
    var bellWeight = "";

    // Capture Button Click
    $("#submit").on("click", function(event) {
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      firstName = $("#firstName-input").val().trim();
      lastName = $("#lastName-input").val().trim();
      age = $("#age-input").val().trim();
      // meetName = $("event-input").val().trim();
      lift = $("#lift-input").val().trim();
      bellWeight = $("#bellWeight-input").val().trim();
      console.log("this is the firstName"+firstName);


      // Code for the push
      dataRef.ref().push({

        firstName: firstName,
        lastName: lastName,
        age: age,
        // meetName: meetName,
        lift: lift,
        bellWeight: bellWeight
      });
    });


// This code will run as soon as the page loads
window.onload = function() {
  $("#lap").on("click", stopwatch.recordLap);
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};
///on key events
window.addEventListener('keyup', (event) => {
  if (event.keyCode === 32) stopwatch.start();
  if (event.keyCode === 13) stopwatch.stop();
  if (event.keyCode === 82) stopwatch.reset();
  if (event.keyCode === 38) stopwatch.lap++;
  if (event.keyCode === 40) stopwatch.lap--;
  $("#laps").html("<h1>" + stopwatch.lap +  "</h1>");
  console.log(stopwatch.lap)


});

$('html, body').css({
  overflow: 'hidden',
  height: '100%'
});
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 0,
  lap: 0,

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 0;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");

    // DONE: Empty the "laps" div.
    $("#laps").text("");
  },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  recordLap: function() {

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);

   

    // DONE: Add the current lap and time to the "laps" div.
    $("#laps").html("<h1>" + stopwatch.lap +  "</h1>");

    // DONE: Increment lap by 1. Remember, we can't use "this" here.
     stopwatch.lap++;
  
    
},
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};




// Solution if you choose not to put it in an object

// var time = 0;
// var lap = 1;
// function reset() {

//   time = 0;
//   lap = 1;

//   $("#display").text("00:00");
//   $("#laps").text("");

// }

// function start() {
//   intervalId = setInterval(count, 1000);
// }

// function stop() {

//   console.log("stopping");
//   clearInterval(intervalId);

// }

// function recordLap() {

//   var converted = timeConverter(time);
//   $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
//   lap++;

// }

// function count() {

//   time++;
//   var converted = timeConverter(time);
//   $("#display").text(converted);

// }

// function timeConverter(t) {

//   var minutes = Math.floor(t / 60);
//   var seconds = t - (minutes * 60);

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   if (minutes === 0) {
//     minutes = "00";
//   }
//   else if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   return minutes + ":" + seconds;
// }
