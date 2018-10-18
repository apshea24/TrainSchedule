var config = {
    apiKey: "AIzaSyBGwkcpjQMtlODtnTnIs-_xC6RydoGsjmI",
    authDomain: "trainschedule-5a704.firebaseapp.com",
    databaseURL: "https://trainschedule-5a704.firebaseio.com",
    projectId: "trainschedule-5a704",
    storageBucket: "",
    messagingSenderId: "249223573907"
  };

firebase.initializeApp(config);

var database = firebase.database();

// var currentTime = moment(Date, "kk");

// console.log(currentTime);


$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var firstTrain = $("#first-train-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        first: firstTrain,
        frequency: trainFrequency
    }

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

    alert("You Added A Train Boi!!!!");

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");

}); //End of Submit OnClick


database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().first;
    var trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrain);
    console.log(trainFrequency);

})