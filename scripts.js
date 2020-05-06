// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoff = null;
let landing = null;
let missionAbort = null;

function init() {
  takeoff = document.getElementById("takeoff");
  takeoff.addEventListener("click", function () {
    confirm("Confirm that the shuttle is ready for takeoff.");
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    document.getElementById("shuttleBackground").style.backgroundColor = "blue";
    document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
  });

  landing = document.getElementById("landing");
  landing.addEventListener("click", function () {
    alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML =
      "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor =
      "green";
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
  });

  missionAbort = document.getElementById("missionAbort");
  missionAbort.addEventListener("click", function () {
    confirm("Confirm that you want to abort the mission.");

    if (!missionAbort.ValidityState) {
      document.getElementById("flightStatus").innerHTML = "Mission aborted.";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "green";
      document.getElementById("spaceShuttleHeight").innerHTML = "0";
    }
  });
  console.log(document.querySelectorAll("button"));
  let positionTop = document.getElementById("rocket").offsetTop;
  let newPositionTop = 0;
  document.querySelectorAll("button")[0].addEventListener("click", function () {
    newPositionTop = newPositionTop + positionTop - 10;
    console.log(newPositionTop);
    document.getElementById("rocket").style.top = newPositionTop;
    let newSpaceShuttleHeight = document.getElementById("spaceShuttleHeight")
      .innerHTML;
    newSpaceShuttleHeight = Number(newSpaceShuttleHeight) + 10000;
    document.getElementById(
      "spaceShuttleHeight"
    ).innerHTML = newSpaceShuttleHeight;
  });
  let positionDown = document.getElementById("rocket").offsetTop;
  let newPositionDown = 0;
  document.querySelectorAll("button")[1].addEventListener("click", function () {
    newPositionDown = newPositionDown + positionDown + 10;
    console.log(newPositionDown);
    document.getElementById("rocket").style.top = newPositionDown;
    let newSpaceShuttleHeight = document.getElementById("spaceShuttleHeight")
      .innerHTML;
    newSpaceShuttleHeight = Number(newSpaceShuttleHeight) - 10000;
    document.getElementById(
      "spaceShuttleHeight"
    ).innerHTML = newSpaceShuttleHeight;
  });

  let newPositionRight = document.getElementById("rocket").offsetLeft;
  document.querySelectorAll("button")[2].addEventListener("click", function () {
    newPositionRight = newPositionRight + 10;
    console.log(newPositionRight);
    document.getElementById("rocket").style.top = newPositionRight;
  });

  let newPositionLeft = document.getElementById("rocket").offsetLeft;
  document.querySelectorAll("button")[3].addEventListener("click", function () {
    newPositionLeft = newPositionLeft - 10;
    console.log(newPositionLeft);
    document.getElementById("rocket").style.top = newPositionLeft;
  });
}

window.onload = init;
