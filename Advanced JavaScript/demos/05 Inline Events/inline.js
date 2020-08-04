function printMessage() {
    console.log("hello world");
}

function valueChanged() {
    console.log("value changed");
}

function leftField(field) {
    let message = "";

    message = requiredField(field) ? field.value : "nothing was entered";

    console.log(message);

}

function requiredField(textbox) {

    return textbox.value.length > 0;

}
