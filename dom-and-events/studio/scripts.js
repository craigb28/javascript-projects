// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
  let altitude = 0;
  let rocketPositionX = 0;
  let rocketPositionY = 0;

  // buttons
  const takeoffButton = document.getElementById("takeoff");
  const landButton = document.getElementById("landing");
  const abortButton = document.getElementById("missionAbort");

  // AREAS
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

  // Rocket Image

  const rocket = document.getElementById("rocket");

  takeoffButton.addEventListener("click", function () {
    let shouldTakeOff = confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (shouldTakeOff) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      altitude = 10000;
      spaceShuttleHeight.innerHTML = altitude;
      rocketPositionY += 10;
      rocket.style.marginBottom = rocketPositionY + "px";
    }
  });

  landButton.addEventListener("click", function () {
    alert("This shuttle is landing. Landing gear engaged.");
    landButton.innerHTML = "The shuttle has landed.";
    resetRocket();
  });

  abortButton.addEventListener("click", function () {
    let shouldAbort = confirm("Confirm that you want to abort the mission.");
    if (shouldAbort) {
      flightStatus.innerHTML = "Mission aborted.";
      resetRocket();
    }
  });

  // Use event delegation for directional buttons

  document.addEventListener("click", function (event) {

let backgroundWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"));
    
    if (event.target.id === "left" && rocketPositionX > -(backgroundWidth/2 - 35)) {
      rocketPositionX = rocketPositionX - 10;
      rocket.style.marginLeft = rocketPositionX + "px";
    }
    if (event.target.id === "right" && rocketPositionX < (backgroundWidth/2 - 45)) {
      rocketPositionX = rocketPositionX + 10;
      rocket.style.marginLeft = rocketPositionX + "px";
    }
    if (event.target.id === "up" && altitude < 250000) {
      rocketPositionY = rocketPositionY + 10;
      rocket.style.marginBottom = rocketPositionY + "px";
      altitude += 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
    if (event.target.id === "down" && altitude > 0) {
      rocketPositionY = rocketPositionY - 10;
      rocket.style.marginBottom = rocketPositionY + "px";
      altitude -= 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
  });

function resetRocket (){
    shuttleBackground.style.backgroundColor = "green";
    altitude = 0;
    spaceShuttleHeight.innerHTML = altitude;
    rocketPositionX=0;
    rocketPositionY=0;
    rocket.style.marginLeft = rocketPositionX + "px";
    rocket.style.marginBottom = rocketPositionY + "px";
}


});
