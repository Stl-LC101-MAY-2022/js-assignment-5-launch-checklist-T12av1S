// Write your JavaScript code here!

const { myFetch, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let pilot = document.querySelector('input[name=pilotName]');
    let copilot = document.querySelector('input[name=copilotName]');
    let fuel = document.querySelector('input[name=fuelLevel]');
    let cargo = document.querySelector('input[name=cargoMass]');
    let list = document.getElementById('faultyItems');
    let form = document.querySelector('form');

    list.style.visibility = "hidden";

    form.addEventListener('submit', function (event) {
        formSubmission(this.document, list, pilot, copilot, fuel, cargo);
        //cant seem to get this to function to work. not sure what I am missing.
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       console.log(planet);
       addDestinationInfo(this.document, planet.name, planet.diameter, planet.star, planet.distance, planet.moon, planet.image);
   })
   
});