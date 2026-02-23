function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let hasil = document.getElementById("hasil");

    if (user && pass) {
        localStorage.setItem("user", user);
        hasil.style.color = "green";
        hasil.innerHTML = "Login berhasil!";
        tampilkanUser();
    } else {
        hasil.style.color = "red";
        hasil.innerHTML = "Isi username & password!";
    }
}

function tampilkanUser() {
    let user = localStorage.getItem("user");
    if (user) {
        document.getElementById("judul").innerHTML = "Halo, " + user;
        document.getElementById("loginBox").style.display = "none";
    }
}

function logout() {
    localStorage.removeItem("user");
    location.reload();
}

tampilkanUser();