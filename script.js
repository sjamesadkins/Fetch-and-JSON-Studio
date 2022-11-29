window.addEventListener("load", function () {
    
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(data) {
            console.log(data)

            data.sort(function(a, b) {
                return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
            })

            for (let i = 0; i < data.length; i++) {
               document.getElementById("container").innerHTML += `
               <div class = "astronaut">
                    <div class = "bio">
                        <h3>Name: ${data[i].firstName} ${data[i].lastName}</h3>
                        <ul>
                            <li>Hours in Space: ${data[i].hoursInSpace}</li>
                            <li style="${data[i].active ? "" : "color:red"}">Currently Active: ${data[i].active}</li>
                            <li>Skills: ${data[i].skills.join(" &#128640 ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${data[i].picture}>
                </div>`
            }


        });
    });
});