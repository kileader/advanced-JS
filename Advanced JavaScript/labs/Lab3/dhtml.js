const init = () => {

   let form = document.createElement("form");

   let divFormGroup = document.createElement("div");
   divFormGroup.className = 'form-group';

   let inputUsername = document.createElement("input");
   inputUsername.className = 'form-control';
   inputUsername.setAttribute('type', 'text');
   inputUsername.setAttribute('id', 'username');

   let buttonClickMe = document.createElement("button");
   buttonClickMe.setAttribute('type', 'button');

   let textNode = document.createTextNode("click me");

   form.appendChild(divFormGroup);
   divFormGroup.appendChild(inputUsername);
   divFormGroup.appendChild(buttonClickMe);
   buttonClickMe.appendChild(textNode);

   document.body.appendChild(form);
}
