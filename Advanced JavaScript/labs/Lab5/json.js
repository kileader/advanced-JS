const init = () => {

  let students = [
    {"id": 1234, "name": "Kevin Leader", "email": "kleader@hotmail.com"},
    {"id": 5471, "name": "Bobby Booyah", "email": "bbooyah@hotmail.com"},
    {"id": 6810, "name": "Sarah Sanders", "email": "ssanders@hotmail.com"},
    {"id": 3981, "name": "Timmy Turner", "email": "tturner@hotmail.com"},
    {"id": 6014, "name": "Kim Cantaloupe", "email": "kcantaloupe@hotmail.com"}];

  for (let i = 0; i < students.length; i++) {
    console.log(`student number: ${students[i].id}\nstudent email: ${students[i].email}`);
  }
  
}

window.onload = init;
