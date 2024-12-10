document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); //Prevent Submit
  const username = document.getElementById("text").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;

  let valid = true;
  // Username validation
  const usernamePattern = /^[a-zA-Z]+$/;
  if (!usernamePattern.test(username)) {
    valid = false;
    document.querySelector(".input-controls:nth-child(1) .error").innerHTML =
      "Username can only contain letters";
  } else {
    document.querySelector(".input-controls:nth-child(1) .error").textContent =
      "";
  }
  // Email validation
  if (!email.includes("@")) {
    valid = false;
    document.querySelector(".input-controls:nth-child(2) .error").textContent =
      "Please enter a valid email address.";
  } else {
    document.querySelector(".input-controls:nth-child(2) .error").textContent =
      "";
  }
  // password validation
  if (password !== password2) {
    valid = false;
    document.querySelector(".input-controls:nth-child(4) .error").textContent =
      "Passwords do not match.";
  } else {
    document.querySelector(".input-controls:nth-child(4) .error").textContent =
      "";
  }
  //submit the form
  if (valid) {
    const Submitfrm = document.querySelector("h1");
    Submitfrm.textContent = "Form Submitted!";
    Submitfrm.style.color = "green";
  } else {
    const Submitfrm = document.querySelector("h1");
    Submitfrm.textContent = "Please Enter Valid Content !";
    Submitfrm.style.color = "red";
  }
});
