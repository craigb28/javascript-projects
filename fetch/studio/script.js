//TODO: Add Your Code Below
window.addEventListener("load", function () {
  let jsonResponse = fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  );
  jsonResponse.then(function (response) {
    response.json().then(function (json) {
      let container = document.getElementById("container");
      json.sort((a, b) => a.hoursInSpace - b.hoursInSpace);
      for (i = 0; i < json.length; i++) {
        let color = "";
        if (json[i].active){
            color = "green";
        } else if (json[i].active === false){
            color = "red"
        }
        container.innerHTML +=
          `
                <div class="astronaut">
                  <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3><br>
                  <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li style="color: ${color};">Active: ${json[i].active}</li>
                    <li>Skills ${json[i].skills.join(", ")}</li>
                  </ul>
                  </div>
                <img class="avatar" src=${json[i].picture}>
              </div>`;
}
      
    });
  });
});
