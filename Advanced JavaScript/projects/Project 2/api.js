// Global variables
let lastTempImg;
let lastWindImg;
let firstTime = true;

// Initialize the event listener
const init = () => {
  let getWeatherButton = document.querySelector("#getweather");
  getWeatherButton.addEventListener("click", listen);

}

// Start after clicking weather button
const listen = () => {

  let zipcode = document.querySelector("#zipcode").value;
  console.log(zipcode);

  getData(zipcode);

}

// Get data from the geonames API by requesting twice
const getData = zipcode => {

  // Define variables in first request
  let xhr = new XMLHttpRequest();
  let url = "http://api.geonames.org/postalCodeSearchJSON" +
      "?countryCode=US&username=kleader&postalcode=" + zipcode;
  let json;
  let locationInfo;
  let latitude;
  let longitude;
  let place;

  // Execute XML HTTP Request and get coordinate data
  xhr.open("get", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {

      json = JSON.parse(xhr.responseText);

      console.log(json);
      console.log(json.postalCodes[0]);

      locationInfo = json.postalCodes[0];

      latitude = locationInfo.lat;
      longitude = locationInfo.lng;

      console.log("coords = [" + latitude + ", " + longitude + "]");

      place = locationInfo.placeName;

      console.log("place = " + place);

      getWeather(latitude, longitude, place);

    }
  }
  xhr.send(null);

}

// Send the final XML request and display data to the user
const getWeather = (lat, lng, place) => {

  // Define variables in second request
  let xhr = new XMLHttpRequest();
  let url;
  let json;
  let weatherInfo;
  let tempCelsius;
  let tempFahrenheit;
  let windDirectionDegrees;
  let windDirectionCompass;
  let windKnots;
  let windMph;

  // Use the coordinate data to do another request for weather data
  url = "http://api.geonames.org/findNearByWeatherJSON" +
      "?username=kleader&lat=" + lat + "&lng=" + lng;

  xhr.open("get", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {

      json = JSON.parse(xhr.responseText);
      console.log(json);
      console.log(json.weatherObservation);

      weatherInfo = json.weatherObservation;

      tempCelsius = weatherInfo.temperature;
      console.log("tempCelsius = " + tempCelsius);

      tempFahrenheit = Math.round((tempCelsius * (9/5) + 32) * 10) / 10;
      console.log("tempFahrenheit = " + tempFahrenheit);

      windDirectionDegrees = weatherInfo.windDirection;
      console.log("windDirectionDegrees = " + windDirectionDegrees);

      windDirectionCompass = getCompassDirection(windDirectionDegrees);
      console.log("windDirectionCompass = " + windDirectionCompass);

      windKnots = weatherInfo.windSpeed;
      console.log("windKnots = " + windKnots);

      windMph = Math.round((windKnots * 1.15078) * 10) / 10;
      console.log("windMph = " + windMph);

      // Set variables for reset logic and display results
      if (!firstTime) {
        displayNoneLastImages();
      }
      showResults(place, tempFahrenheit, windDirectionCompass, windMph);
      if (firstTime == true) {
         firstTime = false;
      }

    }
  }
  xhr.send(null);


}

// Give cardinal or ordinal direction via degrees
const getCompassDirection = degrees => {
  if (degrees > 337.5 || degrees < 22.5) {
    return "N";
  } else if (22.5 < degrees && degrees < 67.5) {
    return "NE";
  } else if (67.5 < degrees && degrees < 112.5) {
    return "E";
  } else if (112.5 < degrees && degrees < 157.5) {
    return "SE";
  } else if (157.5 < degrees && degrees < 202.5) {
    return "S";
  } else if (202.5 < degrees && degrees < 247.5) {
    return "SW";
  } else if (247.5 < degrees && degrees < 292.5) {
    return "W";
  } else if (292.5 < degrees && degrees < 337.5) {
    return "NW";
  }
}

// Display the results to the user and set the last result variables
const showResults = (place, temperature, windDirection, windSpeed) => {

  // Show the results section
  document.getElementById("resultsSection").style.display = "block";

  // Display place results
  document.getElementById("placeResult").innerHTML = place;

  // Display temperature results
  document.getElementById("temperatureResult").innerHTML =
      temperature + "&#176; Farenheit";
  if (temperature <= 34) {
    document.getElementById("coldResult").style.display = "block";
    lastTempImg = "cold";
  } else if (temperature >= 83) {
    document.getElementById("hotResult").style.display = "block";
    lastTempImg = "hot";
  } else {
    lastTempImg = "none";
  }

  // Display wind results
  document.getElementById("windResult").innerHTML =
    windSpeed + " mph " + windDirection + " Wind";
  if (windSpeed > 15) {
    document.getElementById("highWindResult").style.display = "block";
    lastWindImg = "highWind";
  } else {
    lastWindImg = "none";
  }
}

// Sets the last images to not display
const displayNoneLastImages = () => {
  if (lastTempImg != "none") {
    document.getElementById(lastTempImg + "Result").style.display = "none";
  }
  if (lastWindImg != "none") {
    document.getElementById(lastWindImg + "Result").style.display = "none";
  }
}

window.onload = init;
