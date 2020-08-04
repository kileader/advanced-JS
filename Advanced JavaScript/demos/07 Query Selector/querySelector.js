const init = () => {

   let h1 = document.querySelector("#heading");
   h1.className = "myHeading";
   console.log(h1);

   let teams = document.querySelectorAll(".team");
   console.log(teams);

   teams = [...teams];
   console.log(teams);

   let divs = document.querySelectorAll("div");
   console.log(divs);
}

const printValue = () => {
   let emailField = document.querySelector("#email");
   console.log(emailField.value);
   emailField.value = "";
}
