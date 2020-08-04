function init() {
    let name = "Bryan Witkowski";
    console.log(typeof(name));

    let age = 100;
    console.log(typeof(age));

    let isMarried = false;
    console.log(typeof(isMarried));

    let person = {}; //new Object();
    console.log(typeof(person));

    let people = []; //collection
    console.log(typeof(people));

    let sayHello = function() {
        alert("hello");
    }
    console.log(typeof(sayHello));
    console.log(sayHello);
    console.log(sayHello());
}
