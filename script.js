function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let hasil = document.getElementById("hasil");

  if (user && pass) {
    hasil.style.color = "green";
    hasil.innerHTML = "Login berhasil!";
    localStorage.setItem("user", user);
  } else {
    hasil.style.color = "red";
    hasil.innerHTML = "Isi semua field!";
  }
}
