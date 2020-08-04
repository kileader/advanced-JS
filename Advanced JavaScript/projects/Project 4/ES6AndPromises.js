// Initialize event listeners and html for gifs
const init = () => {
  // Event listener for search button click
  document.querySelector("#search").addEventListener("click", () => {
    getGifs();
  });

  // Event listener for enter keypress in text field
  document.querySelector("#searchTerm").addEventListener("keyup", event => {
    if (event.keyCode === 13) {
      document.getElementById("search").click();
    }
  });

  // Event listener for clear button click
  document.querySelector("#clear").addEventListener("click", () => {
    clearGifs();
  });
}

const getGifs = async () => {
  console.log("getting gifs");

  const apiKey = "IgCw3APBmopy66hmiTNv78H8LPNbomd0";
  const searchTerm = document.querySelector("#searchTerm").value;
  const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=10&api_key=${apiKey}`;
  const gifsPromise = fetch(url);

  let gifsCollection;

  gifsPromise.then(searchResults => {
    return searchResults.json();
  }).then(jsonSearchResults => {
    gifsCollection = jsonSearchResults.data;
    console.log(gifsCollection);
    displayGifs(gifsCollection);
  }).catch(error => {
    console.log(error);
  });

  console.log(await gifsPromise);
}

const displayGifs = gifsCollection => {
  console.log("displaying gifs");

  const urls = gifsCollection.map(gif => gif.images.fixed_height.url);
  console.log(urls);

  const images = urls.map(url => {
    let img = document.createElement("img");
    img.setAttribute("src", url);
    return img;
  });

  document.body.removeChild(document.querySelector(".gifsDiv"));

  let gifsDiv = document.createElement("div");
  gifsDiv.className = "gifsDiv";

  images.map(img => {
    gifsDiv.appendChild(img);
  })
  document.body.appendChild(gifsDiv);
}

const clearGifs = () => {
  console.log("clearing gifs");

  document.body.removeChild(document.querySelector(".gifsDiv"));

  let gifsDiv = document.createElement("div");
  gifsDiv.className = "gifsDiv";
  document.body.appendChild(gifsDiv);
}

window.onload = init;
