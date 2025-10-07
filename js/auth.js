//Este se encarga de detectar el usuario activo y cambiar el texto del navbar
document.addEventListener("DOMContentLoaded", () => {
  const checkAuth = () => {
    const loginLink = document.getElementById("login-link");
    const userNameSpan = document.getElementById("user-name");
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (loginLink && usuario) {
      loginLink.textContent = "Cerrar sesión";
      loginLink.href = "#";

      if (userNameSpan) {
        userNameSpan.textContent = ` (${usuario.nombre})`;
      }

      loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("usuario");
        window.location.href = "index.html";
      });
    }
  };

  // Esperar un poco a que el navbar cargue
  setTimeout(checkAuth, 500);
});
