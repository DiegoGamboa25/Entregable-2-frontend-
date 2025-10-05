document.addEventListener("DOMContentLoaded", async () => {
  // Detectar ruta base según el entorno (local o GitHub Pages)
  let basePath = "";
  if (window.location.hostname.includes("github.io")) {
    // Si estás en GitHub Pages
    basePath = "/Entregable-2-frontend-/";
  }

  // --- Cargar NAVBAR ---
  const navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    try {
      const res = await fetch(`${basePath}components/navbar.html`);
      if (!res.ok) throw new Error("No se pudo cargar el navbar");
      const html = await res.text();
      navbarContainer.innerHTML = html;

      // Llamar a updateCartCount() si existe, cuando el navbar ya está en el DOM

      if (typeof updateCartCount === "function") {
        updateCartCount();
      } else {
        setTimeout(() => {
          if (typeof updateCartCount === "function") updateCartCount();
        }, 200);
      }


      // ✅ Ejecutar auth.js solo después de que el navbar se haya cargado
      const authScript = document.createElement("script");
      authScript.src = `${basePath}js/auth.js`;
      authScript.defer = true;
      document.body.appendChild(authScript);

    } catch (err) {
      console.error("Error cargando navbar:", err);
    }
  }

  // --- Cargar FOOTER ---
  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    try {
      const res = await fetch(`${basePath}components/footer.html`);
      if (!res.ok) throw new Error("No se pudo cargar el footer");
      const html = await res.text();
      footerContainer.innerHTML = html;
    } catch (err) {
      console.error("Error cargando footer:", err);
    }
  }
});

