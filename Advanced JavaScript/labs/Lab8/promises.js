const init = () => {
  let helloWorld = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world")
    }, 1500);
  });

  helloWorld.then(data => {
    console.log(data);
  })

  let unable = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error("unable to resolve request"))
    }, 500);
  })

  unable.then(data => {
    console.log(data);
  }).catch(error => {
    console.error(error);
  })
}

window.onload = init;
