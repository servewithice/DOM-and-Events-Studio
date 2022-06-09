// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");

    takeOffButton.addEventListener("click", function() {
        result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        }


    });



}

window.addEventListener("load", init);