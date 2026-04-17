const loginBtn = document.getElementById("loginBtn");

const message = document.getElementById("message");

loginBtn.addEventListener("click", login);

function login() {
  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  if (!username || !password) {
    message.textContent = "Заполните все поля";

    message.className = "error";

    return;
  }

  fetch("https://dummyjson.com/auth/login", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      username: username,

      password: password,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Неверный логин или пароль");
      }

      return response.json();
    })

    .then((data) => {
      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data));

      message.textContent = `Добро пожаловать, ${data.firstName}!`;

      message.className = "success";
    })

    .catch((error) => {
      message.textContent = error.message;

      message.className = "error";
    });
}
