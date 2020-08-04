/* Global variables */
let numStories = "";
let color = "";
let material = "";
let lastNumStories = "";
let lastColor = "";
let lastMaterial = "";
let area = 0;
let numCars = 0;
let cost = 0;
let firstTime = true;

/* Add a border to an image when clicked */
const makeBorder = (id) => {
   let selected = document.getElementById(id);
   selected.style.border = "double 5px";
}

/* Clear any previous selection and select number of stories */
const chooseStory = numStoriesIn => {
   if (numStories != "") {
      singleStory.style.border = "";
      twoStory.style.border = "";
   }
   numStories = numStoriesIn;
   makeBorder(numStories);
   console.log(numStories);
}

/* Clear any previous selection and select the color */
const chooseColor = colorIn => {
   if (color != "") {
      blue.style.border = "";
      gray.style.border = "";
      green.style.border = "";
      red.style.border = "";
      yellow.style.border = "";
      cyan.style.border = "";
      white.style.border = "";
      black.style.border = "";
   }
   color = colorIn;
   makeBorder(color);
   console.log(color);
}

/* Clear any previous selection and the material */
const chooseMaterial = materialIn => {
   if (material != "") {
      vinyl.style.border = "";
      wood.style.border = "";
      stucco.style.border = "";
      brick.style.border = "";
      stone.style.border = "";
   }
   material = materialIn;
   makeBorder(material);
   console.log(material);
}

/* Logs the area from the text input */
const logArea = () => {
   let area = document.querySelector("#area").value;
   console.log(area);
}

/* Calculates the cost based on all the variables and shows results */
const calculateCost = () => {
   area = document.querySelector("#area").value;
   numCars = document.querySelector("input[name=numCars]:checked").value;

   let storyMultiplier = 0;

   if (numStories == "singleStory") {
      storyMultiplier = 175;
   } else if (numStories == "twoStory") {
      storyMultiplier = 135;
   }

   if (material == "vinyl") {
      cost = storyMultiplier * area + 15000 * numCars;
   } else if (material == "wood") {
      cost = (storyMultiplier + 10) * area + 15000 * numCars + 5000;
   } else if (material == "brick") {
      cost = (storyMultiplier + 10) * area + 15000 * numCars + 8000;
   } else if (material == "stucco") {
      cost = storyMultiplier * area + 15000 * numCars + 6000;
   } else if (material == "stone") {
      cost = storyMultiplier * area + 15000 * numCars + 16000;
   }

   if (firstTime == false) {
      console.log(lastNumStories);
      console.log(lastColor);
      console.log(lastMaterial);
      displayNoneLastResults();
   }

   showResults();
   setLastResults();

   if (firstTime == true) {
      firstTime = false;
   }

}

const showResults = () => {
   document.getElementById("resultsSection").style.display = "block";
   document.getElementById(numStories + "Result").style.display = "block";
   document.getElementById(color + "Result").style.display = "block";
   document.getElementById(material + "Result").style.display = "block";

   document.getElementById("areaResult").innerHTML = area;
   document.getElementById("numCarsResult").innerHTML = numCars;
   document.getElementById("costResult").innerHTML = "$" + cost;
}

const displayNoneLastResults = () => {
   document.getElementById(lastNumStories + "Result").style.display = "none";
   document.getElementById(lastColor + "Result").style.display = "none";
   document.getElementById(lastMaterial + "Result").style.display = "none";
}

const setLastResults = () => {
   lastNumStories = numStories;
   lastColor = color;
   lastMaterial = material;
}
