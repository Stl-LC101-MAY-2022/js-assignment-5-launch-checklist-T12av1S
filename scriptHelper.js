// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
        target = document.getElementById('missionTarget');
        target.innerHTML = `
         <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `;
               

}

function validateInput(testInput) {
    if (testInput === '') {
        return "Empty";
    }
    else if (Number(testInput)) {
        return "Is a Number";
    }
    else if (isNaN(testInput)) {
        return "Not a Number";
    }
}
  


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   form.addEventListener("submit", function(event) {
        let pilotField = document.querySelector("input[name=pilotName]");
        let copilotField = document.querySelector("input[name=copilotName]");
        let fuelLevelField = document.querySelector("input[name=fuelLevel]");
        let cargoMassField = document.querySelector("input[name=cargoMass]");

        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");

        let list = document.getElementById('faultyItems');

        if ((validateInput(pilotField.value) === "Empty") || (validateInput(copilotField.value) === "Empty") || (validateInput(fuelLevelField.value) === "Empty") || (validateInput(cargoMassField.value) === "Empty")) {

            alert("All fields are required!");
            event.preventDefault();

        } else if ((validateInput(pilotField.value) === "Is a Number") || (validateInput(copilotField.value) === "Is a Number") || (validateInput(fuelLevelField.value) === "Not a Number") || (validateInput(cargoMassField.value) === "Not a Number")) {
        
            alert("Please enter valid information for each field!")
            event.preventDefault();

        } 

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (Number(fuelLevelField.value) < 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch"
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }

        if (Number(cargoMassField.value) > 10000) {
            list.style.visiblity = "visible";
            cargoStatus.innerHTML = "Too much mass for shuttle to take off";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }

        if (Number(fuelLevelField.value) >= 10000 && Number(cargoMassField.value <= 10000)) {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
        }


    });
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}


function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
