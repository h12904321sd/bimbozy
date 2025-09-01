// Contraseña de acceso (puedes cambiarla)
const PASSWORD = "bimbo321";

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    error.textContent = "Contraseña incorrecta 🚫";
  }
}

function startGame() {
  document.querySelector(".game-menu").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  let x = 50, y = 50, speed = 5;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0ff";
    ctx.fillRect(x, y, 40, 40);
  }

  function update() {
    draw();
    requestAnimationFrame(update);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") y -= speed;
    if (e.key === "ArrowDown") y += speed;
    if (e.key === "ArrowLeft") x -= speed;
    if (e.key === "ArrowRight") x += speed;
  });

  update();
}

function credits() {
  alert("bimbo.exe\nFanmade Beta Game Style\nInspirado en Fede Vigevani");
}

function exit() {
  window.close();
}


function startGame() {
  document.querySelector(".game-menu").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  // Juego beta retro: cuadrado que se mueve
  let x = 50, y = 50, speed = 5;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0ff";
    ctx.fillRect(x, y, 40, 40);
  }

  function update() {
    draw();
    requestAnimationFrame(update);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") y -= speed;
    if (e.key === "ArrowDown") y += speed;
    if (e.key === "ArrowLeft") x -= speed;
    if (e.key === "ArrowRight") x += speed;
  });

  update();
}

function credits() {
  alert("bimbo.exe\nFanmade Beta Game Style\nInspirado en Fede Vigevani");
}

function exit() {
  window.close();
}
