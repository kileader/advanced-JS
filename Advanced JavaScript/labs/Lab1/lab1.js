function verifyInput() {

    let username = document.getElementById("username").value;

    if (username == "") {
        alert("username is a required field");
    } else {
        alert("entered username: " + username);
    }

}
