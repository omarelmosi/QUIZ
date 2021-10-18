let btnStart = document.querySelector(".start");
let nameInput = document.querySelector(".name");

nameInput.addEventListener("input", function (e) {
  if (nameInput.value !== "") {
    btnStart.classList.add("show");
  } else {
    btnStart.classList.remove("show");
  }
});

btnStart.addEventListener("click", function (e) {
  localStorage.setItem(
    "data",
    JSON.stringify({
      name: nameInput.value,
    })
  );
  location.assign("./question.html");
});
