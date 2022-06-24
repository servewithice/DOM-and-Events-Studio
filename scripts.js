// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const landingButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const img = document.getElementById("rocket");
    const height = document.getElementById("spaceShuttleHeight");
    img.style.left = "325px";
    img.style.top = "250px";


    takeOffButton.addEventListener("click", function () {
        result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            height.innerHTML = 10000;
            img.style.top = `${img.offsetTop - 10}px`;
        }
    });

    landingButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        height.innerHTML = 0;
        img.style.top = "250px";
    });

    abortButton.addEventListener("click", function () {
        result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {
            flightStatus.innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            height.innerHTML = 0;
            img.style.top = "250px";
        }
    });

    upButton.addEventListener("click", function (event) {
        if (Number(height.innerHTML) <= 240000) {
            img.style.top = `${img.offsetTop - 10}px`;
            height.innerHTML = Number(height.innerHTML) + 10000;
        } else {
            event.preventDefault();
        }
    });

    downButton.addEventListener("click", function (event) {
        if (Number(height.innerHTML) > 0) {
            img.style.top = `${img.offsetTop + 10}px`;
            height.innerHTML = Number(height.innerHTML) - 10000;
        } else {
            event.preventDefault();
        }

    });

    rightButton.addEventListener("click", function (event) {
        if (parseInt(img.style.left) <= 695) {
            img.style.left = `${img.offsetLeft + 10}px`;
        } else {
            event.preventDefault();
        }
    });

    leftButton.addEventListener("click", function (event) {
        if (parseInt(img.style.left) >= 0) {
            img.style.left = `${img.offsetLeft - 10}px`;
        } else {
            event.preventDefault();
        }
    });
}

window.addEventListener("load", init);