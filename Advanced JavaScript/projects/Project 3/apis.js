// Initialize new task event listener and create first list of tasks
const init = () => {
  document.querySelector("#addNewTask").addEventListener("click", () => {
    clearTasks();
    addNewTask();
  });

  getTasks();
}

// Create new task, post to api, and get new list
const addNewTask = () => {
  console.log("adding new task");

  let xhr = new XMLHttpRequest();
  let url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks";
  let apiKey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
  let studentId = "2980300";
  let taskDescription = document.querySelector("#taskDescription").value;
  let requestBody = {
    'StudentId': studentId,
    'Description': taskDescription
  }

  xhr.open("post", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("x-api-key", apiKey);

  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
      console.log("new record added");
      getTasks();
    }
  }

  xhr.send(JSON.stringify(requestBody));
}

// Clear the current task list on the page
const clearTasks = () => {
  console.log("clearing tasks");
  let element = document.querySelector("#taskList");
  element.parentNode.removeChild(element);
}

// Create a list of tasks via get to the api, then append it to html
const getTasks = () => {
  let xhr = new XMLHttpRequest();
  let apiKey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
  let studentId = "2980300";
  let url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks/"
      + studentId;
  let json;
  let jsonTasks;
  let tasks;
  let description;
  let ul;
  let li;
  let a;

  xhr.open("get", url);

  xhr.setRequestHeader("x-api-key", apiKey);

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      json = JSON.parse(xhr.responseText);
      jsonTasks = Object.values(json);
      tasks = jsonTasks[0];

      ul = document.createElement("ul");
      ul.setAttribute("id", "taskList");

      for (i = 0; i < tasks.length ; i++) {
        description = tasks[i].Description;

        li = document.createElement("li");
        li.setAttribute("id", description);

        a = document.createElement("a");
        a.setAttribute("onclick", "removeTask('" + description + "')");
        a.innerHTML = '<img src="trashCan.png" alt="trash can">';

        li.appendChild(a);
        li.innerHTML += "<p>" + description + "</p>";

        ul.appendChild(li);
      }
      document.body.appendChild(ul);
    }
  }
  xhr.send();
}

// Use delete to remove task from api and show new list to page
const removeTask = taskId => {
  console.log("removing task: " + taskId);

  let xhr = new XMLHttpRequest();
  let url = "https://ghu8xhzgfe.execute-api.us-east-1.amazonaws.com/tasks";
  let apiKey = "Itcheui2tB58SlUGe8rrP8mskudGsNDT9nfKKG9S";
  let studentId = "2980300";

  let requestBody = {
    'StudentId': studentId,
    'Description': taskId
  }

  clearTasks();

  xhr.open("delete", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("x-api-key", apiKey);

  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
      console.log("record deleted");
      getTasks();
    }
  }

  xhr.send(JSON.stringify(requestBody));
}

window.onload = init;
