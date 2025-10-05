document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Usuarios falsos para pruebas
      const usuariosValidos = [
        { nombre: "Diego", email: "diego@example.com", password: "1234" },
        { nombre: "Admin", email: "admin@example.com", password: "admin" }
      ];

      const usuario = usuariosValidos.find(
        u => u.email === email && u.password === password
      );

      if (usuario) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        alert(`Bienvenido, ${usuario.nombre}`);
        window.location.href = "index.html"; // redirige al inicio
      } else {
        alert("Correo o contraseña incorrectos.");
      }
    });
  }
});
