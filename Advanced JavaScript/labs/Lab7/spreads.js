const init = () => {
  const coursesRaw = document.querySelectorAll("#courses li");
  // console.log(coursesRaw);

  // My Attempt Using .map()
  // const courses = coursesRaw.map(li => li.textContent);

  const courses = [];
  for (let i = 0; i < coursesRaw.length; i++) {
    courses.push(coursesRaw[i].textContent);
  }
  // console.log(courses);

  const newCourses = [...courses, "Adv. CSS", "Big Data"];
  console.log(newCourses);
}

window.onload = init;
