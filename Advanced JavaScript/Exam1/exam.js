const init = () => {
  // let _states = "<states><state><abbreviation>WI</abbreviation><fulltext>Wisconsin</fulltext></state><state><abbreviation>IL</abbreviation><fulltext>Illinois</fulltext></state><state><abbreviation>MN</abbreviation><fulltext>Minnesota</fulltext></state></states>";
  //
  // console.log(_states);
  //
  // let xmlParser = new DOMParser().parseFromString(﻿_states, "application/xml");
  // let fulltextNodes = xmlParser.getElementsByTagName("fulltext");
  //
  // console.log(fulltextNodes);
  //
  // let fulltext1Value = fulltextNodes[1].childNodes[0].nodeValue;
  //
  // console.log(fulltext1Value);
  //
  // let h1 = document.createElement("h1");
  // h1.innerHTML = fulltext1Value;
  //
  // document.body.appendChild(h1);
  const states = [{"abbreviation": "WI", "fulltext": "Wisconsin"},
      {"abbreviation": "IL", "fulltext": "Illinois"},
      {"abbreviation": "MN", "fulltext": "Minnesota"}];
  console.log(`abbreviation: ${states[1].abbreviation}\nfulltext: ${states[1].fulltext}`);

}

// const createMessage = message => {
//   let div = document.createElement("div");
//   div.className = 'message_container';
//
//   let h1 = document.createElement("h1");
//
//   h1.innerHTML = message;
//
//   div.appendChild(h1);
//
//   console.log(div);
//
//   return div;
// }

window.onload = init;
