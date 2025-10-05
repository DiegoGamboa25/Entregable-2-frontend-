document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    let basePath = "";
    if (window.location.pathname.includes("/pages/") || window.location.pathname.includes("/views/")) {
      basePath = "../";
    }

    fetch(`${basePath}components/footer.html`)
      .then(res => {
        if (!res.ok) throw new Error("No se pudo cargar el footer");
        return res.text();
      })
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(err => console.error(err));
  }
});
