// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function(){
   const fetched = fetch("https://handlers.education.launchcode.org/static/planets.json");
   let form = document.querySelector("form");
   let mission = document.getElementById("missionTarget");

   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName");
      let copilotName = document.querySelector("input[name=copilotName");
      let fuelMass = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      let pilotStat = document.getElementById("pilotStatus");
      let copilotStat = document.getElementById("copilotStatus");
      let fuelStat = document.getElementById("fuelStatus");
      let launchStat = document.getElementById("launchStatus");
      let cargoStat = document.getElementById("cargoStatus");
      let onSwitch = document.getElementById("faultyItems");
      let arr = [pilotName, copilotName, fuelMass, cargoMass];
      let combo1 = [arr[0].value, arr[1].value];      

      for(let i=0; i<arr.length; i++){

         if(arr[i].value === ""){
            alert("All fields required!!");
            break;
         } else { 

            if(typeof arr[0].value !== "string" || typeof arr[1].value !== "string"){
               alert("These values must be letters!!");
               break;
            }
   
            if(isNaN(Number(arr[2].value))){
               alert("These values must be a numbers!!");
               break;
            }
            
            if(isNaN(Number(arr[3].value))){
               alert("These values must be a numbers!!");
               break;
            }
         }
      }
      
      if(combo1.forEach(ele => {return ele}) !== ""){
         onSwitch.style.visibility = "visible";
         pilotStat.innerText = pilotName.value;
         copilotStat.innerText = copilotName.value;

         if(fuelMass.value < 10000){
            fuelStat.innerText = "Not enough fuel";
            launchStat.innerText = "Shuttle not ready for Launch";
            launchStat.style.color = "red";
         }

         if(cargoMass.value > 10000){
            cargoStat.innerText = "Shuttle too heavy";
            launchStat.innerText = "Shuttle not ready for Launch";
            launchStat.style.color = "red";
         }

         if((fuelMass.value >= 10000) && (cargoMass.value <= 10000)){
            launchStat.innerText = "Shuttle ready to launch";
            launchStat.style.color = "green";
         }
      }
      
      

   })

   fetched.then(function(response){
      const promise = response.json();
      let index;
      promise.then(function(arr){
         for(let i=0; i<arr.length; i++){
            index = Math.floor(Math.random()*arr.length);
            mission.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${arr[index].name}</li>
                  <li>Diameter: ${arr[index].diameter}</li>
                  <li>Star: ${arr[index].star}</li>
                  <li>Distance from Earth: ${arr[index].distance}</li>
                  <li>Number of Moons: ${arr[index].moons}</li>
               </ol>
               <img src="${arr[index].image}">
            `;
         }
      })
   })
})