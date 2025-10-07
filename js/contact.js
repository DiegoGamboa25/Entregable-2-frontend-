
// Simula el envío del formulario y guarda los datos localmente sin afectar estilos ni backend.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const btn = document.getElementById("sendBtn");
  const feedback = document.getElementById("contactFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Honeypot antispam
    const honey = document.getElementById("company").value.trim();
    if (honey) return;

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      showFeedback("Por favor completa los campos obligatorios.", "danger");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFeedback("El correo electrónico no es válido.", "warning");
      return;
    }

    // Simular envío
    btn.disabled = true;
    const oldText = btn.innerText;
    btn.innerText = "Enviando...";

    setTimeout(() => {
      // Guardar datos en localStorage (simulación)
      const mensajes = JSON.parse(localStorage.getItem("mensajesContacto") || "[]");
      mensajes.push({
        nombre,
        apellido,
        email,
        mensaje,
        fecha: new Date().toLocaleString(),
      });
      localStorage.setItem("mensajesContacto", JSON.stringify(mensajes));

      // Restablecer formulario
      form.reset();
      btn.disabled = false;
      btn.innerText = oldText;

      showFeedback("✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.", "success");
    }, 1000);
  });

  //  Mostrar alerta y ocultarla automáticamente después de 4 segundos
  function showFeedback(text, type) {
    if (!feedback) return;
    feedback.className = `alert alert-${type} mt-3`;
    feedback.style.display = "block";
    feedback.textContent = text;

    // ⏱️ Quitar mensaje después de 4 segundos
    setTimeout(() => {
      feedback.style.display = "none";
    }, 4000);
  }
});